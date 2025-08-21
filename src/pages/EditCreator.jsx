import { useEffect, useState } from 'react';
import { useNavigate, useParams, Link } from 'react-router-dom';
import { supabase } from '../client.js';

const EditCreator = () => {
  const { id } = useParams();  // Get id from url parameters
  const navigate = useNavigate();

  const [form, setForm] = useState({
    name: "",
    url: "",
    description: "",
    imageURL: ""
  });

  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
  const [err, setErr] = useState("");

  // Method for updating a field of the form
  function update(field, value) {
    setForm((form) => ({ ...form, [field]: value }));
  }

  /*
   * Fetches a creator.
   */
  useEffect(() => {
    async function fetchCreator() {
      setLoading(true);
      const { data, error } = await supabase
        .from("creators")
        .select("*")
        .eq("id", id)
        .single();

      if (error) {
        console.error(error);
        setErr(error.message || "Failed to load creator.");
      } else if (data) {
        setForm({
          name: data.name ?? "",
          url: data.url ?? "",
          description: data.description ?? "",
          imageURL: data.imageURL ?? ""
        });
      }
      setLoading(false);
    }

    fetchCreator();
  }, [id]);

  // Submit form handler
  async function handleSave(e) {
    e.preventDefault();
    setSaving(true);
    setErr("");

    const payload = {
      name: form.name.trim(),
      url: form.url.trim(),
      description: form.description.trim(),
      imageURL: form.imageURL.trim() || null
    };

    const { error } = await supabase.from("creators").update(payload).eq("id", id);
    setSaving(false);

    if (error) {
      console.error(error);
      setErr(error.message || "Failed to update creator.");
    } else {
      navigate(`/creators/${id}`);  // Navigate to edited creator's page
    }
  }

  async function handleDelete() {
    // Delete requires confirmation
    if (!confirm("Delete this creator? This cannot be undone.")) return;

    const { error } = await supabase.from("creators").delete().eq("id", id);

    if (error) {
      console.error(error);
      alert(error.message || "Failed to delete creator.");
    } else {
      navigate("/");  // Navigate back to index
    }
  }

  if (loading) return <div className='center'>Loading...</div>;

  return (
    <section className='edit'>
      <div className="row">
        <h2>Edit Creator</h2>
        <Link className='btn' to={`/creators/${id}`}>View</Link>
      </div>

      <form className="form" onSubmit={handleSave}>
        <div className="field">
          <label htmlFor="name">Name</label>
          <input type="text" className="input" id="name" 
           value={form.name} onChange={(e) => update("name", e.target.value)}
           required />
        </div>

        <div className="field">
          <label htmlFor="url">URL</label>
          <input type="text" className="input" id="url" 
           value={form.url} onChange={(e) => update("url", e.target.value)}
           required />
        </div>

        <div className="field">
          <label htmlFor="description">Description</label>
          <textarea className='textarea' id="description" value={form.description} 
           onChange={(e) => update("description", e.target.value)} />
        </div>

        <div className="field">
          <label htmlFor="imageURL">Image URL (optional)</label>
          <input type="text" className="input" id="imageURL" 
           value={form.imageURL} onChange={(e) => update("imageURL", e.target.value)} />
        </div>

        {err && <div className="helper" style={{ color: "salmon" }}>{err}</div>}

        <div className="row">
          <button className="btn primary" type="submit"
           disabled={saving}>{saving ? "Saving..." : "Save Changes"}</button>
          <button className="btn" type="button" onClick={() => navigate(-1)}>Cancel</button>
          <button className="btn danger" type="button" onClick={handleDelete}>Delete</button>
        </div>
      </form>
    </section>
  );
}

export default EditCreator;
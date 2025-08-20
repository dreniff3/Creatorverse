import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { supabase } from '../client.js';

const AddCreator = () => {
  const navigate = useNavigate();

  const [form, setForm] = useState({
    name: "",
    url: "",
    description: "",
    imageURL: ""
  });

  const [saving, setSaving] = useState(false);
  const [err, setErr] = useState("");

  /*
   * Updates form state.
   */
  function update(field, value) {
    setForm((form) => ({ ...form, [field]: value }));
  }

  async function handleSubmit(e) {
    e.preventDefault();
    setSaving(true);
    setErr("");

    const payload = {
      name: form.name.trim(),
      url: form.url.trim(),
      description: form.description.trim(),
      imageURL: form.imageURL.trim() || null
    };

    const { data, error } = await supabase.from("creators").insert([payload]).select().single();

    setSaving(false);
    if (error) {
      console.error(error);
      setErr(error.message || "Failed to add creator.");
    } else {
      navigate(`/creators/${data.id}`);  // Navigate to creator's page
    }
  }

  return (
    <div>
      <h2>AddCreator</h2>
      <form className="form" onSubmit={handleSubmit}>
        <div className="field">
          <label htmlFor="name">Name</label>
          <input 
            type="text" 
            className="input" 
            id="name" 
            value={form.name} 
            onChange={(e) => update("name", e.target.value)}
            required
          />
        </div>

        <div className="field">
          <label htmlFor="url">URL</label>
          <input 
            type="text" 
            className="input" 
            id="url" 
            value={form.url} 
            onChange={(e) => update("url", e.target.value)}
            placeholder="https://…"
            required
          />
          <div className="helper">Link to their channel/page.</div>
        </div>

        <div className="field">
          <label htmlFor="description">Description</label>
          <textarea name="description" id="description" className="textarea"
           value={form.description} onChange={(e) => update("description", e.target.value)} 
           required />
        </div>

        <div className="field">
          <label htmlFor="imageURL">Image URL (optional)</label>
          <input 
            type="text" 
            className="input" 
            id="imageURL"
            value={form.imageURL}
            onChange={(e) => update("imageURL", e.target.value)}
          />
        </div>

        {err && <div className='helper' style={{ color: "salmon"}}>{err}</div>}
        <div className="row">
          <button className="btn primary" type="submit" disabled={saving}>
            {saving ? "Saving..." : "Create"}
          </button>
          <button className="btn" type="button" onClick={() => navigate(-1)}>
            Cancel
          </button>
        </div>
      </form>
    </div>
  );
}

export default AddCreator;
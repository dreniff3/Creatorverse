import { useEffect, useState } from 'react';
import { useNavigate, useParams, Link } from 'react-router-dom';
import { supabase } from '../client.js';

const ViewCreator = () => {
  const { id } = useParams();  // Get id from url parameters
  const navigate = useNavigate();

  const [creator, setCreator] = useState(null);
  const [loading, setLoading] = useState(true);

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
        console.log(error);
        setCreator(null);
      } else {
        setCreator(data);
      }
      setLoading(false);
    }

    fetchCreator();
  }, [id]);

  if (loading) return <div className="center">Loading...</div>;
  if (!creator) return <div className="center">Creator not found.</div>;

  const { name, url, description, imageURL } = creator;
  const image = imageURL?.trim() ? imageURL : "https://images.unsplash.com/photo-1544502062-f82887f03d1c?q=80&w=1559&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";
  
  const normalizeURL = (url) =>{
    if (!/^https?:\/\//i.test(url)) {
      return `https://${url}`;
    }
    return url;
  };

  return (
    <div className='grid'>
      <div className="card">
        <img src={image} alt={name} />
        <h2>{name}</h2>
        <p>{description || "No description provided."}</p>

        <div className="row">
          {url && (
            <a href={normalizeURL(url)} className="btn primary" target="_blank" rel="noreferrer">
              Visit Channel
            </a>
          )}
          <Link className='btn primary' to={`/creators/${id}/edit`}>Edit</Link>
          <button className="btn" onClick={() => navigate("/")}>Back</button>
        </div>
      </div>      
    </div>
  );
}

export default ViewCreator;
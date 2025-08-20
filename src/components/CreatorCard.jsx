import { Link } from 'react-router-dom';

const CreatorCard = ({ creator }) => {
  const { id, name, url, description, imageURL } = creator;

  const image = imageURL?.trim() ? imageURL : 'https://images.unsplash.com/photo-1544502062-f82887f03d1c?q=80&w=1559&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D';

  return (
    <div className='card'>
      <img src={image} alt={name} />
      <h3>{name || "Unnamed Creator"}</h3>
      <p>{description || "No description provided."}</p>

      <div className="row">
        {url && (
          <a href={url} className="btn" target="_blank" rel="noreferrer">
            Visit Channel
          </a>
        )}
        <Link className='btn' to={`/creators/${id}`}>View</Link>
        <Link className='btn' to={`/creators/${id}/edit`}>Edit</Link>
      </div>
    </div>
  );
}

export default CreatorCard;
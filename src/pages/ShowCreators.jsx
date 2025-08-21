import { Link } from 'react-router-dom';

import CreatorCard from '../components/CreatorCard';

const ShowCreators = ({ creators, loading }) => {
  if (loading) return <div className="center">Loading creators...</div>;
  
  return (
    <section className="all">
      <div className="row" style={{ justifyContent: "space-between" }}>
        <h2>All Creators</h2>
      </div>

      {(!creators || creators.length === 0 ? (
        <div className='center'>
          <p>No content creators yet. Add your first one!</p>
          <Link className="btn primary" to="/creators/new">+ Add Creator</Link>
        </div>
      ) : (
        <div className="grid">
          {creators.map((creator) => (
            <CreatorCard key={creator.id} creator={creator} />
          ))}
        </div>
      ))}
    </section>
  );
}

export default ShowCreators;
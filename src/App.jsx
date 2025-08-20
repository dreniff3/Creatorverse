import { useState, useEffect } from 'react';
import { Link, Navigate, useRoutes } from 'react-router-dom';
import './App.css';

import { supabase } from './client.js';

// Pages
import ShowCreators from './pages/ShowCreators.jsx';
import ViewCreator from './pages/ViewCreator.jsx';
import AddCreator from './pages/AddCreator.jsx';
import EditCreator from './pages/EditCreator.jsx';

function App() {
  const [creators, setCreators] = useState([]);
  const [loading, setLoading] = useState(true);

  /*
   * Fetches creators from db only once after the initial render of the component.
   */
  useEffect(() => {
    async function fetchCreators() {
      setLoading(true);
      const { data, error } = await supabase
        .from("creators")
        .select("*")
        .order("id", { ascending: true });

      if (error) {
        console.error(error);
        setCreators([]);
      } else {
        // Set to data if it exists, else set to empty array
        setCreators(data ?? []);
      }
      setLoading(false);
    }

    fetchCreators();
  }, []);

  const routes = useRoutes([
    { path: "/", element: <ShowCreators creators={creators} loading={loading} /> },
    { path: "/creators/new", element: <AddCreator /> },
    { path: "/creators/:id", element: <ViewCreator /> },
    { path: "/creators/:id/edit", element: <EditCreator /> },
    { path: "*", element: <Navigate to="/" replace /> }
  ]);

  return (
    <div className='container'>
      <nav className='nav'>
        <Link to="/" className='brand'>💫 Creatorverse</Link>
      </nav>
      {routes}
    </div>
  );
}

export default App;

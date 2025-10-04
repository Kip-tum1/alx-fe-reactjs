// import React, { useState } from 'react';

// function Search() {
//   const [searchTerm, setSearchTerm] = useState('');
//   const [user, setUser] = useState(null);
//   const [loading, setLoading] = useState(false);
//   const [error, setError] = useState(null);

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     if (!searchTerm.trim()) return;

//     setLoading(true);
//     setError(null);
//     setUser(null);

//     try {
//       const response = await fetch(`https://api.github.com/users/${encodeURIComponent(searchTerm)}`, {
//         headers: {
//           'Accept': 'application/vnd.github+json',
//           'X-GitHub-Api-Version': '2022-11-28',
//         },
//       });

//       if (!response.ok) {
//         throw new Error('User not found');
//       }

//       const data = await response.json();
//       setUser(data);
//     } catch (err) {
//       setError('Looks like we cant find the user');
//     } finally {
//       setLoading(false);
//     }

//     setSearchTerm(''); // Reset input after submission
//   };

//   return (
//     <div>
//       <form onSubmit={handleSubmit}>
//         <input
//           type="text"
//           value={searchTerm}
//           onChange={(e) => setSearchTerm(e.target.value)}
//           placeholder="Enter GitHub username..."
//         />
//         <button type="submit" disabled={loading}>
//           {loading ? 'Searching...' : 'Search'}
//         </button>
//       </form>

//       {loading && <p>Loading...</p>}
//       {error && <p>{error}</p>}
//       {user && (
//         <div>
//           <img src={user.avatar_url} alt={`${user.login}'s avatar`} width="50" />
//           <h3>{user.name || user.login}</h3>
//           <a href={user.html_url} target="_blank" rel="noopener noreferrer">
//             View Profile
//           </a>
//         </div>
//       )}
//     </div>
//   );
// }

// export default Search;

// function SearchForm() {
//   const [searchTerm, setSearchTerm] = useState("");
//   const [location, setLocation] = useState("");
//   const [minRepos, setMinRepos] = useState("");
//   const [loading, setLoading] = useState(false);

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     setLoading(true);
//     try {
//       // Call githubServices with { username: searchTerm, location, minRepos }
//       const data = await githubServices.searchUsers({ searchTerm, location, minRepos });
//       // Handle data
//     } catch (err) {
//       // Error handling
//     } finally {
//       setLoading(false);
//     }
//   };

//   return (
//     <form onSubmit={handleSubmit} className="space-y-4">
//       <input
//         type="text"
//         value={searchTerm}
//         onChange={(e) => setSearchTerm(e.target.value)}
//         placeholder="Enter GitHub username..."
//         className="w-full p-2 border"
//       />
//       <input
//         type="text"
//         value={location}
//         onChange={(e) => setLocation(e.target.value)}
//         placeholder="Location..."
//         className="w-full p-2 border"
//       />
//       <input
//         type="number"
//         value={minRepos}
//         onChange={(e) => setMinRepos(e.target.value)}
//         placeholder="Minimum repositories..."
//         className="w-full p-2 border"
//       />
//       <button
//         type="submit"
//         disabled={loading}
//         className="w-full p-2 bg-blue-500 text-white disabled:bg-blue-300"
//       >
//         {loading ? "Searching..." : "Search"}
//       </button>
//     </form>
//   );
// }

import { useState } from "react";
import githubServices from "./githubServices";

function SearchForm() {
  const [searchTerm, setSearchTerm] = useState("");
  const [location, setLocation] = useState("");
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [page, setPage] = useState(1);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError(null);
    try {
      const data = await githubServices.searchUsers({ searchTerm, location, page });
      setUsers(data.items || []);
    } catch (err) {
      setError("Failed to fetch users. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  const loadMore = async () => {
    setLoading(true);
    try {
      const data = await githubServices.searchUsers({ searchTerm, location, page: page + 1 });
      setUsers((prev) => [...prev, ...(data.items || [])]);
      setPage((prev) => prev + 1);
    } catch (err) {
      setError("Failed to load more users.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="space-y-4">
      <form onSubmit={handleSubmit} className="space-y-4">
        <input
          type="text"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          placeholder="Enter GitHub username..."
          className="w-full p-2 border"
        />
        <input
          type="text"
          value={location}
          onChange={(e) => setLocation(e.target.value)}
          placeholder="Location..."
          className="w-full p-2 border"
        />
        <button
          type="submit"
          disabled={loading}
          className="w-full p-2 bg-blue-500 text-white disabled:bg-blue-300"
        >
          {loading ? "Searching..." : "Search"}
        </button>
      </form>
      {error && <p className="text-red-500">{error}</p>}
      <div className="mt-4">
        {users.length > 0 && (
          <ul className="space-y-2">
            {users.map((user) => (
              <li key={user.id} className="p-2 border">
                <a
                  href={user.html_url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-500"
                >
                  {user.login}
                </a>
                - Location: {user.location || "N/A"}
                - Repos: {user.public_repos}
              </li>
            ))}
          </ul>
        )}
        {users.length > 0 && !loading && (
          <button
            onClick={loadMore}
            disabled={loading}
            className="mt-4 p-2 bg-blue-500 text-white disabled:bg-blue-300"
          >
            {loading ? "Loading..." : "Load More"}
          </button>
        )}
      </div>
    </div>
  );
}

export default function Search() {
  return <SearchForm />;
}
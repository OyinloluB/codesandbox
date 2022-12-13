// import React, { useState, useEffect } from 'react';
// import axios from 'axios';

// const MyComponent: React.FC = () => {
//   const [repository, setRepository] = useState<any>(null);
//   const [branches, setBranches] = useState<any[]>([]);
//   const [isLoading, setIsLoading] = useState(false);
//   const [error, setError] = useState(null);

//   const fetchData = () => {
//     setIsLoading(true);
//     setError(null);

//     // Fetch the repository data from GitHub using the Axios API
//     axios.get<any>('https://api.github.com/repos/{OWNER}/{REPO}')
//       .then(response => {
//         setRepository(response.data);

//         // Once we have the repository data, fetch the list of branches
//         axios.get<any[]>(`https://api.github.com/repos/{OWNER}/{REPO}/branches`)
//           .then(response => {
//             setBranches(response.data);
//             setIsLoading(false);
//           });
//       })
//       .catch(err => {
//         setError(err);
//         setIsLoading(false);
//       });
//   }

// import React, { useState } from 'react';
// import axios from 'axios';

// const MyGitHubRepo: React.FC = () => {
//   const [repoName, setRepoName] = useState('');
//   const [branches, setBranches] = useState<string[]>([]);

//   const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
//     setRepoName(event.target.value);
//   }

//   const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
//     event.preventDefault();

//     try {
//       const response = await axios.get(`https://api.github.com/repos/${repoName}/branches`);
//       setBranches(response.data.map((branch: any) => branch.name));
//     } catch (error) {
//       console.error(error);
//     }
//   }

//   return (
//     <div>
//       <form onSubmit={handleSubmit}>
//         <label>
//           Repository name:
//           <input type="text" value={repoName} onChange={handleChange} />
//         </label>
//         <button type="submit">Fetch branches</button>
//       </form>
//       <ul>
//         {branches.map((branch, index) => (
//           <li key={index}>{branch}</li>
//         ))}
//       </ul>
//     </div>
//   );
// }

// Fetch repository branches
// const response = await axios.get(
//   `https://api.github.com/repos/${owner}/${repository}/branches`,
//   {
//     method: "GET",
//     withCredentials: false,
//   }
// );

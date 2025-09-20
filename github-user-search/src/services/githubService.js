// import axios from "axios";

// function fetchUserData(){
//     axios.get('https://github.com/Kip-tum1/alx-fe-reactjs')
//     .then(response => {console.log(response.data)})
//     .catch(error => {console.log(error)})

// }

// export default fetchUserData;

import axios from "axios";

function fetchUserData(params = {}) {
  const { username, location, minRepos } = params;
  let query = username || "";
  if (location) query += `+location:${location}`;
  if (minRepos) query += `+repos:>${minRepos}`;

  return axios
    .get(`https://api.github.com/search/users?q=${encodeURIComponent(query)}`, {
      headers: {
        Accept: "application/vnd.github.v3+json",
      },
    })
    .then((response) => response.data)
    .catch((error) => {
      console.error("Error fetching user data:", error);
      throw error;
    });
}

export default fetchUserData;
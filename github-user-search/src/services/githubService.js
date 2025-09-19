import axios from "axios";

function fetchUserData(){
    axios.get('https://github.com/Kip-tum1/alx-fe-reactjs')
    .then(response => {console.log(response.data)})
    .catch(error => {console.log(error)})

}

export default fetchUserData;
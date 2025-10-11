import { useState } from "react";

function RegistrationForm(){
    const[registrationForm, setRegistrationForm] = useState({username: "", email: "", password: ""});
    const handleChange = (e) => {
        const { username, value} = e.target;
        setRegistrationForm(prevState => ({...prevState, [username]: value}));
    }
    const handleSubmit = (e) => {

        e.preventDefault();
        console.log(registrationForm);
    }
    return(
        <div>
            <form onSubmit={handleSubmit}>
            <input
                type="text"
                name="username"
                value={username}
                onChange={handleChange}
            />
            <input
                type="email"
                name="email"
                value={email}
                onChange={handleChange}
            />
            <input
                type="password"
                name="password"
                value={password}
                onChange={handleChange}
            />
            <button type="submit">Submit</button>
        </form>

        </div>
    )
}
export default RegistrationForm;
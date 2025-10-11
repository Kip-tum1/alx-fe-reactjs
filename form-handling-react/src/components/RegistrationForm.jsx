// import { useState } from "react";

// function RegistrationForm(){
//     const[registrationForm, setRegistrationForm] = useState({username: "", email: "", password: ""});
//     const handleChange = (e) => {
//         const { username, value} = e.target;
//         setRegistrationForm(prevState => ({...prevState, [username]: value}));
//     }
//     const handleSubmit = (e) => {

//         e.preventDefault();
//         console.log(registrationForm);
//     }
//     return(
//         <div>
//             <form onSubmit={handleSubmit}>
//             <input
//                 type="text"
//                 name="username"
//                 value={username}
//                 onChange={handleChange}
//             />
//             <input
//                 type="email"
//                 name="email"
//                 value={email}
//                 onChange={handleChange}
//             />
//             <input
//                 type="password"
//                 name="password"
//                 value={password}
//                 onChange={handleChange}
//             />
//             <button type="submit">Submit</button>
//         </form>

//         </div>
//     )
// }
// export default RegistrationForm;

import React, { useState } from 'react';

const RegistrationForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
  });
  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const validateForm = () => {
    let tempErrors = {};
    if (!username) tempErrors.name = 'Name is required';
    if (!email) {
      tempErrors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      tempErrors.email = 'Invalid email address';
    }
    if (!password) tempErrors.password = 'Password is required';
    else if (formData.password.length < 6) tempErrors.password = 'Password must be at least 6 characters';
    return tempErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validateForm();
    if (Object.keys(validationErrors).length === 0) {
      console.log('Form values:', formData);
    } else {
      setErrors(validationErrors);
    }
  };

  return (
    <div>
      <h2>Registration Form</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="name">Name</label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
          />
          {errors.name && <div style={{ color: 'red' }}>{errors.name}</div>}
        </div>

        <div>
          <label htmlFor="email">Email</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
          />
          {errors.email && <div style={{ color: 'red' }}>{errors.email}</div>}
        </div>

        <div>
          <label htmlFor="password">Password</label>
          <input
            type="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
          />
          {errors.password && <div style={{ color: 'red' }}>{errors.password}</div>}
        </div>

        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default RegistrationForm;

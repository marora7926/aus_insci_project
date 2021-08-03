import React from 'react';
import { useForm } from 'react-hook-form';

import "./involved.css";

export default function Enquiry() {
  const { register, handleSubmit, formState: { errors } } = useForm();
  const onSubmit = data => console.log(data);
  console.log(errors);
  return (
    <div>
        <form onSubmit={handleSubmit(onSubmit)}>
            <h2>General Enquiry Form</h2>
            <hr></hr>
            <select {...register("Title", { required: true })}>
                <option value="Mr">Mr</option>
                <option value="Mrs">Mrs</option>
                <option value="Miss">Miss</option>
                <option value="Dr">Dr</option>
            </select>
            <hr></hr>
            <input type="text" placeholder="First name" {...register("First name", {required: true, maxLength: 80})} />
            <hr></hr>
            <input type="text" placeholder="Last name" {...register("Last name", {required: true, maxLength: 100})} />
            <hr></hr>
            <input type="text" placeholder="Email" {...register("Email", {required: true, pattern: /b[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}\b/i})} />
            <hr></hr>
            <textarea placeholder="Write your message here" {...register("Message", {required: true})} />
            <hr></hr>
            <p>Thank you for contacting us, a team member will get back to you in next 3-5 days.</p>
            <input type="submit" />
        </form>
    </div>
  );
}


// import React, { useState } from 'react';
// import { validateEmail } from '../../utils/helpers';

// const styles = {
//     form: {
//         margin: '20px',
//     },
//     input: {
//         display: 'block',
//         marginTop: '5px',
//         marginBottom: '5px',
//         width: '100%',
//     },
// };

// style={styles.form}
// style={styles.input}

// function Contact() {
//   // Create state variables for the fields in the form
//   // We are also setting their initial values to an empty string
//   const [email, setEmail] = useState('');
//   const [name, setName] = useState('');
//   const [message, setMessage] = useState('');
//   const [errorMessage, setErrorMessage] = useState('');

//   const handleInputChange = (e) => {
//     // Getting the value and name of the input which triggered the change
//     const { target } = e;
//     const inputType = target.name;
//     const inputValue = target.value;

//     // Based on the input type, we set the state of either email, username, and password
//     if (inputType === 'email') {
//       setEmail(inputValue);
//     } else if (inputType === 'name') {
//       setName(inputValue);
//     } else {
//       setMessage(inputValue);
//     }
//   };

//   const handleFormSubmit = (e) => {
//     // Preventing the default behavior of the form submit (which is to refresh the page)
//     e.preventDefault();

//     // First we check to see if the email is not valid or if the userName is empty. If so we set an error message to be displayed on the page.
//     if (!validateEmail(email)) {
//       setErrorMessage('Please check your email');
//       // We want to exit out of this code block if something is wrong so that the user can correct it
//       return;
//       // Then we check to see if the password is not valid. If so, we set an error message regarding the password.
//     }
//     // If everything goes according to plan, we want to clear out the input after a successful registration.
//     setName('');
//     setMessage('');
//     setEmail('');
//   };

//     return (
//         <div>
//             <p>Thank you for writing to us, {name}</p>
//             <form style={styles.form}>
//                 Email:
//                 <input
//                 style={styles.input}
//                 value={email}
//                 name="email"
//                 onChange={handleInputChange}
//                 type="email"
//                 placeholder="email"
//                 />
//                 <hr></hr>
//                 Name:
//                 <input
//                 style={styles.input}
//                 value={name}
//                 name="name"
//                 onChange={handleInputChange}
//                 type="text"
//                 placeholder="name"
//                 />
//                 <hr></hr>
//                 Message:
//                 <input
//                 style={styles.input}
//                 value={message}
//                 name="message"
//                 onChange={handleInputChange}
//                 type="textarea"
//                 placeholder="write you message here"
//                 />
//                 <button type="button" onClick={handleFormSubmit}>Submit</button>
//             </form>
//             {errorMessage && (
//                 <div>
//                 <p className="error-text">{errorMessage}</p>
//                 </div>
//             )}
//         </div>
//     );
// }

// export default Contact;
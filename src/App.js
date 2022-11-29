import React, { useState } from 'react';
import Form from './Components/Form'
import './App.css';

const initialFormValues ={
  username: '',
  email: '',
  password: '',
  terms: false
}

function App() {
  const [formValues, setFormValues] = useState(initialFormValues);

  const handleChange = (name, value) => {
    setFormValues({ ...formValues, [name]: value});
  }

  const handleSubmit = () => {
    const newFriend = {
      // username: formValues.username.trim(),
      // email: formValues.email.trim(),
      // password: formValues.password.trim(),
      // checked: formValues.checked
    }
  }

  return (
    <div className="App">
      <Form values={formValues} change={handleChange}/>
    </div>
  );
}

export default App;

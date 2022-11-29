import React, { useState } from 'react';
import Form from './Components/Form'
import './App.css';
import schema from './Validation/FormSchema';
import * as yup from 'yup';
import axios from "axios";

const initialFormValues = {
  username: '',
  email: '',
  password: '',
  terms: false
}

const initialFormErrors = {
  username: '',
  email: '',
  password: '',
  terms: ''
}

const initialUsers = []

function App() {
  const [formValues, setFormValues] = useState(initialFormValues);
  const [formErrors, setFormErrors] = useState(initialFormErrors);
  const [users, setUsers] = useState(initialUsers)

  const handleChange = (name, value) => {
    validate(name, value);
    setFormValues({ ...formValues, [name]: value});
  }

  const handleSubmit = () => {
    axios.post("https://reqres.in/api/users")
      .then(res => {
        setUsers(res.data, ...users);
      })
      .catch(err => console.error(err));
  }

  const validate = (name, value) => {
    yup.reach(schema, name)
      .validate(value)
      .then(() => setFormErrors({ ...formErrors, [name]: "" }))
      .catch(err => setFormErrors({ ...formErrors, [name]: err.errors[0] }))
  }

  return (
    <div className="App">
      <Form values={formValues} 
      change={handleChange} 
      errors={formErrors} 
      submit={handleSubmit}
      />
    </div>
  );
}

export default App;

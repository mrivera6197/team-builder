import React, { useState, useEffect } from 'react';
import Form from './components/Form'
import './App.css';
import axios from 'axios'
import Member from './components/Member'

const initialFormValues = {
  name: '', 
  email: '', 
  role: '',
}

export default function App() {
  const [members, setMembers] = useState([])
  const [formValues, setFormValues] = useState(initialFormValues)

  const updateForm = (input, value) => {
    setFormValues({...formValues, [input]: value,})

  }

  const submitForm = () => {
    const newMember = {
      name: formValues.name.trim(),
      email: formValues.email.trim(),
      role: formValues.role,
    }
    
    if(!newMember.name || !newMember.email || !newMember.role){
      return alert ('fill out ur info!!')
    }
    console.log(newMember)
    setMembers([...members, newMember])
  }
 

  return (
    <div className="App">
      <h1>build yo team</h1>
        <Form values={formValues} update={updateForm} submit={submitForm}/>
        {
          members.map(member => {
            return (
              // <p>{member.name}</p>
              <Member key={member.id} info={member}/>
            )
          })
        }
    </div>
  );
}


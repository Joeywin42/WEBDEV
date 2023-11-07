import React, { useState } from 'react';

import Card from './Card';
import Button from './Button';
import './AddUser.css';
const AddUser = (props) => {
  const [username, setUsername] = useState('');
  const [age, setAge] = useState('');
  const [img, setImg] = useState('');
  const [major, setMajor] = useState('');

  const addUserHandler = (event) => {
    event.preventDefault();


    const newUser = {
      id: Math.random(),
      name: username,
      age: +age,
      img: img,
      major: major,
    };

    // Call the parent component's function to add the user
    props.onAddUser(newUser);

    // Clear the input fields
    setUsername('');
    setAge('');
    setImg('');
    setMajor('');
  };

  return (
    <Card className="input">
      <form onSubmit={addUserHandler}>
        <label>Username</label>
        <input
          id="username"
          type="text"
          value={username}
          onChange={(event) => setUsername(event.target.value)}
        />
        <label>Age (Years)</label>
        <input
          id="age"
          type="number"
          value={age}
          onChange={(event) => setAge(event.target.value)}
        />
        <label>Link to image</label>
        <input
          id="img"
          type="text"
          value={img}
          onChange={(event) => setImg(event.target.value)}
        />
        <label>Major</label>
        <input
          id="major"
          type="text"
          value={major}
          onChange={(event) => setMajor(event.target.value)}
        />
        <button type="submit">Add User</button>
      </form>
    </Card>
  );
};

export default AddUser;

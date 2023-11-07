import React, { useState } from 'react';
import AddUser from './components/AddUser';
import User from './components/User'
import Hdr from './components/Hdr';
import UsersList from './components/UsersList';

//set the thingie up
function App() {
  const [userList, setUserList] = useState([
    {
      id: 1,
      name: 'koyuki',
      age: 15,
      major: 'War Crimes',
      img: 'https://i.ytimg.com/vi/PmvV_qqrRoU/maxresdefault.jpg'
    }
  ]);

  // Define the addUserHandler function to update the user list
  const addUserHandler = (newUser) => {
    //Addnew user to the user list
    setUserList((prevUserList) => [newUser, ...prevUserList]);
  };

  return (
    <div>
      <Hdr />
      <AddUser onAddUser={addUserHandler} />
      <UsersList users={userList} />
    </div>
  );
}

export default App;

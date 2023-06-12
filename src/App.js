import { useState } from 'react';

import AddUser from './components/Users/AddUser';
import UserList from './components/Users/UserList';

function App() {
  const [users, setUsers] = useState([]);

  function appAddUserHandler(enteredUserName,enteredeUserAge){
    setUsers((prevUsers) => {
      return [...prevUsers, {name: enteredUserName, age:enteredeUserAge}];
    });
  }

  return (
    <div>
      <AddUser onAddUser={appAddUserHandler} />
      <UserList users={users} />
    </div>
  );
}

export default App;

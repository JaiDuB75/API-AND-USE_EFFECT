import React, {useEffect, useState} from "react";
import UsersList from "./UsersList";
import ToDosList from "./TodosList";

function App() {

  const [users, setUsers] = useState([]);
  const [todos, setTodos] = useState([]);
  const [currentUsers, setCurrentUsers] = useState({});

  //Load user
  useEffect(() => {
    //console.log("This is Load User")
    fetch("https://jsonplaceholder.typicode.com/users")
    .then((response) => response.json())
    .then(setUsers)
    .catch((error) => {
      console.log(error)
    })
  }, [])

  //Load todos
  useEffect(() => {
    //console.log("This is Load Todos")
    if(currentUsers.id){
      fetch(`https://jsonplaceholder.typicode.com/todos?userId=${currentUsers.id}`)
        .then((response) => response.json())
        .then(setTodos)
        .catch((error) => {
          console.log(error)
      });
    }
  }, [currentUsers.id])

  return (
    <>
    <h1>Hello, Welcome</h1>
    <h2>Select Users</h2>
    <div>
      <h3><UsersList users={users} setCurrentUsers={setCurrentUsers}/></h3>
    </div>
    <div>
      <h4><ToDosList user={currentUsers} todos={todos}/></h4>
    </div>
    </>
  );
}

export default App;

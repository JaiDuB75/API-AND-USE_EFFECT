import React from "react";

function ToDosList({user = {}, todos}){
    //console.log(todos)
    if (todos.length > 1){
        return(
            <div>
                <ol>
                    <h4>To Does for {user.name}</h4>
                    {todos.map((todo) => {
                        return <li>{todo.title}</li>
                    })}
                </ol>
            </div>
        );
    }
}

export default ToDosList;
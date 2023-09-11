import React from "react";

function UsersList({users, setCurrentUsers}){
    return(
        <ul>
            {users.map((user) => (
                <button type="button" onClick={() => setCurrentUsers(user)}>
                    Name: {user.name} Email: {user.email}
                </button>
            ))}
        </ul>
    );
}

export default UsersList;
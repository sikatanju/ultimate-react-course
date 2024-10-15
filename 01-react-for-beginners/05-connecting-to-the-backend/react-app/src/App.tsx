import React, { useEffect, useRef, useState } from "react";
import "bootstrap/dist/css/bootstrap.css";

import { CanceledError } from "./components/services/api-client";
import userService from "./components/services/user-service";
import { User } from "./components/services/user-service";
import useUsers from "./components/hooks/useUsers";

const App = () => {
    const { users, error, isLoading, setUsers, setError } = useUsers();

    const deleteUser = (user: User) => {
        const originalUsers = [...users];
        setUsers(users.filter((usr) => usr.id !== user.id));

        userService.delete(user.id).catch((err) => {
            setError(err.message);
            setUsers(originalUsers);
        });
    };

    const createUser = () => {
        const originalUsers = [...users];
        const newUser = { id: 1, name: "Sika" };
        setUsers([newUser, ...users]);

        userService
            .create(newUser)
            .then(({ data: savedNewUser }) =>
                setUsers([savedNewUser, ...users])
            )
            .catch((err) => {
                setError(err.message);
                setUsers(originalUsers);
            });
    };

    const updateUser = (user: User) => {
        const originalUsers = [...users];
        const updatedUser = { ...user, name: user.name + "?" };
        setUsers(users.map((usr) => (usr.id === user.id ? updatedUser : usr)));

        userService.update(updatedUser).catch((err) => {
            setError(err.message);
            setUsers(originalUsers);
        });
    };
    return (
        <>
            <div>
                {error && <p className="text-danger">{error}</p>}
                {isLoading && <div className="spinner-border"></div>}
                <button
                    className="btn btn-outline-primary"
                    onClick={createUser}
                >
                    Add
                </button>
                <br />
                <br />
                <ul className="list-group">
                    {users.map((user) => (
                        <li
                            key={user.id}
                            className="list-group-item d-flex justify-content-between"
                        >
                            {user.name}
                            <div>
                                <button
                                    className="btn btn-secondary mx-2"
                                    onClick={() => updateUser(user)}
                                >
                                    Update
                                </button>
                                <button
                                    onClick={() => deleteUser(user)}
                                    className="btn btn-outline-danger"
                                >
                                    Delete
                                </button>
                            </div>
                        </li>
                    ))}
                </ul>
            </div>
        </>
    );
};

export default App;

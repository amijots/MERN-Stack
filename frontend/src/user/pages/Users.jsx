import React from "react";
import UsersList from "../components/UsersList";

const Users = () => {
    const USERS = [
        {
            id: "u1",
            name: "John Doe",
            image: "https://upload.wikimedia.org/wikipedia/en/7/7d/Lenna_%28test_image%29.png",
            places: 3
        },
        {
            id: "u2",
            name: "Jane Smith",
            image: "https://upload.wikimedia.org/wikipedia/commons/9/99/Sample_User_Icon.png",
            places: 5
        }
    ];
    return <UsersList items={USERS} />;
};

export default Users;

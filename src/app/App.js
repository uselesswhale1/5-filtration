import React, { useState, useEffect } from "react"
import Users from "./components/users"
import api from "./api"

function App() {
    const [users, setUsers] = useState()

    useEffect(() => {
        api.users.fetchAll().then((data) => {
            setUsers(data)
        })
    }, [])

    const handleDelete = (userId) => {
        setUsers(users.filter((user) => user._id !== userId))
    }

    return users ? (
        <div>
            <Users users={users} onDelete={handleDelete} />
        </div>
    ) : (
        <h1>loading...</h1>
    )
}

export default App

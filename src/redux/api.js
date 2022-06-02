import axios from "axios"



export const loadUserApi = async () =>
    await axios.get('http://localhost:5000/users')


export const createUserApi = async (user) =>
    await axios.post('http://localhost:5000/users', user)

    export const deleteUserApi = async (id) =>
    await axios.delete(`http://localhost:5000/users/${id}` )

    export const updateUserApi = async (id,userInfo) =>
    await axios.put(`http://localhost:5000/users/${id}`, userInfo)
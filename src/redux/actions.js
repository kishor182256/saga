import * as types from './actionTypes';

export const loadUserStart = () => ({
    type:types.LOAD_USER_START,

})

export const loadUserSuccess = (users) => ({
    type:types.LOAD_USER_SUCCESS,
    payload:users
})

export const loadUserError = (error) => ({
    type:types.LOAD_USER_ERROR,
    payload:error
})


// CREATE_USER_DATA

export const createUserStart = (user) => ({
    type:types.CREATE_USER_START,
    payload:user

})

export const createUserSuccess = () => ({
    type:types.CREATE_USER_SUCCESS,
    
})

export const createUserError = (error) => ({
    type:types.CREATE_USER_ERROR,
    payload:error
})

// End of createUser





// Start of deleteUser


export const deleteUserStart = (id) => ({
    type:types.DELETE_USER_START,
    payload:id

})

export const deleteUserSuccess = (id) => ({
    type:types.DELETE_USER_SUCCESS,
    // payload:id
})

export const deleteUserError = (error) => ({
    type:types.DELETE_USER_ERROR,
    payload:error
})

// end of deleteUser


// START updatae user 

export const updateUserStart = (userInfo) => ({
    type:types.UPDATE_USER_START,
    payload:userInfo

})

export const updateUserSuccess = () => ({
    type:types.UPDATE_USER_SUCCESS,
    
})

export const updateUserError = (error) => ({
    type:types.UPDATE_USER_ERROR,
    payload:error
})

// end of updatae user



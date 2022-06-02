import * as types from './actionTypes';
import {fork,all, call, delay, put, takeEvery,takeLatest,take} from "redux-saga/effects"
import { createUserApi, deleteUserApi, loadUserApi, updateUserApi } from './api';
import { createUserError, createUserSuccess, deleteUserError, deleteUserSuccess, loadUserError, loadUserSuccess, updateUserError, updateUserSuccess } from './actions';

// load user
export function* onLoadUsersStartAsync(){
    try{
        const response = yield call(loadUserApi)
        console.log('response===>', response);

        if(response.status === 200){    
           yield delay(500);
           yield put(loadUserSuccess(response.data));
        }
    }catch (e){
        console.error('onLoadUsersStartAsyncError', e);
        yield put(loadUserError(e.response.data));
    }
     
}

export function* onLoadUsers(){
    yield takeEvery(types.LOAD_USER_START,onLoadUsersStartAsync)
}

// end loading





// create user object  *****************

export function* onCreateUsersStartAsync({payload}){
    try{
        const response = yield call(createUserApi,payload)
        console.log('response===>', response);

        if(response.status === 201){    
         
           yield put(createUserSuccess(response.data));
        }
    }catch (e){
        console.error('onLoadUsersStartAsyncError', e);
        yield put(createUserError(e.response.data));
    }
}

export function* oncreateUser(){
    yield takeLatest(types.CREATE_USER_START,onCreateUsersStartAsync)
}

// end create user object  ******
 

// delete user object

export function* onDeleteUsersStartAsync(id){
    try{
        const response = yield call(deleteUserApi,id)

        if(response.status === 200){    
         
           yield put(deleteUserSuccess(id));
        }
    }catch (e){
        console.error('onLoadUsersStartAsyncError', e);
        yield put(deleteUserError(e));
    }
}

export function* ondeleteUser(){
    while(true){
     const {payload:id} =yield take(types.DELETE_USER_START)
         yield call(onDeleteUsersStartAsync,id)
    }
}



// end delete user


// update user info with
export function* onUpdateUsersStartAsync({payload:{id,formvalue}}){
    try{
       
        // console.log('updatedresponse===>', payload);
        const response = yield call(updateUserApi,id,formvalue)
         if(response.status === 200){
             yield put(updateUserSuccess())
         }
       
    }catch (e){
        console.error('onUpdateUsersStartAsyncError', e);
        yield put(updateUserError(e.response.data));
    }
}

export function* onUpdateUser(){
    yield takeLatest(types.UPDATE_USER_START,onUpdateUsersStartAsync)
}
// end update user




const userSagas = [
    fork(onLoadUsers),fork(oncreateUser),fork(ondeleteUser),fork(onUpdateUser)
]

export default function *rootSaga(){
    yield all([...userSagas])
}
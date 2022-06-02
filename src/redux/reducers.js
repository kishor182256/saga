import * as types from './actionTypes';


const initialState = {
    users: [],
    loading: false,
    error: null,
}

const usersReducers = (state = initialState, action) => {
    switch (action.type) {
        case types.LOAD_USER_START:
            case types.CREATE_USER_START:
                case types.DELETE_USER_START:
                    case types.UPDATE_USER_START:

            return {
                ...state,
                loading: true,
            };
        case types.LOAD_USER_SUCCESS:
            console.log("payload", action.payload);
            return {
                
                ...state,
                loading: false,
                users: action.payload,
            };
            case types.CREATE_USER_SUCCESS:
                case types.UPDATE_USER_SUCCESS:
                return {
                    ...state,
                    loading: false,
                }
                case types.DELETE_USER_SUCCESS:
                    return {
                        ...state,
                        loading: false,
                        users: state.users.filter((user) => user.id !== action.payload)
                    }


        case types.LOAD_USER_ERROR:
            case types.CREATE_USER_ERROR:
                case types.DELETE_USER_ERROR:
                    case types.UPDATE_USER_ERROR:

            return {
                ...state,
                error: action.payload,
                loading: false,
            }
        default:
            return state
    }
}

export default usersReducers
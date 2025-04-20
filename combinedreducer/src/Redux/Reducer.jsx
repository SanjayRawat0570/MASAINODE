
const initialState = {
    count : 0,
    user : {
        name : '',
        age : ''
    }   
}
const countReducer = (state = initialState, action) => {
    switch(action.type){
        case 'INCREMENT':
            return {
                count : state.count + 1
            }
        case 'DECREMENT':
            return {
                count : state.count - 1
            }
        default:
            return state
    }
}



const userReducer = (state = initialState, action) => {
    switch(action.type){
        case 'UPDATE':
            return {
                ...state,
                name : action.payload.name
            }
        case 'UPDATE_AGE':
            return {
                ...state,
                age : action.payload.age
            }
        default:
            return state
    }
}
export const rootReducer = combineReducers({
    count : reducer,
    user : userReducer
});
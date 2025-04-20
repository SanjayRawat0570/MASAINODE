const increment = () => {
    return {
    type : 'INCREMENT'
}
}
const decrement = () => {
    return {
    type : 'DECREMENT'
    }
}
const update = () => {
    return {
    type : 'UPDATE',
    payload: {
        name : ''
    }
    }
}
updateage = () => {
    return {
    type : 'UPDATE_AGE',
    payload: {
        age : ''
    }
    }
}
export {increment, decrement, update, updateage}
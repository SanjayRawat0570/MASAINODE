import React from 'react'

export  const addBook = () => {
  return {
   type : 'ADD_BOOK',
   payload: {
    title : "",
    author : "",
    id : math.random()
   }
}
}
export const marksAsRead = () => {
    return {
        type: 'MARK AS READ',
}
}
export const filterBook = () => {
    return {
        type: 'FILTER_BOOK',
}
}


import React from 'react'

function Bookform() {
  return (
    <>
        <h1>Add a Book</h1>
        <input type="text" placeholder="Title" />
        <input type="text" placeholder="Author" />
        <input type = "text" placeholder = "id" />
       
        <input  type="checkbox"/> mark as read
        <button>Add Book</button>
    </>
  )
}

export default Bookform
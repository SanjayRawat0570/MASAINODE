import react from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { decrement, increment } from '../actions/counterActions'
const user = () => {
    const 
    const [name, setName] = useState('')
    const [age, setAge] = useState('')

    return (
        <>
        <h1> User </h1>
        <h2> age</h2>
        <input onChange = {(e) => setAge(e.target.value)} type='text' placeholder='Enter NAme' />
        <button> +</button>
        <input onChange = {(e) => setName(e.target.value)} type='text' placeholder='Enter Age' />
        <button> -</button>
        <h2> name</h2>
        </>
    )
}
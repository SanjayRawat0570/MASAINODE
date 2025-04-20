import react from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { decrement, increment } from '../actions/counterActions'
function Counter() {
    const count = useSelector(state => state.counter.count)
    const dispatch = useDispatch()
    return (
        <>
        <h1> Counter </h1>
        <h2> count</h2>
        <button onClick={()=>dispatch(increment)} > +</button>
        <button  onClick={()=>dispatch(decrement)}  > -</button>
        </>
    )
}
export default Counter

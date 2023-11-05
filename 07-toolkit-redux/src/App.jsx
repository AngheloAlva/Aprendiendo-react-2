import { useDispatch, useSelector } from 'react-redux'
import { decrement, increment, incrementByAmount } from './store/slices/counter/counterSlice'

function App () {
  const { counter } = useSelector(state => state.counter)
  const dispatch = useDispatch(increment(), decrement(), incrementByAmount())

  return (
    <>
      <h1>Counter: {counter}</h1>

      <button onClick={() => dispatch(increment())}>Increment</button>
      <button onClick={() => dispatch(decrement())}>Decrement</button>
      <button onClick={() => dispatch(incrementByAmount(10))}>Increment by 10</button>
    </>
  )
}

export default App

import { useCounter } from '../hooks/useCounter'

const CounterWithCustomHook = () => {
  const { counter, increment, decrement, reset } = useCounter(0)

  return (
    <>
      <h1>Counter with Hook: {counter}</h1>
      <hr />

      <div className='d-flex gap-2'>
        <button onClick={() => increment(5)} className='btn btn-primary'>
          +5
        </button>
        <button onClick={reset} className='btn btn-primary'>
          Reset
        </button>
        <button onClick={() => decrement(5)} className='btn btn-primary'>
          -5
        </button>
      </div>
    </>
  )
}

export default CounterWithCustomHook

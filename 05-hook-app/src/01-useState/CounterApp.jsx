import { useState } from 'react'

const CounterApp = () => {
  const [{ counter1, counter2, counter3 }, setCounterApp] = useState({
    counter1: 10,
    counter2: 20,
    counter3: 30
  })

  return (
    <>
      <h1>CounterApp</h1>
      <hr />

      <div className='d-flex gap-5'>
        <h2>{counter1}</h2>
        <h2>{counter2}</h2>
        <h2>{counter3}</h2>
      </div>

      <div className='d-flex gap-5'>
        <button
          className='btn btn-primary'
          onClick={() => setCounterApp((prevState) => ({
            ...prevState,
            counter1: counter1 + 1
          }))}
        >
          +1
        </button>
        <button
          className='btn btn-primary'
          onClick={() => setCounterApp((prevState) => ({
            ...prevState,
            counter2: counter2 + 1
          }))}
        >
          +1
        </button>
        <button
          className='btn btn-primary'
          onClick={() => setCounterApp((prevState) => ({
            ...prevState,
            counter3: counter3 + 1
          }))}
        >
          +1
        </button>
      </div>
    </>
  )
}

export default CounterApp

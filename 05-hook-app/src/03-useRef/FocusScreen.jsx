import { useRef } from 'react'

const FocusScreen = () => {
  const inputRef = useRef()

  const onClick = () => {
    // document.querySelector('input').select()
    inputRef.current.select()
  }

  return (
    <>
      <h1>Focus Screen</h1>
      <hr />

      <input
        type='text'
        className='form-control'
        placeholder='Su nombre'
        ref={inputRef}
      />

      <button className='btn btn-info mt-2' onClick={onClick}>
        Set Focus
      </button>
    </>
  )
}

export default FocusScreen

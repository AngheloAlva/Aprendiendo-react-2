import { useState } from 'react'

// eslint-disable-next-line react/prop-types
const AddCategory = ({ onNewCategory }) => {
  const [inputValue, setInputValue] = useState('')

  const onInputChange = (e) => {
    setInputValue(e.target.value)
  }

  const onSubmit = (e) => {
    e.preventDefault()
    if (inputValue.trim().length < 2) return

    onNewCategory(inputValue)
    setInputValue('')
  }

  return (
    <form onSubmit={onSubmit}>
      <input type='text' placeholder='Search gifs' value={inputValue} onChange={onInputChange} />
    </form>
  )
}

export default AddCategory

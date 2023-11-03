import { useState } from 'react'
import { PropTypes } from 'prop-types'

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
    <form onSubmit={onSubmit} aria-label='form'>
      <input type='text' placeholder='Search gifs' value={inputValue} onChange={onInputChange} />
    </form>
  )
}

export default AddCategory

AddCategory.propTypes = {
  onNewCategory: PropTypes.func.isRequired
}

import { useState } from 'react'
import AddCategory from './components/AddCategory'
import GifGrid from './components/GifGrid'

const GifExpertApp = () => {
  // 'Batman', 'Villains',
  const [categories, setCategories] = useState(['Joker'])

  const onAddCategory = (newCategory) => {
    if (categories.includes(newCategory)) return

    setCategories([newCategory, ...categories])
  }

  return (
    <>
      <h2>GifExpertApp</h2>

      <AddCategory onNewCategory={onAddCategory} />

      {categories.map((category) => (
        <GifGrid category={category} key={category} />
      ))}
    </>
  )
}

export default GifExpertApp

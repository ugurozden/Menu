import React, { useState } from 'react'
import Items from './Items'
import Menu from './Menu'
import "./app.css"

function App() {
  const [categoryName, setCategoryName] = useState("all")

  const filteredItems = (b) => {
    setCategoryName(b)
  }

  return (
    <div className='all' >
      <Menu   filteredItems={filteredItems} />
      <Items categoryName={categoryName} />

    </div>
  )
}

export default App
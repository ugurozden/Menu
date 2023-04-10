import React, { useState } from 'react'
import menu from './data'

function Menu({ filteredItems }) {

    const categories = ["all", ...new Set(menu.map((a) => a.category))]

    return (
        <div className='menu'>
            {categories.map((b, index) => {
                return (
                    <button
                        key={index}
                        onClick={() => filteredItems(b)}
                    >
                        {b}</button>
                )
            })}
        </div>
    )
}

export default Menu
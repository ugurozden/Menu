import React from 'react'
import menu from './data.js'

function Items({ categoryName }) {


    console.log(categoryName);

    const deneme = categoryName === "all" ? menu : menu.filter((a) => a.category === categoryName)

    return (
        <div className='container'>
            {deneme.map((item) => {
                return (
                    <div key={item.id} className='items'>
                        <h1>{item.title}</h1>
                        <img  width="200" src={item.img}></img>
                        <h2>${item.price}</h2>
                        <p>{item.desc}</p>
                        <p>{item.category}</p>
                    </div>)
            })}
        </div>
    )
}

export default Items
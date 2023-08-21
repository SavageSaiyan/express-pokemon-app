import React from 'react'

const myStyle = {
    color: 'red',
    backgroundColor:'lightgreen'
};





function Show({pokemon}) {
      console.log(pokemon.img + '.jpg')
  return (
    <div style={myStyle}>
        <h1>Gotta Catch 'Em All</h1>
        <h2>{pokemon.name}</h2>
        <img src={pokemon.img + '.jpg'}/>
       
        <a href='/pokemon'>back</a>
    </div>
  )
}

module.exports = Show
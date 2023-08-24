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
       
        <a href='/pokemon'>Pokemon</a>
        <a href="/pokemon/new">Create New Pokemon</a>
    </div>
  )
}

module.exports = Show
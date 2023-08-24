import React from 'react'

const myStyle = {
    color: 'red',
    backgroundColor:'lightgreen',
   display: 'flex',
   flexDirection: 'column',
   alignItems: 'center',
   justifyContent: 'center',

};



function Index({pokemon}) {
  return (
    <div style={myStyle}>
        <h1>See All The Pokemon!</h1>
        <nav>
            <a href="/pokemon/new">Create New Pokemon</a>
        </nav>
        {
            pokemon.map((pokemon, i)=> {
                return (
                    <ul key={i}>
                    <li>
                        <a href={`/pokemon/${pokemon.id}`}>  {pokemon.name[0].toUpperCase()+pokemon.name.slice(1)} </a> <br /> 
                       
                    </li>
                    </ul>
                )
            })
        }
    </div>
  )
}

module.exports = Index
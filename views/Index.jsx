import React from 'react'

const myStyle = {
    color: 'red',
    backgroundColor:'lightgreen'
};



function Index(pokemon) {
  return (
    <div style={myStyle}>
        <h1>See All The Pokemon!</h1>
    </div>
  )
}

module.exports = Index
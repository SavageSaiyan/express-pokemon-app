import { text } from 'express';
import React from 'react'

const myStyle = {
    color: 'red',
    backgroundColor:'lightgreen',
    textAlign:'center'
};

const formStyle = {
    
};


function New() {
  return (
    <div style={myStyle}> 
        {/* form */}
        <h1>New pokemon Page</h1>

        <form action="/pokemon" method="POST" style={formStyle}>
           Name:  <input type="text" name='name'/> <br />
           
          
           <input type="submit" value="create pokemon" /> <br />
        </form>
    </div>
  )
}

module.exports = New
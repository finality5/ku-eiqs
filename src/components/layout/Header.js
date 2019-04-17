import React from 'react';


export default function Header({id}) {
  return (
    <header style={headerStyle} id={id}>
      <h1>HEADER</h1>
      
    </header>
  )
}

const headerStyle = {
  background: '#333',
  color: '#fff',
  textAlign: 'center',
  padding: '30px'
}




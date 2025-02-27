import React from 'react'

const App = () => {
  const name = 'Vite'
  const x = 10
  const y = 20
  const loggedIn = false
  const styles = {
    color: 'red',
    fontSize: '55px',
  }

  const names = ['Brad', 'John', 'Jane', 'Smith']

  return (
    <>
    
      <div className='text-5xl'>App</div>
      <p style={styles}>Hello {name}</p>
      <p>
        The sum of {x} and {y} is {x + y} 
      </p>

      <ul>
        {names.map((name, index) => (
          <li key={index}>{name}</li>
        ))}
      </ul>

      { loggedIn ? <p>Welcome User</p> : <p>Please log in</p> }
  
    </>
  )
}

export default App
import React, { ReactNode } from 'react'

interface HeaderProps {
  title: string
  counter: number
  children: ReactNode
}

const Header = ({children}: HeaderProps) => {
  return (
    <div>
        {children}
      {/* <h1>{username}</h1>
      <h1>{counter}</h1>
      <button onClick={increaseCount}>Increase</button>
      <button onClick={decreaseCount}>Decrease</button> */}
      {/* <Button title="Register" color="purple"></Button>
      <Button title="Login" color="orange"></Button> */}
    </div>
  )
}
export default Header
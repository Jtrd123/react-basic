import './App.css'
import { useState } from 'react'
import Dashboard from './pages/Dashboard'
import Login from './pages/Login'

function App() {
  const [counter, setCounter] = useState<number>(0)
  const isLogin:boolean = false;

  const increaseCount = () => {
    setCounter(counter + 1)
  }

  const decreaseCount = () => {
    setCounter(counter - 1)
  }

  return (
    <>
      {/* <button onClick={increaseCount}>Increase</button>
      <button onClick={decreaseCount}>Decrease</button> */}
      {isLogin ? <Dashboard ></Dashboard> : <Login ></Login>}
      {/* <Header title="My App" counter={counter}>
        Now Counting = {counter}
      </Header>
      <Button title="Increase" color="red" updateCount={increaseCount}></Button>
      <Button title="Decrease" color="blue" updateCount={decreaseCount}></Button>
      <List items={[1,2,3]} render={(item) => <h1>{item}</h1>}></List>
      <List items={['a', 'b', 'c']} render={(item) => <h1>{item}</h1>}></List>
      <Footer counter={counter}></Footer> */}
    </>
  )
}

export default App

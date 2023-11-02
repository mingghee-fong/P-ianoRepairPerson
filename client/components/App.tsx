import Nav from './Nav.tsx'
import Home from './Home.tsx'
import { Outlet } from 'react-router-dom'


function App() {
  return (
    <>
      <div>
        <h1>App</h1>
        <p>React development has begun!</p>
        <Nav />
        {/* <Home /> */}
        <Outlet />
      </div>
    </>
  )
}

export default App

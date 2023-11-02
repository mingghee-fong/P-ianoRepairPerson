import Nav from './Nav.tsx'
import Home from './Home.tsx'
import { Outlet } from 'react-router-dom'


function App() {
  return (
    <>
      <div>
        <h1 class="center">Instrument Picking Page</h1>
        <p class="center">Pick an instrument!</p>
        <Nav />
        {/* <Home /> */}
        <Outlet />
      </div>
    </>
  )
}

export default App

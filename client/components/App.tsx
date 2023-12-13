import Nav from './Nav.tsx'
import { Outlet } from 'react-router-dom'

function App() {
  return (
    <>
      <div>
        <h1 className="center">Pete's Music Emporium</h1>
        <p className="center">Pick an instrument!</p>
        <Nav />
        <Outlet />
      </div>
    </>
  )
}

export default App

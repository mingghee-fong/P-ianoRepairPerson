import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
} from 'react-router-dom'
import Home from './components/Home'
import App from './components/App'
import Piano from './components/Piano'

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<App />}>
      <Route index element={<Home />} />
      {/* <Route path="continent/:name" element={<Continent />} />
      <Route path="continent/:name/:code" element={<Country />} /> */}
      <Route path="instruments/piano" element={<Piano />} />
    </Route>
  )
)

export default router

import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
} from 'react-router-dom'
import Home from './components/Home'
import App from './components/App'

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<App />}>
      <Route index element={<Home />} />
      {/* <Route path="continent/:name" element={<Continent />} />
      <Route path="continent/:name/:code" element={<Country />} /> */}
    </Route>
  )
)

export default router
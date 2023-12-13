import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
} from 'react-router-dom'
import App from './components/App'
import Piano from './components/Piano'
import Guitar from './components/Guitar'
import Drums from './components/Drums'
import Michael from './components/Michael'

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<App />}>
      <Route path="instruments/piano" element={<Piano />} />
      <Route path="instruments/guitar" element={<Guitar />} />
      <Route path="instruments/drums" element={<Drums />} />
      <Route path="instruments/michael" element={<Michael />} />
    </Route>
  )
)

export default router

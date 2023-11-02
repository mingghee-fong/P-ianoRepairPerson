import { Link } from 'react-router-dom'
import Piano from './Piano'
// import { data } from '../../data/continents'

function Nav() {
  return (
    <div>
      <h2>Nav</h2>
      <ul>
        <li>
          <Link to={`/`}>Home</Link>
        </li>
        <li>
          {' '}
          <Link to={`/instruments/piano`}>Piano</Link>
        </li>
        <li><Link to={`/instruments/guitar`}>Guitar</Link></li>
        <li><Link to={`instruments/drums`}>Drums</Link></li>
        <li><Link to ={`instruments/michael`}>Michael</Link></li>
      </ul>
    </div>
  )
}

export default Nav

{
  /* {Object.keys(data).map((continent) => (
          <li key="0">
            <Link to={`continent/${continent}`}>{continent}</Link>
          </li>
        ))} */
}

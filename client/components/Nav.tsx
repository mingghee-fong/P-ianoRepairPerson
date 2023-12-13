import { Link } from 'react-router-dom'

function Nav() {
  return (
    <nav id="nav-container">
      <ul>
        <li>
          <button>
            <Link to={`/instruments/piano`}>Piano</Link>
          </button>
        </li>
        <li>
          <button>
            <Link to={`/instruments/guitar`}>Guitar</Link>
          </button>
        </li>

        <li>
          <button>
            <Link to={`instruments/drums`}>Drums</Link>
          </button>
        </li>
        <li>
          <button>
            <Link to={`instruments/michael`}>Michael</Link>
          </button>
        </li>
      </ul>
    </nav>
  )
}

export default Nav

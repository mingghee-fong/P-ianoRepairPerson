import MichaelPlaying from './MichaelPlaying'
import { michael } from '../images'

export default function Michael() {
  return (
    <>
      <div className="drums-container">
        <h1>Michael is not an instrument!</h1>
        <div className="key-grid">
          <div className="key" id="keyA">
            Div A
          </div>
          <div className="key" id="keyB">
            Div B
          </div>
          <div className="key" id="keyC">
            Div C
          </div>
          <div className="key" id="keyD">
            Div D
          </div>
          <div className="key" id="keyE">
            Div E
          </div>
          <div className="key" id="keyF">
            Div F
          </div>
          <div className="key" id="keyG">
            Div G
          </div>

          <MichaelPlaying />
        </div>
      </div>
    </>
  )
}

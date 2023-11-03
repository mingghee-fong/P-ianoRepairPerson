import Playing from './Playing'
import { drums } from '../images'

export default function Drums() {
  return (
    <>
      <div className="drums-container">
        <h1>Drums</h1> <Playing instrument="drums" />
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

          <img className="drums" src={drums} alt="drums" />
        </div>
      </div>
    </>
  )
}

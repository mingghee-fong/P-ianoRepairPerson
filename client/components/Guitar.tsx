import Playing from './Playing'

export default function Guitar() {
  return (
    <>
      <div className="guitar-container">
        <h1>Guitar</h1> <Playing instrument="guitar" />
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

          <img className="guitar" src="../images/guitar.jpg" alt="guitar" />
        </div>
      </div>
    </>
  )
}

import Playing from './Playing'

export default function Drums() {
  return (
    <>
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

        <img className="drums" src="../images/drums" alt="drums" />
        <button className="repair-button">repair button</button>
      </div>
    </>
  )
}

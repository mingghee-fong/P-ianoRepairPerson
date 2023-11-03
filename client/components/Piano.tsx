import Playing from './Playing'
import { piano } from '../images'
import { useState } from 'react'
import { useEffect } from 'react'
import * as memephotos from '../images/meme/index.ts'

export default function Piano() {
  // return (
  //   <>
  //     <h1>Piano</h1> <Playing instrument="piano" />
  //     <div className="key-grid">
  //       <div className="key" id="keyA">
  //         Div A
  //       </div>
  //       <div className="key" id="keyB">
  //         Div B
  //       </div>
  //       <div className="key" id="keyC">
  //         Div C
  //       </div>
  //       <div className="key" id="keyD">
  //         Div D
  //       </div>
  //       <div className="key" id="keyE">
  //         Div E
  //       </div>
  //       <div className="key" id="keyF">
  //         Div F
  //       </div>
  //       <div className="key" id="keyG">
  //         Div G
  //       </div>

  //       <img className="piano" src={piano} alt="piano" />
  //       <button className="repair-button">repair button</button>
  //     </div>
  //   </>
  // )
  const [pressedKeys, setPressedKeys] = useState(new Set())

  const handleKeyDown = (key) => {
    setPressedKeys((prevPressedKeys) => new Set(prevPressedKeys.add(key)))
  }

  const handleKeyUp = (key) => {
    setPressedKeys((prevPressedKeys) => {
      const updatedKeys = new Set(prevPressedKeys)
      updatedKeys.delete(key)
      return updatedKeys
    })
  }

  const isKeyPressed = (key) => {
    return pressedKeys.has(key)
  }

  useEffect(() => {
    const keyMap = {
      a: 'keyA',
      b: 'keyB',
      c: 'keyC',
      d: 'keyD',
      e: 'keyE',
      f: 'keyF',
      g: 'keyG',
    }

    const handleKeyPress = (event) => {
      const keyPressed = event.key.toLowerCase()
      if (keyMap[keyPressed] && !isKeyPressed(keyMap[keyPressed])) {
        handleKeyDown(keyMap[keyPressed])
      }
    }

    const handleKeyRelease = (event) => {
      const keyReleased = event.key.toLowerCase()
      if (keyMap[keyReleased] && isKeyPressed(keyMap[keyReleased])) {
        handleKeyUp(keyMap[keyReleased])
      }
    }

    document.addEventListener('keydown', handleKeyPress)
    document.addEventListener('keyup', handleKeyRelease)

    return () => {
      document.removeEventListener('keydown', handleKeyPress)
      document.removeEventListener('keyup', handleKeyRelease)
    }
  }, [isKeyPressed, handleKeyDown, handleKeyUp])

  return (
    <>
      <div className="piano-container">
        <h1>Piano</h1>
        <Playing instrument="piano" />
        <div className="key-grid">
          <div
            className="key"
            id="keyA"
            style={{ backgroundColor: isKeyPressed('keyA') ? 'grey' : 'white' }}
            onMouseDown={() => handleKeyDown('keyA')}
            onMouseUp={() => handleKeyUp('keyA')}
          >
            {/* <img src={memephotos.meme1} alt="Div A" /> */}
          </div>
          <div
            className="key"
            id="keyB"
            style={{ backgroundColor: isKeyPressed('keyB') ? 'grey' : 'white' }}
            onMouseDown={() => handleKeyDown('keyB')}
            onMouseUp={() => handleKeyUp('keyB')}
          >
            {/* <img src={memephotos.meme2} alt="Div B" /> */}
          </div>
          <div
            className="key"
            id="keyC"
            style={{ backgroundColor: isKeyPressed('keyC') ? 'grey' : 'white' }}
            onMouseDown={() => handleKeyDown('keyC')}
            onMouseUp={() => handleKeyUp('keyC')}
          >
            {/* <img src={memephotos.meme3} alt="Div C" /> */}
          </div>
          <div
            className="key"
            id="keyD"
            style={{ backgroundColor: isKeyPressed('keyD') ? 'grey' : 'white' }}
            onMouseDown={() => handleKeyDown('keyD')}
            onMouseUp={() => handleKeyUp('keyD')}
          >
            {/* <img src={memephotos.meme4} alt="Div D" /> */}
          </div>
          <div
            className="key"
            id="keyE"
            style={{ backgroundColor: isKeyPressed('keyE') ? 'grey' : 'white' }}
            onMouseDown={() => handleKeyDown('keyE')}
            onMouseUp={() => handleKeyUp('keyE')}
          >
            {/* <img src={memephotos.meme5} alt="Div E" /> */}
          </div>
          <div
            className="key"
            id="keyF"
            style={{ backgroundColor: isKeyPressed('keyF') ? 'grey' : 'white' }}
            onMouseDown={() => handleKeyDown('keyF')}
            onMouseUp={() => handleKeyUp('keyF')}
          >
            {/* <img src={memephotos.meme6} alt="Div F" /> */}
          </div>
          <div
            className="key"
            id="keyG"
            style={{ backgroundColor: isKeyPressed('keyG') ? 'grey' : 'white' }}
            onMouseDown={() => handleKeyDown('keyG')}
            onMouseUp={() => handleKeyUp('keyG')}
          >
            {/* <img src={memephotos.meme7} alt="Div G" /> */}
          </div>
          <img className="piano" src={piano} alt="piano" />

        </div>
      </div>  
    </>
  )
}

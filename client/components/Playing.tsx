import React, { useEffect, useState } from 'react'
import { broken } from '../sounds/piano/index'
import * as piano_sounds from '../sounds/piano/index.ts'
import * as guitar_sounds from '../sounds/guitar/index.ts'
import * as drum_sounds from '../sounds/drums/index.ts'

interface Props {
  instrument: 'piano' | 'drums' | 'guitar'
}

const sounds = {
  piano: piano_sounds,
  drums: drum_sounds,
  guitar: guitar_sounds,
}

const Playing = ({ instrument }: Props) => {
  const [keypressCount, setKeypressCount] = useState(0)
  const [isBroken, setIsBroken] = useState(false)
  const [repairComponent, setRepairComponent] = useState<number | null>(null)

  useEffect(() => {
    const audioElements: Record<string, HTMLAudioElement | undefined> = {}

    // Define a mapping of keys to audio files based on the selected instrument
    const keyAudioMap = sounds[instrument]

    // Preload audio files
    for (const key in keyAudioMap) {
      const audio = new Audio(keyAudioMap[key])
      audioElements[key] = audio
    }

    // Function to play audio on key press
    const playAudio = (key: string) => {
      if (!isBroken) {
        const el = audioElements[key]
        if (el) {
          el.currentTime = 0
          el.play()
        }
      }
    }

    // Function to handle keydown event
    const handleKeydown = (e: KeyboardEvent) => {
      if (isBroken) {
        return // If broken, don't handle keypresses
      }

      const key = e.key.toLowerCase()
      if (key in keyAudioMap) {
        playAudio(key)

        // Increment the keypress count
        setKeypressCount((count) => count + 1)

        // Check if the "break" condition is met after 10 keypresses
        if (keypressCount >= 10 && Math.random() < 0.1) {
          const breakAudio = new Audio(broken)
          breakAudio.play()
          setIsBroken(true)
        }
      }
    }

    // Add event listener for key presses
    document.addEventListener('keydown', handleKeydown)

    // Cleanup on component unmount
    return () => {
      document.removeEventListener('keydown', handleKeydown)
    }
  }, [instrument, keypressCount, isBroken])

  // Function to handle the "Repair" button click
  const handleRepairClick = () => {
    // Generate a random number between 1 and 3
    const randomRepairComponent = Math.floor(Math.random() * 3) + 1
    setRepairComponent(randomRepairComponent)
    console.log('Random Number:', randomRepairComponent)
  }

  return (
    <div>
      {isBroken ? (
        <div>
          <p>Instrument is broken! Please pay 99¢ to repair it.</p>
          <button
            id="repair-button"
            onClick={handleRepairClick}
            className="repair-button"
          >
            Repair
          </button>
        </div>
      ) : (
        <div>
          <p>
            Press the keys 'a, b, c, d, e, f, g' to play sounds for {instrument}
            .
          </p>
        </div>
      )}
      {repairComponent !== null && (
        <div>
          {repairComponent === 1 && <RepCom1 />}
          {repairComponent === 2 && <RepCom2 />}
          {repairComponent === 3 && <RepCom3 />}
        </div>
      )}
    </div>
  )
}

export default Playing

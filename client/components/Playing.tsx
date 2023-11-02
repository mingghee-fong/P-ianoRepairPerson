import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import * as piano_sounds from '../sounds/piano/index.ts'

interface Props {
  instrument: 'piano' | 'drums' | 'guitar'
}

const sounds = {
  piano: piano_sounds,
  // drums: drum_sounds,
  // guitar: guitar_sounds,
}

const Playing = ({ instrument }: Props) => {
  useEffect(() => {
    const audioElements = {} as Record<string, HTMLAudioElement | undefined>

    // Define a mapping of keys to audio files based on the selected instrument
    const keyAudioMap = sounds[instrument]

    // Preload audio files
    for (const key in keyAudioMap) {
      const audio = new Audio(keyAudioMap[key])
      audioElements[key] = audio
    }

    // Function to play audio on key press
    const playAudio = (key: string) => {
      const el = audioElements[key]
      if (el) {
        el.currentTime = 0
        el.play()
      }
    }

    // Add event listener for key presses
    document.addEventListener('keydown', (e) => {
      const key = e.key.toLowerCase()
      if (key in keyAudioMap) {
        playAudio(key)
      }
    })

    // Cleanup on component unmount
    return () => {
      document.removeEventListener('keydown', (e) => {
        const key = e.key.toLowerCase()
        if (key in keyAudioMap) {
          playAudio(key)
        }
      })
    }
  }, [instrument])

  return (
    <div>
      Press the keys 'a, b, c, d, e, f, g' to play sounds for {instrument}.
    </div>
  )
}

export default Playing

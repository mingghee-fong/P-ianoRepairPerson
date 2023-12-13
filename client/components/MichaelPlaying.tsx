import { useEffect } from 'react'
import { michael } from '../images'

export default function MichaelPlaying() {
  // Function to handle keydown event
  const handleKeydown = (e: any) => {
    alert('Sorry! You need to pay 99¢ to access this feature')
  }

  useEffect(() => {
    // Add the event listener when the component is mounted
    document.addEventListener('keydown', handleKeydown)

    // Remove the event listener when the component is unmounted
    return () => {
      document.removeEventListener('keydown', handleKeydown)
    }
  }, []) // The empty dependency array ensures this effect only runs on mount and unmount

  return (
    <div>
      <img className="michael" src={michael} alt="michael" />
    </div>
  )
}

import { useEffect, useState } from "react"
import { buildStyles, CircularProgressbar } from "react-circular-progressbar"

const confettiConfig = {
    angle: 90,
    spread: 100,
    startVelocity: 34,
    elementCount: 81,
    dragFriction: 0.11,
    duration: 3000,
    stagger: 3,
    width: "10px",
    height: "10px",
    colors: ["#2C5364", "#29cdff", "#141E30", "#203a43", "#659CE3"]
  };
  
export default function Confirmed() {
  const [percentage, setPercentage] = useState(0)
  const [text, setText] = useState('🍪')

  useEffect(() => {
    const t1 = setTimeout(() => setPercentage(100), 100)
    const t2 = setTimeout(() => setText('✅'), 600)

    return () => {
      clearTimeout(t1)
      clearTimeout(t2)
    }
  }, [])

  return (
    <CircularProgressbar value={percentage} text={text} styles={
      buildStyles({
        pathColor: '#00BA00',
        pathTransitionDuration: 1.0,
      })
    } />
  )
}
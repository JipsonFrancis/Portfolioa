import { useEffect, useState } from 'react'

import Loader from 'react-loaders'

import WordCloud from './wordcloud'
import AnimatedLetters from '../AnimatedLetters'
import './index.scss'

const Skills = () => {
  const [letterClass, setLetterClass] = useState('text-animate')

  const skillsArray = 'Skills'.split('')

  useEffect(() => {
    const timer = setTimeout(() => {
      setLetterClass('text-animate-hover')
    }, 2000)
    return () => clearTimeout(timer)
  }, [])

  return (
    <>
      <div className="container skills-page">
        <div className="text-zone">
          <h1>
            <AnimatedLetters
              letterClass={letterClass}
              strArray={skillsArray}
              idx={15}
            />
            <br />
          </h1>
            <p>
              I have a strong foundation in software development and system integration, 
              with a focus on building innovative and practical solutions for education, 
              finance, and emerging technologies. My experience spans across developing 
              learning platforms, gamified applications, and IoT-driven systems, while also 
              working on prototypes in areas such as image recognition and sound-based detection.
            </p>
            <p>
              My skill set covers full-stack development, mobile and web platforms, 
              cloud-based services, and IoT hardware integration. I’ve worked with 
              technologies such as Laravel, Flutter, Next.js, Node.js, and ESP32, 
              alongside educational and AI-driven tools. I am committed to refining my 
              expertise and leveraging technology to create solutions that are scalable, 
              impactful, and meaningful in real-world contexts.
            </p>
        </div>

        <div className="tagcloud-wrap">
          <WordCloud />
        </div>
      </div>

      <Loader type="pacman" />
    </>
  )
}

export default Skills

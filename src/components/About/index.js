import React, { useEffect, useState } from 'react'
import './index.scss'
import AnimatedLetters from '../AnimatedLetters'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faCss3,
  faGitAlt,
  faHtml5,
  faJsSquare,
  faReact,
  faBootstrap,
} from '@fortawesome/free-brands-svg-icons'
import Loader from 'react-loaders'

const About = () => {
  const [letterClass, setLetterClass] = useState('text-animate')
  useEffect(() => {
    const timer = setTimeout(() => {
      setLetterClass('text-animate-hover')
    }, 3000)
    return () => clearTimeout(timer)
  }, [])
  return (
    <>
      <div className="container about-page">
        <div className="text-zone">
          <h1>
            <AnimatedLetters
              strArray={['A', 'b', 'o', 'u', 't', ' ', 'm', 'e']}
              idx={15}
              letterClass={letterClass}
            />
          </h1>
          <div className="details">
            <p>
              I'm an ambitious Frontend Developer with 3 years of experience creating high-quality web applications using React and Angular. I have contributed to impactful projects, ranging from data-driven quoting systems for aerospace clients to enhancing a U.S. health benefits platform serving over 450,000 users through improved data accuracy and automation.
            </p>
            <p>
              Now an MSc Data Analytics graduate from London Metropolitan University, I have strengthened my expertise in statistical modeling, machine learning, and data-informed product development, with the goal of bridging intuitive user experiences with meaningful analytical insights to build solutions that perform and deliver real-world value.
            </p>
            <p>
              I am confident in my abilities and continue to improve my skills and work ethic, both as an independent contributor and as a collaborative team player to consistently deliver quality outcomes.
            </p>
            <p>
              Outside the professional space, you’ll likely find me exploring new tech, gaming, enjoying sports, or spending time with family.
            </p>
          </div>
        </div>
        <div className="stage-cube-cont">
          <div className="cube-spinner">
            <div className="face1">
              <FontAwesomeIcon icon={faBootstrap} color="#563D7C" />
            </div>
            <div className="face2">
              <FontAwesomeIcon icon={faHtml5} color="#F06529" />
            </div>
            <div className="face3">
              <FontAwesomeIcon icon={faCss3} color="#28A4D9" />
            </div>
            <div className="face4">
              <FontAwesomeIcon icon={faReact} color="#5ED4F4" />
            </div>
            <div className="face5">
              <FontAwesomeIcon icon={faJsSquare} color="#EFD81D" />
            </div>
            <div className="face6">
              <FontAwesomeIcon icon={faGitAlt} color="#EC4D28" />
            </div>
          </div>
        </div>
      </div>
      <Loader type="ball-rotate" />
    </>
  )
}

export default About

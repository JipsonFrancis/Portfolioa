import { useEffect, useState } from 'react'

import { faBriefcase } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Loader from 'react-loaders'

import AnimatedLetters from '../AnimatedLetters'
import './index.scss'

const workExperience = [
  {
    "id": 1,
    "company": "University Projects",
    "companyUrl": null,
    "position": "BSc ICT Education — Final Year & Academic Projects",
    "duration": "2017 — 2021",
    "location": "Mzuzu University, Malawi",
    "achievements": [
      "Developed the Grade Assessment & Career Guidance System using PHP, JavaScript, Tailwind, and Bootstrap to monitor student performance and recommend career paths.",
      "Built Better AI, a module within the Grade Assessment System that provided intelligent career recommendations based on student grades.",
      "Created a STEM Scholarship Management System for girls using HTML, CSS, PHP, JavaScript, jQuery, and AJAX.",
      "Designed Rupee Farming, a website for farmers to advertise agricultural products and vaccines.",
      "Worked on multiple academic prototypes, including early Unity-based games."
    ]
  },
  {
    "id": 2,
    "company": "MobiPay Ltd",
    "companyUrl": null,
    "position": "Software Engineer",
    "duration": "2021 July — 2021 December",
    "location": "Malawi",
    "achievements": [
      "Developed MobiSchool, an online learning platform using USSD to provide educational content and resources to underserved learners.",
      "Built MyVote, a USSD-based voting application allowing candidate registration, campaign creation, and voting through mobile devices.",
      "Contributed to financial technology solutions, including early iterations of loan and resource management systems."
    ]
  },
  {
    "id": 3,
    "company": "NxtGen Labs",
    "companyUrl": null,
    "position": "Software Engineer",
    "duration": "2022 — 2023 December",
    "location": "Malawi",
    "achievements": [
      "Led development of Menub, a multi-platform exam distribution system with a Flutter mobile app, React web platform, and C-based IoT device to secure exam papers in transit.",
      "Built a Distribution Tracking Dashboard (Laravel + MySQL + React) to monitor exam paper flow nationwide.",
      "Created Soil Mapping System using IoT sensors, mobile apps, and web platforms to track humidity and fertility data.",
      "Developed Geofence, an IoT solution for cattle tracking and health prediction using sensor-enabled collars.",
      "Designed SmartFarm, a prototype greenhouse IoT monitoring system for environmental data collection.",
      "Delivered an Inventory Management System using Laravel, PHP, and JavaScript for warehouse operations.",
      "Researched and developed a KYC Blockchain system to securely store banking client data on distributed ledgers.",
      "Prototyped gamified learning and educational systems, including Unity-based games and an AI-powered Question Generator aligned to Bloom’s Taxonomy."
    ]
  },
  {
    "id": 4,
    "company": "MANCOSA",
    "companyUrl": null,
    "position": "Software Engineer — Academic Technology iTEACHlab (School Of Education)",
    "duration": "2024 — Present",
    "location": "Hybrid / South Africa",
    "achievements": [
      "Developed Sampling Techniques Gamification, a Pygame-based learning simulation to teach statistical sampling methods interactively.",
      "Created an AI-powered WhatsApp Chatbot using Meta Cloud API and Gemini to assist students with homework queries.",
      "Built Ecosystem Gamification, a proof-of-concept learning tool teaching users how to restore damaged ecosystems through interactive gameplay."
    ]
  }
]


const Experience = () => {
  const experienceArray = 'Experience'.split('')
  const [letterClass, setLetterClass] = useState('text-animate')

  useEffect(() => {
    const timer = setTimeout(() => {
      setLetterClass('text-animate-hover')
    }, 2000)
    return () => clearTimeout(timer)
  }, [])

  return (
    <>
      <div className="container experience-page">
        <div className="text-zone">
          <h1>
            <AnimatedLetters
              letterClass={letterClass}
              strArray={experienceArray}
              idx={15}
            />
          </h1>
          <p>
            My professional journey started at university, 
            where I built my first large-scale education system, 
            and has since expanded through roles at MobiPay Ltd, NxtGen Labs, 
            and Mancosa. Over the years, I have worked across diverse industries 
            and technologies—ranging from Education platforms and IoT-driven solutions 
            to Banking (KYC) systems, Voting applications, and gamified learning tools. 
            Each stage of my career has strengthened my versatility as a software engineer, 
            deepening my expertise in full-stack development, system integration, 
            and innovative problem-solving.
          </p>
        </div>

        <div className="experience-container">
          <div className="timeline">
            {workExperience.map((job, index) => (
              <div key={job.id} className={`timeline-item ${index % 2 === 0 ? 'left' : 'right'}`}>
                <div className="timeline-marker">
                  <FontAwesomeIcon icon={faBriefcase} />
                </div>
                <div className="timeline-content">
                  <div className="job-header">
                    <h3 className="company-name">
                      <a href={job.companyUrl} target="_blank" rel="noreferrer">
                        {job.company}
                      </a>
                    </h3>
                    <h4 className="position">{job.position}</h4>
                    <div className="job-meta">
                      <span className="duration">{job.duration}</span>
                      <span className="location">{job.location}</span>
                    </div>
                  </div>
                  <ul className="achievements">
                    {job.achievements.map((achievement, idx) => (
                      <li key={idx}>{achievement}</li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <Loader type="pacman" />
    </>
  )
}

export default Experience

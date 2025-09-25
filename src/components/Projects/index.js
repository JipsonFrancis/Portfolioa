import { useEffect, useState } from 'react'

import { faCode, faCodeBranch, faExternalLinkAlt } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Loader from 'react-loaders'

import AnimatedLetters from '../AnimatedLetters'
import './index.scss'

// Projects data - easily scalable for future additions
const projects = [
  // ---------- University Projects (2017 - 2021) ----------
  {
    id: 1,
    title: 'Grade Assessment & Career Guidance System',
    description: 'Final-year system to monitor student grades and generate reports across primary, secondary and tertiary structures; includes dashboards and reporting with career-path recommendation features.',
    technologies: ['PHP', 'JavaScript', 'MySQL', 'Tailwind', 'Bootstrap'],
    category: 'Education Systems',
    status: 'Completed',
    year: '2021',
    company: 'University Projects',
    features: [
      'Aggregates student grades across subjects and terms',
      'Generates school/university-ready reports',
      'Career-path recommendation engine (module integration)'
    ],
    images: [],
    githubUrl: null,
    liveUrl: null,
    isPrivate: true
  },
  {
    id: 2,
    title: 'Better AI (Career Recommendation Module)',
    description: 'AI module developed as part of the Grade Assessment system to suggest likely career paths from student performance data.',
    technologies: ['Python', 'Rule-based heuristics', 'Basic ML (prototype)'],
    category: 'AI/ML',
    status: 'Completed',
    year: '2021',
    company: 'University Projects',
    features: [
      'Analyzes grade trends per subject',
      'Ranks recommended career options',
      'Integrates with Grade Assessment reports'
    ],
    images: [],
    githubUrl: null,
    liveUrl: null,
    isPrivate: true
  },
  {
    id: 3,
    title: 'STEM Scholarship Management System',
    description: 'Web system to manage scholarship applications and awards for girls in STEM fields; built as an accessibility-focused academic project.',
    technologies: ['HTML', 'CSS', 'PHP', 'JavaScript', 'jQuery', 'AJAX'],
    category: 'Education Systems',
    status: 'Completed',
    year: '2020',
    company: 'University Projects',
    features: [
      'Application intake and approval workflow',
      'Scholarship allocation reporting',
      'Responsive web forms and dynamic dashboards'
    ],
    images: [],
    githubUrl: null,
    liveUrl: null,
    isPrivate: true
  },
  {
    id: 4,
    title: 'Rupee Farming — Promotional Website',
    description: 'Small business website for an agricultural client to advertise livestock vaccines and other products; early portfolio web build.',
    technologies: ['HTML', 'CSS', 'JavaScript'],
    category: 'Web Development',
    status: 'Completed',
    year: '2019',
    company: 'University Projects',
    features: [
      'Product listing pages',
      'Contact / lead capture form',
      'Simple CMS-style content updates'
    ],
    images: [],
    githubUrl: null,
    liveUrl: null,
    isPrivate: true
  },

  // ---------- MobiPay Ltd (EduTech) (Jul 2021 - Dec 2021) ----------
  {
    id: 5,
    title: 'MobiSchool (USSD Learning Platform)',
    description: 'USSD-based learning platform to broadcast educational content and resources to learners without smartphones, bridging access gaps in underserved areas.',
    technologies: ['USSD', 'Laravel', 'PHP', 'MySQL', 'Node.js (integration)'],
    category: 'EdTech',
    status: 'Completed',
    year: '2021',
    company: 'MobiPay Ltd (EduTech)',
    features: [
      'USSD dialogs for lessons and quizzes',
      'Resource lookup and broadcast scheduling',
      'Backend reporting for educators'
    ],
    images: [],
    githubUrl: null,
    liveUrl: null,
    isPrivate: true
  },
  {
    id: 6,
    title: 'MyVote (USSD + Web Voting System)',
    description: 'A USSD-accessible voting application and companion web admin portal allowing candidate registration, campaign creation and voting via mobile phones.',
    technologies: ['USSD', 'PHP', 'JavaScript', 'Node.js', 'Web Admin UI'],
    category: 'FinTech / Civic Tech',
    status: 'Completed',
    year: '2021',
    company: 'MobiPay Ltd (EduTech)',
    features: [
      'Vote casting via USSD for feature phone users',
      'Admin web portal for candidate and campaign management',
      'Simple vote tally and export reports'
    ],
    images: [],
    githubUrl: null,
    liveUrl: null,
    isPrivate: true
  },
  {
    id: 7,
    title: 'Crowdfunding (GoFundMe-style) Platform',
    description: 'Fundraising platform built with Laravel and integrated payment connectors (Stripe etc.) for collecting and distributing donations.',
    technologies: ['Laravel', 'PHP', 'Stripe (payments)', 'MySQL', 'JavaScript'],
    category: 'FinTech',
    status: 'Completed',
    year: '2021',
    company: 'MobiPay Ltd (EduTech)',
    features: [
      'Campaign creation and management',
      'Secure payment collection and disbursement',
      'Donor dashboards and reporting'
    ],
    images: [],
    githubUrl: null,
    liveUrl: null,
    isPrivate: true
  },

  // ---------- NxtGen Labs (Tech/EdTech) (2022 - 2023) ----------
  {
    id: 8,
    title: 'Menub — Exam Distribution System',
    description: 'Multi-platform system to securely distribute exam papers nationwide. Includes Flutter mobile app, React web portal and an ESP32-based IoT device to secure and tamper-detect physical exam paper shipments.',
    technologies: ['Flutter', 'React', 'ESP32 (C)', 'Node.js', 'Postgres/MySQL'],
    category: 'IoT & Embedded Systems',
    status: 'Prototype',
    year: '2022',
    company: 'NxtGen Labs (Tech/EdTech)',
    features: [
      'Secure IoT lockbox for exam papers (ESP32, tamper alerts)',
      'Flutter app for delivery agents',
      'React web portal for tracking and audit trails'
    ],
    images: [],
    githubUrl: null,
    liveUrl: null,
    isPrivate: true
  },
  {
    id: 9,
    title: 'Distribution Tracking Dashboard',
    description: 'Laravel + React dashboard for monitoring the flow of distributed exam materials and auditing delivery routes and device telemetry.',
    technologies: ['Laravel', 'PHP', 'React', 'MySQL', 'REST APIs'],
    category: 'Web Development',
    status: 'Prototype',
    year: '2022',
    company: 'NxtGen Labs (Tech/EdTech)',
    features: [
      'Real-time location & device telemetry',
      'Route audits and delivery confirmations',
      'CSV export and reporting'
    ],
    images: [],
    githubUrl: null,
    liveUrl: null,
    isPrivate: true
  },
  {
    id: 10,
    title: 'Soil Mapping System (Soil Mapping)',
    description: 'IoT system for mapping soil fertility (humidity, moisture) with sensor nodes and a companion mobile/web platform for farmers and researchers.',
    technologies: ['ESP32 (C)', 'Flutter', 'Node.js', 'Postgres', 'REST'],
    category: 'IoT & Embedded Systems',
    status: 'Prototype',
    year: '2022',
    company: 'NxtGen Labs (Tech/EdTech)',
    features: [
      'Sensor network for soil moisture and humidity',
      'Mobile dashboards for field data visualization',
      'Data export for agronomic analysis'
    ],
    images: [],
    githubUrl: null,
    liveUrl: null,
    isPrivate: true
  },
  {
    id: 11,
    title: 'Geofence (Cattle Tracking & Analytics)',
    description: 'IoT neck-collar solution for livestock tracking using ESP32, a Next.js web UI and Node.js backend; includes location alerts and basic health/event analytics.',
    technologies: ['ESP32 (C)', 'Next.js', 'Node.js', 'Postgres', 'MQTT'],
    category: 'IoT & Embedded Systems',
    status: 'Prototype',
    year: '2022',
    company: 'NxtGen Labs (Tech/EdTech)',
    features: [
      'Real-time cattle location tracking',
      'Geofence alerts for wandering animals',
      'Telemetry-driven behavior/heat detection insights'
    ],
    images: [],
    githubUrl: null,
    liveUrl: null,
    isPrivate: true
  },
  {
    id: 12,
    title: 'SmartFarm (Greenhouse Monitoring Prototype)',
    description: 'Small-scale greenhouse monitoring prototype that collects environmental data (temp, humidity, CO2) using ESP32 nodes and a Flutter dashboard.',
    technologies: ['ESP32 (C)', 'Flutter', 'Node.js', 'InfluxDB/Timeseries'],
    category: 'IoT & Embedded Systems',
    status: 'Prototype',
    year: '2022',
    company: 'NxtGen Labs (Tech/EdTech)',
    features: [
      'Environmental sensor telemetry',
      'Alerting for out-of-range conditions',
      'Historical trends for greenhouse optimization'
    ],
    images: [],
    githubUrl: null,
    liveUrl: null,
    isPrivate: true
  },
  {
    id: 13,
    title: 'Inventory Management System',
    description: 'Warehouse and inventory application built with PHP (Laravel) and JavaScript for stock tracking and operations.',
    technologies: ['Laravel', 'PHP', 'JavaScript', 'MySQL'],
    category: 'Web Development',
    status: 'Completed',
    year: '2022',
    company: 'NxtGen Labs (Tech/EdTech)',
    features: [
      'Stock in/out workflows',
      'Basic reporting and low-stock alerts',
      'Role-based access controls for warehouse staff'
    ],
    images: [],
    githubUrl: null,
    liveUrl: null,
    isPrivate: true
  },
  {
    id: 14,
    title: 'KYC Blockchain System',
    description: 'Prototype system to store and verify customer KYC records on a distributed ledger to improve tamper-evidence and auditability for banking clients.',
    technologies: ['Node.js', 'Smart Contracts', 'Blockchain (prototype)', 'IPFS (optional)'],
    category: 'Blockchain Applications',
    status: 'Prototype',
    year: '2022',
    company: 'NxtGen Labs (Tech/EdTech)',
    features: [
      'Tamper-evident storage of KYC records',
      'Proof-of-ownership & verification flows',
      'Experimentation with on-chain metadata'
    ],
    images: [],
    githubUrl: null,
    liveUrl: null,
    isPrivate: true
  },
  {
    id: 15,
    title: 'Educational Chatbot (Bloom’s Taxonomy Generator)',
    description: 'Chatbot that generates exam and study questions mapped to Bloom’s Taxonomy levels, useful for teacher support and automated question creation.',
    technologies: ['Node.js', 'Python (NLP helpers)', 'React (admin UI)'],
    category: 'EdTech / AI',
    status: 'Prototype',
    year: '2022',
    company: 'NxtGen Labs (Tech/EdTech)',
    features: [
      'Question generation per Bloom level',
      'Teacher-facing UI for prompt and output review',
      'Export to common quiz formats'
    ],
    images: [],
    githubUrl: null,
    liveUrl: null,
    isPrivate: true
  },
  {
    id: 16,
    title: 'Unity Educational & Prototype Games',
    description: 'Collection of Unity-based prototypes and small games used in educational contexts and gamified learning experiments.',
    technologies: ['Unity', 'C#', 'Git (GitHub/GitLab)'],
    category: 'Game Development',
    status: 'Prototype',
    year: '2022',
    company: 'NxtGen Labs (Tech/EdTech)',
    features: [
      'Interactive learning mechanics',
      'Prototype-level gameplay for classroom use',
      'Integration concepts for learning analytics'
    ],
    images: [],
    githubUrl: null,
    liveUrl: null,
    isPrivate: true
  },
  {
    id: 17,
    title: 'Soya Seed Deformation — Image Dataset & Analysis',
    description: 'Image dataset pipeline and prototype classifiers for detecting soya seed deformation for agri-quality monitoring.',
    technologies: ['Python', 'OpenCV', 'TensorFlow/PyTorch (prototype)'],
    category: 'Data Science',
    status: 'Prototype',
    year: '2023',
    company: 'NxtGen Labs (Tech/EdTech)',
    features: [
      'Image collection and labeling pipeline',
      'Prototype classification model',
      'Evaluation metrics and sample visualizations'
    ],
    images: [],
    githubUrl: null,
    liveUrl: null,
    isPrivate: true
  },
  {
    id: 18,
    title: 'Poaching Detection (Sound-based) — Save the Children Prototype',
    description: 'Prototype using sound sensors and ML to detect anomalous events (e.g., gunshots, chainsaws) for anti-poaching and protection use-cases.',
    technologies: ['ESP32 (audio capture)', 'Python', 'Edge ML (prototype)', 'MQTT'],
    category: 'IoT & Embedded Systems',
    status: 'Prototype',
    year: '2023',
    company: 'NxtGen Labs (Tech/EdTech)',
    features: [
      'Edge audio capture and event detection',
      'Alerting pipeline for remote monitoring',
      'Proof-of-concept integration with dashboards'
    ],
    images: [],
    githubUrl: null,
    liveUrl: null,
    isPrivate: true
  },
  {
    id: 19,
    title: 'SmallMoney — Micro-loan / Finance App (Flutter)',
    description: 'Flutter-based mobile app aimed at small personal loans and microfinance workflows, focused on quick application and simple repayment flows.',
    technologies: ['Flutter', 'Dart', 'Node.js', 'Stripe/Payment Gateways (integration)'],
    category: 'FinTech',
    status: 'Prototype',
    year: '2023',
    company: 'NxtGen Labs (Tech/EdTech)',
    features: [
      'Loan application and approval workflow',
      'Payment scheduling and reminders',
      'Simple admin dashboard for loan officers'
    ],
    images: [],
    githubUrl: null,
    liveUrl: null,
    isPrivate: true
  },

  // ---------- Mancosa (Higher Learning) (2023 - Present) ----------
  {
    id: 20,
    title: 'Sampling Techniques Gamification (Pygame)',
    description: 'Interactive Pygame-based simulation to teach statistical sampling techniques (SRS, Systematic, Stratified, Cluster) including an MVC architecture and sampling models.',
    technologies: ['Python', 'Pygame', 'MVC Architecture'],
    category: 'Gamification & Learning',
    status: 'In Development',
    year: '2023',
    company: 'Mancosa (Higher Learning)',
    features: [
      'Interactive wheel and sampling simulations',
      'Multiple sampling technique modes (SRS, SYS, STRATIFIED, CLUSTER)',
      'Sample generation, comparison, and reporting'
    ],
    images: [],
    githubUrl: null,
    liveUrl: null,
    isPrivate: true
  },
  {
    id: 21,
    title: 'WhatsApp AI Chatbot (Meta Cloud API + Gemini)',
    description: 'WhatsApp-based AI assistant integrated with Meta Cloud API and Gemini to help students with homework and quick tutoring via chat and multimedia.',
    technologies: ['Meta Cloud API', 'Gemini', 'Node.js', 'WhatsApp Business API'],
    category: 'AI / EdTech',
    status: 'In Development',
    year: '2023',
    company: 'Mancosa (Higher Learning)',
    features: [
      'Natural language tutoring on demand',
      'Multimedia support (images / audio) for homework',
      'Conversational flows tuned for student help'
    ],
    images: [],
    githubUrl: null,
    liveUrl: null,
    isPrivate: true
  },
  {
    id: 22,
    title: 'Ecosystem Gamification (Proof of Concept)',
    description: 'Gamified learning experience that simulates ecosystem restoration (planting trees, locating water) to teach environmental restoration concepts.',
    technologies: ['Web (HTML/CSS/JS)', 'Prototype game logic'],
    category: 'Gamification & Learning',
    status: 'Proof of Concept',
    year: '2023',
    company: 'Mancosa (Higher Learning)',
    features: [
      'Interactive activities for ecosystem restoration',
      'Progress tracking and simple learning objectives',
      'Designed for classroom demos and workshops'
    ],
    images: [],
    githubUrl: null,
    liveUrl: null,
    isPrivate: true
  },
  // {
  //   id: 23,
  //   title: 'Assessment Scanner (Handwritten PDF → OCR → Grading)',
  //   description: 'Mobile/web concept to scan handwritten assessments (PDF), extract answers using OCR/Google Vision, and provide AI-assisted or manual grading workflows for educators.',
  //   technologies: ['Flutter (mobile)', 'Google Vision API', 'Node.js', 'Python (post-processing)'],
  //   category: 'EdTech / AI',
  //   status: 'In Development',
  //   year: '2024',
  //   company: 'Mancosa (Higher Learning)',
  //   features: [
  //     'PDF/handwritten answer extraction pipeline',
  //     'AI-assisted answer matching and suggested grading',
  //     'Teacher review interface for manual confirmation'
  //   ],
  //   images: [],
  //   githubUrl: null,
  //   liveUrl: null,
  //   isPrivate: true
  // }
];

const Projects = () => {
  const projectsArray = 'Projects'.split('')
  const [letterClass, setLetterClass] = useState('text-animate')
  const [filter, setFilter] = useState('All')

  useEffect(() => {
    const timer = setTimeout(() => {
      setLetterClass('text-animate-hover')
    }, 2000)
    return () => clearTimeout(timer)
  }, [])

  // Get unique categories for filtering
  const categories = ['All', ...new Set(projects.map(project => project.category))]

  // Filter projects based on selected category
  const filteredProjects = filter === 'All' 
    ? projects 
    : projects.filter(project => project.category === filter)

  return (
    <>
      <div className="container projects-page">
        <div className="text-zone">
          <h1>
            <AnimatedLetters
              letterClass={letterClass}
              strArray={projectsArray}
              idx={15}
            />
          </h1>
          <p>
            A showcase of my technical projects spanning various domains including
            backend development, data visualization, blockchain, and DevOps. Each project
            represents a solution to real-world challenges.
          </p>
          
          {/* Category Filter */}
          <div className="filter-container">
            {categories.map(category => (
              <button
                key={category}
                className={`filter-btn ${filter === category ? 'active' : ''}`}
                onClick={() => setFilter(category)}
              >
                {category}
              </button>
            ))}
          </div>
        </div>

        <div className="projects-container">
          <div className="projects-grid">
            {filteredProjects.map((project, index) => (
              <div key={project.id} className="project-card" style={{animationDelay: `${index * 0.1}s`}}>
                {/* Project Images Section - with provision for multiple images */}
                {project.images && project.images.length > 0 && (
                  <div className="project-images">
                    <div className="image-carousel">
                      {project.images.map((image, idx) => (
                        <img key={idx} src={image} alt={`${project.title} ${idx + 1}`} />
                      ))}
                    </div>
                  </div>
                )}
                
                <div className="project-content">
                  <div className="project-header">
                    <div className="project-meta">
                      <span className="category">{project.category}</span>
                      <span className="year">{project.year}</span>
                      <span className={`status ${project.status.toLowerCase()}`}>
                        {project.status}
                      </span>
                    </div>
                    <h3 className="project-title">{project.title}</h3>
                    <p className="company">{project.company}</p>
                  </div>

                  <p className="project-description">{project.description}</p>

                  <div className="project-features">
                    <h4>Key Features:</h4>
                    <ul>
                      {project.features.map((feature, idx) => (
                        <li key={idx}>{feature}</li>
                      ))}
                    </ul>
                  </div>

                  <div className="technologies">
                    {project.technologies.map((tech, idx) => (
                      <span key={idx} className="tech-tag">{tech}</span>
                    ))}
                  </div>

                  <div className="project-links">
                    {project.githubUrl && (
                      <a href={project.githubUrl} target="_blank" rel="noreferrer" className="project-link">
                        <FontAwesomeIcon icon={faCodeBranch} />
                        <span>Code</span>
                      </a>
                    )}
                    {project.liveUrl && (
                      <a href={project.liveUrl} target="_blank" rel="noreferrer" className="project-link">
                        <FontAwesomeIcon icon={faExternalLinkAlt} />
                        <span>Live Demo</span>
                      </a>
                    )}
                    {project.isPrivate && (
                      <span className="private-indicator">
                        <FontAwesomeIcon icon={faCode} />
                        <span>Private Project</span>
                      </span>
                    )}
                  </div>
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

export default Projects

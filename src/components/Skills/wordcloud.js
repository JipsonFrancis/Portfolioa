import React, { useEffect, useState } from 'react'

import TagCloud from 'TagCloud'

const WordCloud = () => {
  const [isLoading, setLoad] = useState(true)

  const container = '.content'
  const texts = [
    'Python',
    'Typescript',
    'ESP 32',
    'ARDUINO',
    'C++',
    'API',
    'SQL',
    'Bash',
    'React',
    'NextJS',
    'Firebase',
    'NodeJS',
    'Express',
    'GraphQL',
    'FastAPI',
    'MySQL',
    'SQL',
    'MongoDB',
    'PyTorch',
    'Docker',
    'Oculus',
    'Virtual Reality',
    'Augmented Reality',
    'Git',
    'GitHub',
    'Linux',
    'Java',
    'Flutter',
    'HTML5',
    'CSS3',
    'JS',
    'C',
    'Solidity',
    'PHP',
    'Pandas',
    'IPFS',
    'Laravel',
  ]
    const options = {
    radius: 300,
    // animation speed
    // slow, normal, fast
    maxSpeed: 'fast',
    initSpeed: 'fast',
    // 0 = top
    // 90 = left
    // 135 = right-bottom
    direction: 135,
    // interact with cursor move on mouse out
    keep: true,
  }
  //   to render wordcloud each time the page is reloaded
  useEffect(() => {
    if (isLoading) {
      TagCloud(container, texts, options)
      setLoad(false)
    }
  })

  return (
    <div className="main">
      <span className="content"></span>
    </div>
  )
}

export default WordCloud

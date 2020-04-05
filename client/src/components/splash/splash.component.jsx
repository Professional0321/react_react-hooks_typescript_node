import React from 'react';
import './splash.styles.scss'

import Skate from '../../images/background-1.jpg'
import PalmTrees from '../../images/background-2.jpg'

const Splash = () => {
  return (
    <div className="splash">
      <div className="main-1">
        <h1 className="main-title">
          Palm Clothing
        </h1>
      </div>
      <div className="main-2">
        <div className="main-2 title">
          Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
        </div>
      </div>
    </div>
  )
}

export default Splash;
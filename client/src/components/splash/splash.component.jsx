import React from 'react';
import './splash.styles.scss'

import Skate from '../../images/background-1.jpg'
import PalmTrees from '../../images/background-2.jpg'
import Footer from '../footer/footer.component';

import Street1 from '../../images/street-clothing-1.jpg';
import Street2 from '../../images/street-clothing-2.jpg';
import Street3 from '../../images/street-clothing-3.jpg';

const Splash = () => {
  return (
    <div className="splash">
      <section className="header">
        {/* <h1 className="text-box">
          <span>Palm Clothing</span>
          <span>Is Where Life Happens</span>
        </h1> */}
        <div className="text-box">
          <h1 className="heading-primary">
              <span className="heading-primary--main">Palm Clothing</span>
              <span className="heading-primary--sub">is where life happens</span>
          </h1>
          <a href="#" className="btn btn--white btn--animated">Enter the Store</a>
        </div>
      </section>
      <section className="about">
        <div className="about-header">
          <h3 className="header-secondary">
            Matching style and class with luxury and comfort.
          </h3>
        </div>
        <div className="row">
          <div className="col-1-of-2">
            <h3 className="heading-tertiary u-margin-bottom-small"> Matching style and class with luxury and comfort.</h3>
            <p className="paragraph">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure qui earum suscipit assumenda. Possimus atque labore nesciunt voluptas, vero doloribus officia exercitationem necessitatibus, mollitia, facere eius! Aliquid deserunt vel doloribus.
            </p>
            <h3 className="heading-tertiary u-margin-bottom-small">Live adventures like you never have before</h3>
            <p className="paragraph">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure qui earum suscipit assumenda. Possimus atque labore nesciunt voluptas.
            </p>
            <a href="#" className="btn-text">Enter the Store &rarr;</a>
          </div>
          <div className="col-1-of-2">
            <div className="composition">
              <img className="street-photo p1" alt="Street Photo 1" src={Street1}></img>
              <img className="street-photo p2" alt="Street Photo 2" src={Street2}></img>
              <img className="street-photo p3" alt="Street Photo 3" src={Street3}></img>
            </div>
          </div>
        </div>
      </section>
      {/* <section className="main-2">
        <div className="main-2 title">
          Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
        </div>
      </section> */}
      {/* <Footer/> */}
    </div>
  )
}

export default Splash;
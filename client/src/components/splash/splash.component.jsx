import React from 'react';
import './splash.styles.scss'

import Skate from '../../images/background-1.jpg'
// import PalmTrees from '../../images/background-2.jpg'
import Footer from '../footer/footer.component';

import { ReactComponent as Logo } from '../../crown.svg';
import PalmTrees from '../../crown.svg';

import Street1 from '../../images/street-clothing-1.jpg';
import Street2 from '../../images/street-clothing-2.jpg';
import Street3 from '../../images/street-clothing-3.jpg';

const Splash = () => {
  return (
    <div className="splash">
      <section className="header">
        <div className="logo-box">
          <img src={PalmTrees} alt="Palm Tree Logo" className="logo-image"></img>
        </div>
        <div className="text-box">
          <h1 className="heading-primary">
              <span className="heading-primary--main">Palms</span>
              <span className="heading-primary--sub">where life happens</span>
          </h1>
          <a href="#" className="btn btn--white btn--animated">Enter the Store</a>
        </div>
      </section>
      <section className="about">
        <div className="about-header">
          <h3 className="heading-secondary">
            True style never dies
          </h3>
        </div>
        <div className="row">
          <div className="col-1-of-2">
            <h3 className="heading-tertiary u-margin-bottom-small">Matching style and class with luxury and comfort</h3>
            <p className="paragraph">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure qui earum suscipit assumenda. Possimus atque labore nesciunt voluptas, vero doloribus officia exercitationem necessitatibus, mollitia, facere eius! Aliquid deserunt vel doloribus.
            </p>
            <h3 className="heading-tertiary u-margin-bottom-small">Expect more from your clothes</h3>
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
      <section className="main-2">
        <div class="feature-box">
            <i class="feature-box__icon icon-basic-world"></i>
            <h3 class="heading-tertiary u-margin-bottom-small">Express yourself</h3>
            <p class="feature-box__test">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quasi suscipit fugit ab doloribus nulla repudiandae iusto dolores officia.
            </p>
        </div>
        <div class="feature-box">
            <i class="feature-box__icon icon-basic-compass"></i>
            <h3 class="heading-tertiary u-margin-bottom-small">Uniquely You</h3>
            <p class="feature-box__test">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quasi suscipit fugit ab doloribus nulla repudiandae iusto dolores officia.
            </p>
        </div>
        <div class="feature-box">
            <i class="feature-box__icon icon-basic-map"></i>
            <h3 class="heading-tertiary u-margin-bottom-small">Find your way</h3>
            <p class="feature-box__test">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quasi suscipit fugit ab doloribus nulla repudiandae iusto dolores officia.
            </p>
        </div>
        <div class="feature-box">
            <i class="feature-box__icon icon-basic-clockwise"></i>
            <h3 class="heading-tertiary u-margin-bottom-small">Refine your image</h3>
            <p class="feature-box__test">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quasi suscipit fugit ab doloribus nulla repudiandae iusto dolores officia.
            </p>
        </div>
        <div className="main-2 title">
          {/* Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum. */}
        </div>
      </section>
      {/* <Footer/> */}
    </div>
  )
}

export default Splash;
import React, { useEffect, useRef, useState } from "react";
import "./assets/style/style.scss";

import { useIntersection } from "react-use";
import {gsap} from "gsap"

import bannerImg from "./assets/img/sofa-banner.png";
import chairImg1 from "./assets/img/chair-5.png";
import chairImg2 from "./assets/img/chair-4.png";
import chairImg3 from "./assets/img/chair-3.png";

function App() {

  const sectionRef = useRef(null);

  const intersectionCatalog = useIntersection(sectionRef, {
    root: null,
    rootMargin: "0px",
    threshold: 0.8
  })

  const fadeIn = element => {
    console.log("fade in")
    gsap.to(element, 1, {
      opacity: 1,
      y: -60,
      ease: "power4.out",
      stagger: {
        amount: 0.5
      }
    })
  }

  useEffect(()=> {
    fadeIn(".hero-el")
  }, [])

  intersectionCatalog && intersectionCatalog.intersectionRatio > 0.8 && fadeIn(".fadeIn")

  return (
    <div className="App">
      <nav>
        <div className="brand">LOGO</div>
        <ul className="menu-list">
          <li><a className="active" href="#hero">Home</a></li>
          <li><a href="#catalog">Catalog</a></li>
          <li><a>Log In</a></li>
          <li><a>Sign Up</a></li>
        </ul>
      </nav>
      <div id="hero">
        <div className="hero-left">
          <div className="hero-el">
            <h1>A Nice Furniture.</h1>
            <h1>A Happy Future.</h1>
          </div>
          <div className="hero-el">
            <p>
              Find yourself a nice furniture in our rich <br />
              collection of stuff. Shopping for high grade<br />
              furniture has never been this easy. <br />
            </p>
          </div>
          <div>
            <button>Shop Now</button>
          </div>
        </div>
        <div className="hero-el hero-right">
          <img src={bannerImg} alt="sofa-banner" />
        </div>
      </div>

      <div id="catalog" ref={sectionRef}>
        <div className="white-box"></div>
        <div className="catalog-content">
          <h2>New Arrival</h2>
          <div className="product-list">
            <div className="fadeIn product">
              <div className="product-image">
                <img src={chairImg1} alt="curvy-chair" />
              </div>
              <div className="product-description">
                <div className="product-title">
                  <h3>Curvy Chair</h3>
                  <p>A nice little description about the product</p>
                </div>
                <div className="product-price">$200</div>
              </div>
            </div>
            <div className="fadeIn product">
              <div className="product-image">
                <img src={chairImg2} alt="wooden-chair" />
              </div>
              <div className="product-description">
                <div className="product-title">
                  <h3>Wooden Chair</h3>
                  <p>A nice little description about the product</p>
                </div>
                <div className="product-price">$200</div>
              </div>
            </div>
            <div className="fadeIn product">
              <div className="product-image">
                <img src={chairImg3} alt="comfy-chair" />
              </div>
              <div className="product-description">
                <div className="product-title">
                  <h3>Comfy Chair</h3>
                  <p>A nice little description about the product</p>
                </div>
                <div className="product-price">$200</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;

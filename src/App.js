import React from 'react';
import "./assets/style/style.scss"

import bannerImg from './assets/img/sofa-banner.png'
import chairImg1 from './assets/img/chair-5.png'
import chairImg2 from './assets/img/chair-4.png'
import chairImg3 from './assets/img/chair-3.png'

function App() {
  return (
    <div className="App">
      <nav>
        <div>
          <div>LOGO</div>
        </div>
        <div>
          <ul>
            <li>Home</li>
            <li>Catalog</li>
            <li>Log In</li>
            <li>Sign Up</li>
          </ul>
        </div>
      </nav>
      <div className="hero">
        <div className="hero-left">
          <div>
            <h1>A Nice Furniture.</h1>
            <h1>A Happy Future.</h1>
          </div>
          <div>
            <p>
              Find yourself a nice furniture <br/>
              in our rich collection of stuff.  <br/>
              Shopping for high grade  <br/>
              furniture has never been this easy. <br/>
            </p>
          </div>
          <div>
            <button>Shop Now</button>
          </div>
        </div>
        <div className="hero-right">
          <img src={bannerImg} alt="sofa-banner"/>
        </div>
      </div>

      <div className="catalog">
        <div className="catalog-content">
          <h2>New Arrival</h2>
          <div className="product-list">
            <div className="product">
              <div className="product-image">
                <img src={chairImg1} alt="curvy-chair"/>
              </div>
              <div className="product-description">
                <div className="product-title">
                  <h3>Curvy Chair</h3>
                  <p>
                  A nice little description about the product
                  </p>
                </div>
                <div className="product-price">
                  $200
                </div>
              </div>
            </div>
            <div className="product">
              <div className="product-image">
                <img src={chairImg2} alt="wooden-chair" />
              </div>
              <div className="product-description">
                <div className="product-title">
                  <h3>Wooden Chair</h3>
                  <p>
                  A nice little description about the product
                  </p>
                </div>
                <div className="product-price">
                  $200
                </div>
              </div>
            </div>
            <div className="product">
              <div className="product-image">
                <img src={chairImg3} alt="comfy-chair"/>
              </div>
              <div className="product-description">
                <div className="product-title">
                  <h3>Comfy Chair</h3>
                  <p>
                  A nice little description about the product
                  </p>
                </div>
                <div className="product-price">
                  $200
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;

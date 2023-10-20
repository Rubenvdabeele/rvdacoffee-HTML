import React from 'react'

import { Helmet } from 'react-helmet'

import './home.css'

const Home = (props) => {
  return (
    <div className="home-container">
      <Helmet>
        <title>rvda.coffee</title>
        <meta property="og:title" content="rvda.coffee" />
      </Helmet>
      <div className="home-container1">
        <span className="home-text">Hello world</span>
      </div>
      <div className="home-banner">
        <h1 className="home-text1">Learn to keep it simple</h1>
        <span className="home-text2">
          <span>
            <span>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non
              volutpat turpis. Mauris luctus rutrum mi ut rhoncus. Integer in
              dignissim tortor.
              <span
                dangerouslySetInnerHTML={{
                  __html: ' ',
                }}
              />
            </span>
            <span>
              <span
                dangerouslySetInnerHTML={{
                  __html: ' ',
                }}
              />
            </span>
          </span>
        </span>
        <div className="home-btn-group">
          <button className="home-button button">Get Started</button>
          <button className="home-button1 button">Learn More</button>
        </div>
      </div>
    </div>
  )
}

export default Home

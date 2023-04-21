// Import React and essentiels hooks
import React from 'react'
import './Home.css'

// Import img
import chatIcon from '../../assets/img/icon-chat.webp'
import moneyIcon from '../../assets/img/icon-money.webp'
import securityIcon from '../../assets/img/icon-security.webp'


export default function Home() {
  return (
    <main>
      <section className="hero">
        <div className=" ly--lg-container">
          <div className="flex justify-content--end">
            <div className="hero-content">
              <p className="title-md">No fees.</p>
              <p className="title-md">No minimum deposit.</p>
              <p className="title-md">High interest rates.</p>
              <div className="mt--md">
                <p className="title-sm mw--300">Open a savings account with Argent Bank today!</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="ly--full-container">
        <div className="features flex justify-content--center">
          <div className="feature-item text--center">
            <img 
            src={chatIcon} 
            alt="Chat Icon" 
            className="feature-icon" />
            <h3 className="title-sm fw--700 mt--md">You are our #1 priority</h3>
            <div className="mw--370 mx--auto">
              <p className='mt--md'>
                Need to talk to a representative? You can get in touch through our
                24/7 chat or through a phone call in less than 5 minutes.
              </p>
            </div>
          </div>
          <div className="feature-item text--center">
            <img
              src={moneyIcon}
              alt="Money Icon"
              className="feature-icon"
            />
            <h3 className="title-sm fw--700 mt--md">More savings means higher rates</h3>
            <div className="mw--370 mx--auto">
              <p className='mt--md'>
                The more you save with us, the higher your interest rate will be!
              </p>
            </div>
          </div>
          <div className="feature-item text--center">
            <img
              src={securityIcon}
              alt="Security Icon"
              className="feature-icon"
            />
            <h3 className="title-sm fw--700 mt--md">Security you can trust</h3>
            <div className="mw--370 mx--auto">
              <p className='mt--md'>
                We use top of the line encryption to make sure your data and money
                is always safe.
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}

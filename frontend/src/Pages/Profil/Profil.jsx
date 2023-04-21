import React from 'react';
import './Profil.css';

export default function Profil() {
  return (
    <main className="t--dark">
      <section>
        <div className="text--center account-header">
          <h1 className='title-lg'>Welcome back<br />Tony Jarvis!</h1>
          <div className="flex justify-content--center">
            <button className="btn--plain btn--green mt--md">Edit Name</button>
          </div>
        </div>
        <section className="account-main">
          <div className='flex account-main__card mb--md'>
            <div>
              <h3 className='text'>Argent Bank Checking (x8349)</h3>
              <p className='title-xl'>$2,082.79</p>
              <p>Available Balance</p>
            </div>
            <div>
              <button className="btn--plain btn--green transaction-button w--100">View transactions</button>
            </div>
          </div>
          <div className="flex account-main__card mb--md">
            <div>
              <h3 className='text'>Argent Bank Savings (x6712)</h3>
              <p className='title-xl'>$10,928.42</p>
              <p>Available Balance</p>
            </div>
            <div>
              <button className="btn--plain btn--green transaction-button w--100">View transactions</button>
            </div>
          </div>
          <div className="flex account-main__card">
            <div>
              <h3 className='text'>Argent Bank Credit Card (x8349)</h3>
              <p className='title-xl'>$184.30</p>
              <p>Current Balance</p>
            </div>
            <div>
              <button className="btn--plain btn--green transaction-button w--100">View transactions</button>
            </div>
          </div>
        </section>
      </section>
    </main>
  )
}

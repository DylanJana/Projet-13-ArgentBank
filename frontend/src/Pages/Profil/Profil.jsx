import React, {useEffect, useState} from 'react'
import './Profil.css'
import { useDispatch, useSelector } from 'react-redux'
// Import function call API
import { setInfosProfile } from '../../utils/userApi'

// Import action of my reducer
import {setUserProfil} from '../../redux/userReducer/userReducer'
import localforage from 'localforage'

export default function Profil() {
  const tokenPromise = localforage.getItem('token')
  const [edit, setEdit] = useState(false)
  const userProfil = useSelector((state) => state.userInfos)
  const [firstName, setFirstName] = useState('')
  const [lastName, setLastName] = useState('')
  const dispatch = useDispatch();

  useEffect(() => {
    setFirstName(userProfil.firstName)
    setLastName(userProfil.lastName)
  }, [userProfil])

  const handleSubmit = (e) => {
    e.preventDefault();
    tokenPromise.then(token => {
      setInfosProfile(firstName, lastName, token)
    })
    dispatch(setUserProfil({ firstName: firstName, lastName: lastName}));
    setEdit(false);
  };

  return (
    <main className="t--dark">
      <section className='ly--full-container'>
      <div className="text--center account-header">
        <h1 className='title-lg'>Welcome back</h1>
        {edit ? (
          <div>
            <h2 className="title-lg">{userProfil.firstName} {userProfil.lastName}</h2>
            <div>
              <form className='form-edit-profil'>
                <div className="form-edit-profil__container flex justify-content--center mt--lg mb--sm">
                  <input
                    type="text"
                    name="firstname"
                    placeholder={firstName}
                    onChange={(e) => setFirstName(e.target.value)}
                    value={firstName}
                  />
                  <input
                    type="text"
                    name="lastname"
                    placeholder={lastName}
                    onChange={(e) => setLastName(e.target.value)}
                    value={lastName}
                  />
                </div>
                <div className='form-edit-profil__container flex justify-content--center'>
                  <button className='btn--plain btn--green' onClick={(e) => handleSubmit(e)}>Save</button>
                  <button className='btn--plain btn--green' onClick={() => setEdit(false)}>Cancel</button>
                </div>
              </form>
            </div>
          </div>
        )
        : (
          <div> 
            <h2 className="title-lg">{userProfil.firstName} {userProfil.lastName}</h2>
            <div className="flex justify-content--center">
              <button className="btn--plain btn--green mt--md" onClick={() => setEdit(true)}>Edit Name</button>
            </div>
          </div>)
        }
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

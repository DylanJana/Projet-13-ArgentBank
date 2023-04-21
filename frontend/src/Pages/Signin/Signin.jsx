import React, {useState} from 'react'
import './SignIn.css';
// Import hook react-redux
import { useDispatch } from 'react-redux'
// Import hook react-router-dom
import { useNavigate } from 'react-router-dom'

// Import action of my reducer
import { setUser } from '../../redux/userReducer/userReducer'

// Import function to call Api
import { connectUser } from '../../utils/userApi'
export default function SignIn() {
  // Init state
  const [email, setEmail] = useState('tony@stark.com')
  const [password, setPassword] = useState('password123')
  const [remember, setRemember] = useState(true)
  const navigate = useNavigate()
  const dispatch = useDispatch()

  const handleSubmitForm = async(e) => {
    e.preventDefault();
    await connectUser(email, password)
      .then(({email, firstName, lastName}) => {
        dispatch(setUser({email, firstName, lastName}))
        navigate('/')
      })
  }

  return (
    <main className="signin t--dark">
      <section className="signin-container flex justify-content--center">
        <div className='signin-form mx--auto'>
          <div className="text--center">
            <i className="fa fa-user-circle"></i>
            <h1 className='title-md mt--md'>Sign In</h1>
          </div>
          <form className='mt--md' onSubmit={handleSubmitForm}>
            <div className="flex flex-column signin-form__field-input">
              <label htmlFor="username" className='fw--700'>Username</label>
              <input 
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)} 
              id="username" />
            </div>
            <div className="flex flex-column signin-form__field-input">
              <label htmlFor="password" className='fw--700'>Password</label>
              <input 
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}  
              id="password" />
            </div>
            <div className="signin-form__field-remember mb--sm">
              <input 
              type="checkbox"
              value={remember}
              onChange={() => setRemember(!remember)} 
              id="remember-me" />
              <label htmlFor="remember-me">Remember me</label>
            </div>
            <button
            type='submit' 
            className="btn--plain btn--green"
            >
              Sign In
            </button>
          </form>
        </div>
      </section>
    </main>
  )
}

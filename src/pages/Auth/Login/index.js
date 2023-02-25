import { createUserWithEmailAndPassword, getAuth } from 'firebase/auth'
import React, { useState } from 'react'
import { auth } from '../../../config/firebase'



const initialSate = {
  email: '',
  password: ''
}

export default function Index() {
  const [state, setState] = useState(initialSate)


  const handleChange = (e) => {

    const { name, value } = e.target


    setState(s => ({...s, [name]: value}))

    console.log(state)

  }



  const handleLogin =()=>{

const {email,password} = state
    
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in 
        const user = userCredential.user;
        console.log(user)
        // ...
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        // ..
      });



  }


  return (
    <>
    <div>
      <div className="text-center">Login</div>
    </div>
      <div className="container">
        <div className="row mt-5">
          <div className="col">
            <input type="email" placeholder='Email'  className="form-control" name='email' onChange={handleChange} />
            <input type="passsword" placeholder='Password' className="form-control" name='password' onChange={handleChange} />
            <button className='btn btn-primary' onClick={handleLogin} > Login</button>

          </div>
        </div>
      </div>

    </>
  )
}

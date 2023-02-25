import React, { useState } from 'react'



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

    

  }


  return (
    <>
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

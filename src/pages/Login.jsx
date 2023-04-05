import React from 'react'

const Login = () => {
  return (
    <div className='formContainer'>
      <div className='formWrapper'>
        <span className='logo'>Chat App </span>
        <span className='title'>Login</span>
        <form>
            <input type='text' placeholder='display name' />
            <input type='email' placeholder='email'/>
            <button>Login</button>
        </form>
        <p>Don't have an account? Register</p>
      </div>
    </div>
  )
}

export default Login
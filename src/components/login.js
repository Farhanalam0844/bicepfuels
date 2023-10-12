import React from 'react'

export default function Login() {
  return (
    <section className='login'>
  <h1 className="heading">
      Login 
    </h1>
    <form action="">
<input type="name" required minLength={3} maxLength={20} name='name' placeholder='Enter Your Name' /> 
<input type="email" required name='email' placeholder='abc@gamil.com' /> 
<input type="password" required minLength={8} name='password' placeholder='Password'/> 
<button className='btn4'>Login</button>
    </form>
    </section>
  )
}

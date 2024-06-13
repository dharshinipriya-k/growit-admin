import React from 'react'
import CustomInput from '../components/CustomInput'
import Button from 'react-bootstrap/Button'

function ForgotPassword() {
  return <>
      <div className='py-5' style={{background: "#ffd333",minHeight:"100vh"}}>
        <br /><br /><br /><br />
        <div className='my-5 w-25 bg-white rounded-3 mx-auto p-4 login-wrapper'>
          <h3 className='text-center'>Forgot Password</h3>
          <p className='text-center'>Please enter your registered email</p>
          <form action="">
          <CustomInput type='email' label='Email Address' id='email'/>
          <Button className='border-0 px-3 py-2 fw-bold w-100' style={{background: "ffd333"}} type='submit'>Send Link</Button>
          </form>
        </div>
      </div>
  </>
   
}

export default ForgotPassword

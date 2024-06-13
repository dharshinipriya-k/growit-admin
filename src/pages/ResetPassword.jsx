import React from 'react'
import CustomInput from '../components/CustomInput'
import Button from 'react-bootstrap/Button'
import {Link} from 'react-router-dom'

function ResetPassword() {
  return <>
      <div className='py-5' style={{background: "#ffd333",minHeight:"100vh"}}>
        <br /><br /><br /><br />
        <div className='my-5 w-25 bg-white rounded-3 mx-auto p-4 login-wrapper'>
          <h3 className='text-center'>Reset Password</h3>
          <p className='text-center'>Please enter a new password</p>
          <form action="">
          <CustomInput type='password' label='New Password' id='pass'/>
          <CustomInput type='password' label='Confirm Password' id='confirmpass'/>
          <Link>
            <Button className='border-0 px-3 py-2 fw-bold w-100' style={{background: "ffd333"}} type='submit'>Reset</Button>
          </Link>
          
          </form>
        </div>
      </div>
  </>
   
}

export default ResetPassword

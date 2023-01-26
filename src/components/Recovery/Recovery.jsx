import React from 'react'
import styles from '../UserName/Username.module.css'
import {Link} from 'react-router-dom'
import {Toaster} from 'react-hot-toast'

const Recovery = () => {

  

  return (
    <div className='container mx-auto'>
      <Toaster position='top-right' reverseOrder={false}/>
      <div className="flex h-screen justify-center items-center">
      <div className={styles.glass}>

        
       <div className='title flex flex-col items-center'>
         <h4 className='text-3xl font-bold'>Recovery</h4>
         <span className='py-4 text-sm w-2/3 text-center text-gray-500'>Enter OTP to recover password!</span>
        </div>


        <form className='pt-20'>
          <div className="textbox flex flex-col gap-6">
            <div className="input text-center">
            <span className='text-sm py-4 text-left text-gray-500'>Enter 6 digit OTP sent to your email</span>
            <input  className={styles.textbox} type="password" />
              
            </div>
          
            <button className={styles.btn} type='submit'>Recover</button>
          </div>

           <div className="text-center py-4 mx-auto">
              <span className='text-gray-500'>Can't get OTP?<button className='text-red-500 ml-2'>Resend</button></span>
           </div>

        </form>
      </div>



      </div>
 

    </div>
  )
}

export default Recovery
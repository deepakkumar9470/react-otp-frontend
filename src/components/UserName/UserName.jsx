import React from 'react'
import styles from './Username.module.css'
import user from '../../assets/user.png'
import {Link} from 'react-router-dom'
import {Toaster} from 'react-hot-toast'
import {useFormik} from 'formik'
import { usernameValidate } from '../../utils/validate'

const UserName = () => {

  const formik = useFormik({
    initialValues : {
      username : ''
    },
    validate : usernameValidate,
    validateOnBlur : false,
    validateOnChange: false,
    onSubmit: values => {
      console.log(values)
    },
  })

  return (
    <div className='container mx-auto'>
      <Toaster position='top-right' reverseOrder={false}/>
      <div className="flex h-screen justify-center items-center">
      <div className={styles.glass}>

        
       <div className='title flex flex-col items-center'>
         <h4 className='text-3xl font-bold'>Hello, Deepak</h4>
         <span className='py-4 text-sm w-2/3 text-center text-gray-500'>Explore more by connecting us!</span>
        </div>


        <form className='py-1' onSubmit={formik.handleSubmit}>
          <div className='profile flex justify-center py-4'>
            <img className={styles.profile_img} src={user} alt="" />
          </div>
           
          <div className="textbox flex flex-col items-center">
            <input  {...formik.getFieldProps('username')} className={styles.textbox} type="text" placeholder="Username"/>
            <button className={styles.btn} type='submit'>Let's Go</button>
          </div>

           <div className="text-center py-4">
              <span className='text-gray-500'><Link className='text-red-500' to='/register'>Register</Link></span>
           </div>

        </form>
      </div>



      </div>
 

    </div>
  )
}

export default UserName
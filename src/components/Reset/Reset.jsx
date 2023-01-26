import React from 'react'
import styles from '../UserName/Username.module.css'
import user from '../../assets/user.png'
import {Link} from 'react-router-dom'
import {Toaster} from 'react-hot-toast'
import {useFormik} from 'formik'
import { passwordValidate } from '../../utils/validate'

const Reset = () => {

  const formik = useFormik({
    initialValues : {
      password : 'admin@2023',
      confirmpassword : 'admin@2023'
    },
    validate : passwordValidate,
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
      <div className={styles.glass} style={{width : '28%'}}>

        
       <div className='title flex flex-col items-center'>
         <h4 className='text-3xl font-bold'>Reset</h4>
         <span className='py-4 text-sm w-2/3 text-center text-gray-500'>Enter new password!</span>
        </div>


        <form className='pt-20' onSubmit={formik.handleSubmit}>
    
          <div className="textbox flex flex-col items-center">
            <input  {...formik.getFieldProps('password')} className={styles.textbox} type="password" />
            <input  {...formik.getFieldProps('confirmpassword')} className={styles.textbox} type="password" />
            <button className={styles.btn} type='submit'>Reset</button>
          </div>

        

        </form>
      </div>



      </div>
 

    </div>
  )
}

export default Reset
import React,{useState} from 'react'
import styles from '../UserName/Username.module.css'
import user from '../../assets/user.png'
import {Link} from 'react-router-dom'
import {Toaster} from 'react-hot-toast'
import {useFormik} from 'formik'
import {registerValidation } from '../../utils/validate'

const Register = () => {

  const [file,setFile] = useState('')

  const onUploadChange = async (e) =>{
     const newfile = e.target.files[0]
     const fileReader = new FileReader()

     fileReader.readAsDataURL(newfile)
     fileReader.onloadend = () =>{
      console.log(fileReader.result)
     }
        
       setFile(e.target.files[0])
  }

  const formik = useFormik({
    initialValues : {
      username : 'example123',
      email : 'admin@gmail.com',
      password : 'admin@2023',
    },
    // validate : registerValidation,
    validateOnBlur : false,
    validateOnChange: false,
    onSubmit:async  values => {
      values = await Object.assign(values , { profile : file || ''})
      console.log(values)
    },
  })

  return (
    <div className='container mx-auto'>
      <Toaster position='top-right' reverseOrder={false}/>
      <div className="flex h-max p-5 justify-center items-center">
      <div className={styles.glass} style={{width:"45%"}}>

        
       <div className='title flex flex-col items-center'>
         <h4 className='text-3xl font-bold'>Register</h4>
         <span className='py-4 text-sm w-2/3 text-center text-gray-500'>Happy to join you!</span>
        </div>


        <form className='py-1' onSubmit={formik.handleSubmit}>
          <div className='profile flex justify-center py-4'>
            <label htmlFor="profile">
            <img className={styles.profile_img} src={user} alt="" />
            </label>
            <input onChange={onUploadChange} type="file" name="profile" id="profile" />
          </div>
           
          <div className="textbox flex flex-col items-center">
            <input  {...formik.getFieldProps('username')} className={styles.textbox} type="text"  placeholder="deepak2023"/>
            <input  {...formik.getFieldProps('email')} className={styles.textbox} type="text" placeholder="deepak2023@gmail.com" />
            <input  {...formik.getFieldProps('password')} className={styles.textbox} type="password" />
            <button className={styles.btn} type='submit'>Sign up</button>
          </div>

           <div className="text-center py-2">
              <span className='text-gray-500'>Dont' have an account?<Link className='text-red-500 ml-2' to='/'>Recover now</Link></span>
           </div>

        </form>
      </div>



      </div>
 

    </div>
  )
}

export default Register
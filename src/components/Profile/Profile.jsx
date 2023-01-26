import React,{useState} from 'react'
import styles from '../UserName/Username.module.css'
import user from '../../assets/user.png'
import {Link} from 'react-router-dom'
import {Toaster} from 'react-hot-toast'
import {useFormik} from 'formik'
import {registerValidation } from '../../utils/validate'
import extend  from './Profile.module.css'

const Profile = () => {

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
      firstName : '',
      lastName : '',
      mobile : '',
      email : 'admin@gmail.com',
      address : '',
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
      <div className={`${styles.glass} ${extend.glass}`} style={{width:"45%"}}>

        
       <div className='title flex flex-col items-center'>
         <h4 className='text-3xl font-bold'>Profile</h4>
         <span className='py-4 text-sm w-2/3 text-center text-gray-500'>You can update the details!</span>
        </div>


        <form className='py-1' onSubmit={formik.handleSubmit}>
          <div className='profile flex justify-center py-4'>
            <label htmlFor="profile">
            <img className={`${styles.profile_img} ${extend.profile_img}`} src={user} alt="" />
            </label>
            <input onChange={onUploadChange} type="file" name="profile" id="profile" />
          </div>
           
          <div className="textbox flex flex-col items-center">
             <div className="name flex w-3/4 gap-10">
             <input  {...formik.getFieldProps('firstName')} className={`${styles.textbox} ${extend.textbox}`} type="text"  placeholder="Your first name "/>
             <input  {...formik.getFieldProps('lastName')} className={`${styles.textbox} ${extend.textbox}`} type="text"  placeholder="Your last name"/>
             </div>
             <div className="name flex w-3/4 gap-10">
             <input  {...formik.getFieldProps('mobile')} className={`${styles.textbox} ${extend.textbox}`} type="text"  placeholder="Your mobile "/>
             <input  {...formik.getFieldProps('email')} className={`${styles.textbox} ${extend.textbox}`} type="text"  placeholder="Your email name"/>
             </div>
             <input  {...formik.getFieldProps('address')} className={`${styles.textbox} ${extend.textbox}`} type="text"  placeholder="Your address "/>
             <button className={styles.btn} type='submit'>Update</button>

          </div>

           <div className="text-center py-2">
              <span className='text-gray-500'>Come back later<button className='text-red-500 ml-2'>Logout</button></span>
           </div>

        </form>
      </div>



      </div>
 

    </div>
  )
}

export default Profile
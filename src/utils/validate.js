import { toast } from "react-hot-toast";

// Username validatio start  
export async function usernameValidate( values){
  const errors = userNameVerify({}, values)
  return errors
}

function userNameVerify (error = {}, values){
    if(!values.username){
          error.username =toast.error('User name required..')
  
    }else if(values.username.includes(" ")){
      error.username = toast.error('Invalid field..')
    }
  
    return error
  }
// Password validatio end  



// Password validatio start  

function passwordVerify (error = {}, values){
 const specialCha = /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]$/;  
  if(!values.password){
        error.password =toast.error('Password required..')

  }else if(values.password.length <  4){
    error.password = toast.error('Password must me 4 characters long')
  }
  else if(!specialCha.test(values.password)){
    error.password = toast.error('Password must have special character')
  }

  return error
}


export async function passwordValidate( values){
    const errors = passwordVerify({}, values)
    return errors
  }

  // Password validatio end  
  
  
// Email validatio start 

function emailVerify (error = {}, values){
  const specialCha = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/ 
   if(!values.email){
         error.email =toast.error('email required..')
 
   }else if(!values.email.includes(" ")){
    error.email = toast.error('Wrong email..')
  }
   else if(!specialCha.test(values.email)){
     error.email = toast.error('Invalid email address..')
   }
 
   return error
 }

  
 // validate Register form

 export async function registerValidation(values){
     const errors = usernameValidate({}, values)
     passwordVerify(errors,values)
     emailVerify(errors,values)

     return errors
 } 


  
 // validate Register end





  
 // validate profile page by email



  
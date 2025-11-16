import React from 'react'
import {Formik, useFormik} from 'formik'
import * as Yup from 'yup'
import AuthLayOuts from '../../components/layouts/AuthLayOuts'

const Login = () => {
  const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&]).{8,}$/
  const formik = useFormik({
    initialValues:{
      email:'',
      password:''
    },
    onSubmit:
      values =>{
        alert(JSON.stringify(values,null,2))
      },
    validationSchema:Yup.object({
      email:Yup.string().email('Please enter a valid email').required('Please enter your email'),
      password: Yup.string().matches(passwordRegex,'Please enter a valid password').required('Please enter your password')
      
    })
    
  })
  
  
  return (
    <AuthLayOuts>
      <div className='lg:w-[70%] h-3/4 md:h-full mt-[70px] flex flex-col justify-center'>
        <h3 className='font-semibold text-xl text-black'>
          Welcome Back
        </h3>
        <p className='text-xs text-slate-700 mt-[5px] mb-6'>
          Please enter your login details
        </p>

        <form onSubmit={formik.handleSubmit}
        className='flex flex-col'>
        <label htmlFor="email" className='text-xs font-semibold'>
          Email Address
        </label>
        <input 
        className='bg-lime-100 border text-xs px-4 border-slate-200 rounded-lg p-2 mt-4 outline-none'
        type="text"
        placeholder='john@example.com'
        name='email'
        id='email'
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        value={formik.values.email} />
        {formik.touched.email && formik.errors.email ? <div className="text-red-500 text-xs mt-1">{formik.errors.email}</div>:null}

        <label htmlFor="email" className='text-xs mt-4 font-semibold'>
          Password
        </label>
        <input 
        className='bg-lime-100 border text-xs px-4 border-slate-200 rounded-lg p-2 mt-4 outline-none'
        type="password"
        placeholder='Min 8 characters'
        name='password'
        id='password'
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        value={formik.values.password} />
        {formik.touched.password && formik.errors.password ? <div className="text-red-500 text-xs mt-1">{formik.errors.password}</div>:null}

        <p className='text-xs mt-2'>
          Don't have an account? {""} <a className='underline text-lime-700' href="/signUp">SignUp</a>
        </p>

        <button type='submit'
        className='bg-[#ADF802] text-sm mt-3 text-slate-700 px-3 py-2 rounded-lg w-fit self-center'>
          LOGIN
        </button>
        </form>
      </div>
    </AuthLayOuts>
    
  )
}

export default Login
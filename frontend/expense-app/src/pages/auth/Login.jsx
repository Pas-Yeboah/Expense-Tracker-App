import React from 'react'
import AuthLayOuts from '../../components/layouts/AuthLayOuts'

const login = () => {
  return (
    <AuthLayOuts>
      <div className='lg:w-[70%] h-3/4 md:h-full flex flex-col justify-center'>
      <h3 className='font-semibold text-xl text-black'>
        Welcome Back
      </h3>
      <p className='text-xs text-slate-700 mt-[5px] mb-6'>
        Please enter your login details
      </p>
    </div>

    </AuthLayOuts>
    
  )
}

export default login
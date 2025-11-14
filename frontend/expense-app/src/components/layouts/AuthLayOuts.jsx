import React from 'react'
import expenseLPP from "../../assets/images/expenseLPP.png"

const AuthLayOuts = ({children}) => {
  return (
    <div className='flex'>
        <div className='w-screen h-screen md:w-[60vh] px-12 pt-8 pb-12'>
            <h2 className='text-lg font-medium text-black'>
                Expense Tracker
            </h2>
            {children}
        </div>
        <div className='hidden md:block w-2/5 lg:w-1/2 xl:1/2 h-screen'>
            

            <img src={expenseLPP} alt=""  className='w-full h-full top-0 right-0 bottom-0 object-cover'/>
        </div>
    </div>
  )
}

export default AuthLayOuts
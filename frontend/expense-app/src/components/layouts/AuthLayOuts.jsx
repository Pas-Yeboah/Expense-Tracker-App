import React from 'react'
import expenseLPP from "../../assets/images/expenseLPP.png"

const AuthLayOuts = ({children}) => {
  return (
    <div className='flex'>
        <div className='w-full  flex flex-col items-baseline h-screen md:w-[50vw] px-12 pt-8 pb-12'>
            <h2 className='text-lg font-medium text-black'>
                Expense Tracker
            </h2>
            {children}
        </div>
        <div className='hidden md:block md:w-[50vw] h-screen'>
            

            <img src={expenseLPP} alt=""  className='w-full h-full  object-cover'/>
        </div>
    </div>
  )
}

export default AuthLayOuts
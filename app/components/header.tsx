import React from 'react'

const Header = () => {
  return (
    <div className="bg-[#111827] h-8 lg:h-8 md:h-13 max-sm:h-13 w-full flex text-white p-2 md:p-3 md:w-full justify-between max-sm:p-3 lg:p-1">
        <p className="ml-6">CAD</p>
        <div className="flex gap-5 md:mr-4 md:gap-8 max-sm:gap-9 max-sm:mr-2">
          <p>Sign in</p>
          <p>Create an account</p>
        </div>
    </div>
  )
}

export default Header

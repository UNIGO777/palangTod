import React from 'react'

const Navbar = () => {
  return (
    <div className="w-full bg-white border-b border-gray-300 py-4 px-4 md:px-10">
      <div className="flex flex-col md:flex-row justify-between items-center gap-2 md:gap-4">
        <div className="text-red-600 font-bold text-lg md:text-2xl uppercase text-center md:text-left">
          ULTIMATE ENHANCEMENT
        </div>
        <div className="text-gray-600 text-xs text-center md:text-left">
          EXTRA STRONG MALE ENHANCEMENT PRO SOLUTION
        </div>
        <div className="text-gray-900 font-semibold text-xs uppercase text-center md:text-left">
          ACT NOW TO CLAIM THE
        </div>
        <div className="text-red-600 font-bold text-lg md:text-2xl uppercase text-center md:text-left">
          EXTRA STRONG MALE ENHANCEMENT
        </div>
      </div>
    </div>
  )
}

export default Navbar
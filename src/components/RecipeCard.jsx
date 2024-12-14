import React from 'react'
import { FaArrowRightLong } from 'react-icons/fa6'

const RecipeCard = ({ ImageLink, dishName, originArea }) => {
  return (
    <div className=''>
      <div className="card shadow-lg rounded-lg flex flex-col  w-72 max-sm:w-fit overflow-hidden">
        <div className="imageContainer h-[288px] w-[288px] max-sm:h-[200px] max-sm:w-[200px]">
            <img src={ImageLink} className='w-full ' alt="Images" />
        </div>
        <div className="details flex flex-col gap-1 p-3 ">
            <p className='text-sm capitalize text-gray-400'>{originArea}</p>
            <p className='text-xl max-sm:text-lg font-bold line-clam line-clamp-1'>{dishName}</p>
            <button className='text-lg max-sm:text-base py-1 px-3 bg-green-300 rounded-md w-fit text-start flex gap-3 hover:gap-4 transition-all duration-150 items-center'>Recipe <FaArrowRightLong /> </button>
        </div>
      </div>
    </div>
  )
}

export default RecipeCard

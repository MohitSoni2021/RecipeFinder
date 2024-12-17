import React from 'react'

const MainbannerComponent = () => {
  return (
    <div className='flex flex-col my-5 items-center'>
      <div className="banner-container rounded-xl overflow-hidden relative" >
        <img src="https://www.hormel.com/brands/hormel-pepperoni/wp-content/uploads/sites/3/Recipes_2400_Spicy-Pepperoni-Pizza-2048x853.jpg?1732571083" alt="sdfdsafdasfadsfadsfdsa" className='h-full max-md:h-96 aspect-video' />
        <h1 className="text-7xl absolute bottom-2 left-2 font-black text-white w-1/2 max-lg:text-5xl max-md:text-3xl max-sm:text-xl">Chicken & mushroom Hotpot</h1>
      </div>
    </div>
  )
}

export default MainbannerComponent

import React, { useEffect, useRef, useState } from 'react'
import { FaSearch } from 'react-icons/fa'
import { Navigate, NavLink, replace, useNavigate } from 'react-router-dom'

const NavbarComponent = () => {

  const [userQuery, setUserQuery] = useState("")
  const [searchParameters, setSearchParameters] = useState("origin")


  let navigate = useNavigate()
  const runqueryFunction = () => {


    console.log(userQuery)
  }

  const onUserSearch = () => {
    navigate(`/search/${userQuery}/?qt=${searchParameters}`);
  }

  useEffect(() => {
    runqueryFunction()
  }, [userQuery])



  return (
    <div className='flex items-center justify-between max-lg:flex-col-reverse max-sm:justify-start   mt-5 p-2 rounded-lg relative'>
      <div className="w-1/2 flex justify-center flex-col items-center gap-10 z-40 max-md:gap-4 max-md:w-full">
        <h1 className="text-7xl font-black text-center max-md:text-4xl">
          Get Your Favourate Taste here
        </h1>
        <NavLink to={'/search'}> 
        <div className="bg-gradient-to-r from-amber-500 to-red-500 w-fit px-10 py-3 text-3xl rounded-md font-black text-white max-md:text-xl">Get Your Recipe</div>  
        </NavLink>
      </div >
        
      <div className="w-1/2 relative">
        <img src="../../public/resource/mainimg.png" alt="" />
        <img src="../../public/resource/graph.png" alt="" className="absolute -top-28 -z-10 -right-[240px] min-w-[900px] max-md:-right-[350px] max-md:-top-36 max-md:min-w-[500px]  max-sm:-top-1/2 max-sm:min-w-96" />
      </div>
    </div>
  )
}

export default NavbarComponent

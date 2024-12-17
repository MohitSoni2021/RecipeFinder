import React, { useEffect, useState } from 'react'
import RecipeCard from './RecipeCard'
import { useParams } from 'react-router-dom'
import axios from 'axios'

const RecipeDetailPage = () => {

  const [recipeDetails, setRecipeDetails] = useState({})

  const { id } = useParams()
  const getDetailsByID = async() => {
    const response = await axios.get(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`)
    const responseData = response.data.meals[0]
    setRecipeDetails(responseData)
    console.log("getting")
    console.log(responseData)
    // recipeDetails.strYoutube = `https://www.youtube.com/embed/${(recipeDetails.strYoutube).split('v=')[1]}`
  }


  useEffect(()=>{getDetailsByID()}, [])

  return (
    <div className="flex items-center justify-center py-10 bg-orange-200  overflow-x-hidden min-h-screen ">
      <div className='max-w-[1280px] w-full'>

        <div className="flex flex-col  w-full justify-center ">


          <div className="z-40">
              <img src={recipeDetails.strMealThumb} className='w-96 h-96 rounded-full shadow-2xl -mb-16 border-2 ' alt="" />
            </div>
            <div className=" border-2 h-full flex flex-col gap-10 p-10 rounded-lg boxer-shadow bg-white">
                <span className="h-10 w-10  bg-transparent rounded-full"></span>
                <h1 className="text-6xl text-center text-black font-black">
                {recipeDetails.strMeal}
                </h1>
                <div className="flex justify-between text-xl text-gray-400">
                  <span className="">{recipeDetails.strArea}</span>
                  <span className="">{(recipeDetails.strCategory)}</span>
                </div>
                <div className="">
                  {recipeDetails.strInstructions}
                </div>
            </div>
          </div>

          

      </div>
    </div>
  )
}

export default RecipeDetailPage

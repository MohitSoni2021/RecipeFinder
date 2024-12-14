import React, { useEffect, useState } from 'react'
import MainbannerComponent from './components/Mainbanner'
import OuterCrauselCardComponent from './components/OuterCrauselCard'
import RecipeCard from './components/RecipeCard'
import axios from 'axios'
import RadioButtonGroup from './components/RadioButtonGroup'






const App = () => {
  const [latestRecipe, setLatestRecipe] = useState([])
  const [latestRecipeLoader, setLatestRecipeLoader] = useState(false)


  useEffect(() => {
    getItemsByCategories("Breakfast")
  }, []);


  const getItemsByCategories = async(category) => {
    setLatestRecipeLoader(true)
    const response = await axios.get(`https://www.themealdb.com/api/json/v1/1/filter.php?c=${category}`)
    const items = response.data.meals
    const datastruct = items.map((ele)=>{
      return {
        id: ele.idMeal,
        dishName: ele.strMeal,
        img: ele.strMealThumb,
      }
    })
    setLatestRecipe(datastruct)
    console.log(datastruct)
    setLatestRecipeLoader(false)
  }



  return (
    <div className="flex flex-col justify-center items-center overflow-x-hidden ">
      <div className='w-screen max-sm:w-11/12 h-screen  max-w-[1280px]'>
        <MainbannerComponent />
        <OuterCrauselCardComponent 
        isLoading={latestRecipeLoader}
        cardHeaders={"Latest Recipes"}
        showSubCategories={true}
        onChangeFunction = {getItemsByCategories}
        subCategoriesItems={ 
          <RadioButtonGroup options={[
            { id: 'Breakfast', label: 'Breakfast' },
            { id: 'Dessert', label: 'Dessert' },
            { id: 'Pasta', label: 'Pasta' },
            { id: "Starter", label: 'Starter' },
            { id: "Vegetarian", label: 'Vegetarian' },
          ]}  
          onChange={getItemsByCategories}
          
          /> 
      }
        items={
          <>
          {
            latestRecipe.map((ele) => (
              <RecipeCard
                key={ele.id}
                dishName={ele.dishName}
                ImageLink={ele.img}
              />
            ))
          }
          </>
        }
        />
      </div>
    </div>
  )
}

export default App

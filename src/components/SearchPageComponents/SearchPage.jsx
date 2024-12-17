import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { IoSearch } from 'react-icons/io5'
import { useNavigate, useParams, useSearchParams } from 'react-router-dom'
import RecipeCard from '../RecipeCard';
import { DNA } from 'react-loader-spinner';

const SearchPageComponents = () => {
    let navigate = useNavigate()
    let [searchParams] = useSearchParams();
    let { query } = useParams()
    const [responseData, setResponseData] = useState([])
    const [isLoading, setIsLoading] = useState(false)
    const [userQuery, setUserQuery] = useState(query)
    const [searchCategory, setSearchCategory] = useState(searchParams.get('qt'))

    const COMPARISIONDATA = {
        Category: "https://www.themealdb.com/api/json/v1/1/filter.php?c=",
        origin: "https://www.themealdb.com/api/json/v1/1/filter.php?a=",
        Name: "https://www.themealdb.com/api/json/v1/1/search.php?s="
    }

    const onUserSearch = () => {
        navigate(`/search/${userQuery}/?qt=${searchCategory}`);
      }

    const getdata = async() => {
        setIsLoading((pre) => !pre)
        if(searchParams.get("qt") == "Category"){
            const res = await axios.get(`https://www.themealdb.com/api/json/v1/1/filter.php?c=${query}`)
            console.log(res.data.meals)
            if(res.data.meals == null){
                setResponseData([])
            }else{
                setResponseData(res.data.meals)
            }
        }
        else if(searchParams.get("qt") == "origin"){
            const res = await axios.get(`https://www.themealdb.com/api/json/v1/1/filter.php?a=?c=${query}`)
            console.log(res.data.meals)
            if(res.data.meals == null){
                setResponseData([])
            }else{
                setResponseData(res.data.meals)
            }
        }
        else if(searchParams.get('qt') == "Name") {
            const res = await axios.get(`https://www.themealdb.com/api/json/v1/1/search.php?s=${query}`)
            console.log(res.data.meals)
            if(res.data.meals == null){
                setResponseData([])
            }else{
                setResponseData(res.data.meals)
            }
        }
        else{
            console.log("Invalid query type")
            console.log()
            return 0;
        }
        setIsLoading((pre) => !pre)
    }

    useEffect(()=>{
        getdata()
    }, [location.pathname, searchParams.get("qt"), query])


  return (
    <div className="flex flex-col items-center p-2">
        <div className="bg-white flex items-center p-2 border-2 w-full rounded-md max-w-[1280px]">
        <input 
        type="text" 
        className='border-none outline-none w-full text-lg px-2' 
        placeholder='Search for the dish' 
        value={userQuery} 
        onChange={(e)=>{setUserQuery(e.target.value)}}
        />
        <div className="flex items-center gap-2">
            <select name="searchdataQuery" id="" className='p-3 border-none outline-none bg-blue-500 rounded-md text-white' value={searchCategory} onChange={(e)=>{setSearchCategory(e.target.value)}}>
                <option className='px-10 rounded-md bg-orange-400' value="Category">Category</option>
                <option className='px-10 rounded-md bg-orange-400' value="origin">Country</option>
                <option className='px-10 rounded-md bg-orange-400' value="Name">Name</option>
            </select>
            <button className='px-3 py-3 bg-blue-500 flex text-xl items-center gap-2 rounded-md text-white' onClick={onUserSearch}><IoSearch /> </button>
        </div>
    </div>
    <div className="py-5 items-center justify-center">

        {
            (isLoading)? <DNA />:
            <div className="flex  gap-3 max-w-[1280px] flex-wrap justify-center">

            {
                (responseData.length == 0) ? 
                
                <div>
                    <img src="../../../public/resource/mainimg.png" alt="" />
                </div>
                
                :
                responseData.map((element, id) => {
                    return (
                        <RecipeCard
                        ImageLink={element.strMealThumb}
                        dishName={element.strMeal}
                        recipeId={element.idMeal}
                        originArea={element.strArea}
                        />
                    )
                })
            }

            </div>
        }
        
    </div>
    </div>
  )
}

export default SearchPageComponents

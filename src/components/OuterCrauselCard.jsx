import React from 'react'
import RecipeCard from './RecipeCard'
import RadioButtonGroup from './RadioButtonGroup'
import { DNA } from 'react-loader-spinner'

const OuterCrauselCardComponent = ({cardHeaders, showSubCategories, subCategoriesItems, items, onChangeFunction, isLoading=false}) => {
  return (
    <div className=' py-10'>
      <h1 className='text-3xl'>{cardHeaders}</h1>

      {
        (showSubCategories)?
        subCategoriesItems
        :
        ""
      }

      <div className="flex gap-4 overflow-x-scroll scroll-smooth scrollbar-hidden py-3">
        {
           (isLoading)?
           <div className="flex items-center justify-center h-[396px] w-full bg-gray-100">
            <DNA height={100}/>
           </div>
           
           :
           items
        }
      </div>
    </div>
  )
}

export default OuterCrauselCardComponent

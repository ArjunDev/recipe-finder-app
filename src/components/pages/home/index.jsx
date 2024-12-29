import React, { useContext } from 'react'
import { GlobalContext } from '../../context'
import RecipeItem from '../../recipe-item'

const Home = () => {

  const {loading, recipeList} = useContext(GlobalContext)

  if(loading){
    <div>Loading...</div>
  }

 // console.log(recipeList);

  return (
    <div 
      className='flex flex-wrap justify-center container max-auto gap-6'>
      {recipeList && recipeList.length > 0 ? 
        recipeList.map((item)=> <RecipeItem item={item}/> )

      : <div>
          <p className='text-center text-xl my-20 font-bold'>Nothing to show! Please search a recipe.</p>
        </div>
      }
    </div>
  )
}

export default Home
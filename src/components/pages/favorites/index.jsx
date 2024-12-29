import React, { useContext } from 'react'
import { GlobalContext } from '../../context'
import RecipeItem from '../../recipe-item';

const Favorites = () => {

  const {favoriteList, setFavoriteList} = useContext(GlobalContext);

  return (
    <div className='flex flex-wrap justify-center container max-auto gap-6'>
      {favoriteList && favoriteList.length > 0 ? 
        favoriteList.map((item)=> <RecipeItem item={item}/> )

      : <div>
          <p className='text-center text-xl my-20 font-bold'>Nothing is added to fovorites!</p>
        </div>
      }
    </div>
  )
}

export default Favorites
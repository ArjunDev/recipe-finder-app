import React, { useContext } from 'react';
import { NavLink } from 'react-router-dom';
import '/src/index.css'
import { GlobalContext } from '../context';

const Navbar = () => {

  const {
    searchParam, 
    setSearchParam, 
    handleFromSubmit} = useContext(GlobalContext);

  //console.log(searchParam)
  return (
    <div>
      <div className='flex justify-center items-center w-screen bg-slate-100 py-4 mb-4'>
        <form 
          className='flex justify-evenly items-center w-screen'
          onSubmit={handleFromSubmit}>
          <div >
            <NavLink 
              className='text-orange-500 hover:text-orange-700 mx-2 font-bold'
              to={"/"} 
            >FoodRecipe!</NavLink>
          </div>
          <input 
            className='max-w-96 w-60 bg-white rounded-lg p-1.5 shadow-orange-300 shadow-md focus:border-b-2  focus:border-orange-500 focus:outline-0'
            type="text"
            placeholder='Search a recipe...'
            name='search'
            value={searchParam}
            onChange={(event)=> setSearchParam(event.target.value)}
          />
          <ul className='flex justify-evenly items-center text-orange-500 font-bold'>
            <li className='mx-5 hover:text-orange-700'>
              <NavLink to={"/"} >Home</NavLink>
            </li>
            <li className='hover:text-orange-700'>
              <NavLink to={"/favorites"}>Favorites</NavLink>
            </li>
          </ul>
        </form>
      </div>
    </div>
  )
}

export default Navbar;
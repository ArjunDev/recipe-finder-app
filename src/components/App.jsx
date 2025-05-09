import { Routes, Route, Navigate } from 'react-router-dom'
import Home from '/src/components/pages/home/index.jsx';
import Favorites from '/src/components/pages/favorites/index.jsx';
import Details from '/src/components/pages/details/index.jsx';
import Navbar from '/src/components/navbar/index.jsx';
import '/src/index.css';
import FavRecipeDetails from './pages/favorites/fav-recipe-details';

function App() {

  return (
    <div>
      <Navbar/>
      <Routes>
        <Route path='/home' element= { <Home/> }/>
        <Route path='/favorites' element= { <Favorites/> }/>
        <Route path='/recipe-item/:id' element= { <Details/> }/>
        <Route path='/favorites/recipe-item/:id' element= { <FavRecipeDetails/> }/>
        <Route path="*" element={<Navigate to="/home" />} />
      </Routes>
    </div>
  )
}

export default App

import { Routes, Route } from 'react-router-dom'
import Home from '/src/components/pages/home/index.jsx';
import Favorites from '/src/components/pages/favorites/index.jsx';
import Details from '/src/components/pages/details/index.jsx';
import Navbar from '/src/components/navbar/index.jsx';
import '/src/index.css';

function App() {

  return (
    <div>
      <Navbar/>
      <Routes>
        <Route path='/' element= { <Home/> }/>
        <Route path='/favorites' element= { <Favorites/> }/>
        <Route path='/recipe-item/:id' element= { <Details/> }/>
      </Routes>
    </div>
  )
}

export default App

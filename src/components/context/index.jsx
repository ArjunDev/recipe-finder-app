import { createContext, useState } from "react";


export const GlobalContext = createContext(null);

export default function GlobalState({children}){

  const [searchParam, setSearchParam] = useState("");
  const [loading, setLoading]= useState(false);
  const [recipeList, setRecipeList] = useState([]);
  const [recipeDetailsData, setRecipeDetailsData] = useState(null);
  const [favoriteList, setFavoriteList] = useState([]);

  async function handleFromSubmit(event){
    event.preventDefault();
    try {
      const response = await fetch(`https://forkify-api.herokuapp.com/api/search?q=${searchParam}`);

      const resdata = await response.json();
      if(resdata?.recipes){
        setRecipeList(resdata?.recipes);
        setLoading(true);
        setSearchParam("");
      }
      //console.log(resdata)
    } catch (error) {
      setLoading(false);
      setSearchParam("");
    }
  }

  function handleMarkFavorite(currentItem){
    //console.log(currentItem);
    const cpyFavoriteList = [...favoriteList];
    const index = cpyFavoriteList.findIndex(item=> item.recipe_id === currentItem.recipe_id);
    if(index === -1){
      cpyFavoriteList.push(currentItem);
    //pushing the currentItem to fav array if index not present
    }else{
      cpyFavoriteList.splice(index);
    // when clicked on mark as fav, removing it from favlist if its already present.
    // basically this if else is to toggle mark as fav button
    }
    setFavoriteList(cpyFavoriteList);
  }
  
  //console.log("fav List:",favoriteList)

  return (
    <GlobalContext.Provider 
      value={{
          searchParam, 
          setSearchParam, 
          handleFromSubmit, 
          loading, 
          recipeList, 
          recipeDetailsData, 
          setRecipeDetailsData,
          handleMarkFavorite,
          favoriteList,
          setFavoriteList 

        }}>{children}</GlobalContext.Provider>);
}


import React, { useState,useEffect } from "react";
import { BiSearchAlt2 } from "react-icons/bi";
import Searchbar from "./SearchBar";
import Loading from "./Loading";
import RecipeCard from "./RecipeCard";
import { fetchRecipes } from "../utils";
const Recipe = () => {
  const [recipe, setrecipe] = useState([]);
  const [query, setQuery] = useState("Chicken");
  const [limit, setLimit] = useState(50);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);

    fetchRecipe();
  }, []);

  const fetchRecipe = async () => {
    try {
      const data = await fetchRecipes({ query, limit });

      setrecipe(data);

      setLoading(false);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };
  const handleSearchedRecipe = async (e) => {
    e.preventDefault()
    fetchRecipe()
}
  if (loading) {
    return <Loading />;
  }

  return (
    <div>
      <div  id="recipes"className="w-full flex items-center justify-center pt-10 pb-5 px-0 md:px-10">
        <form
          className="w-full lg:w-2/4"
           onSubmit={handleSearchedRecipe}
        >
          <Searchbar
            placeholder="eg. Cake, Vegan, Chicken"
            handleInputChange={(e) => setQuery(e.target.value)}
            rightIcon={
              <BiSearchAlt2
                className="text-gray-600"
                onClick={handleSearchedRecipe}
              />
            }
          />
        </form>
      </div>
      {recipe?.length > 0 ? (
        <>
          <div className="w-full  flex flex-wrap gap-10 px-0 py-10 ">
            {recipe?.map((item, index) => (
              <RecipeCard recipe={item} key={index} />
            ))}
          </div>
        </>
      ) : (
        <div className="text-white w-full items-center justify-center py-10">
          <p className="text-center">No Recipe Found</p>
        </div>
      )}
    </div>
  );
};

export default Recipe;

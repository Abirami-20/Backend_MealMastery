
import React from 'react'
import { Link } from 'react-router-dom'

const RecipeCard = ({ recipe }) => {
const baseUrl = 'http://127.0.0.1:8000'
    return (
        <Link to={`/recipes/${recipe.id}`} className='w-full md:w-[220px]'>
            <div className='bg-_gradient shadow w-full rounded-lg'>
                <img  src={`${baseUrl}${recipe.image}`} alt="recipe_img" className='rounded-lg h-[200px] md:h-[150px] w-full' />

                <div className='p-3'>
                    <p className='text-white font-semibold'>{recipe.title}</p>

                    <div className='mt-2'>
                        <span className='px-2 py-1 text-[12px] capitalize bg-[#0c452243] shadow-xl rounded-full mr-3 text-green-500'>
                            {recipe.description}
                        </span>
                    </div>
                </div>
            </div>
        </Link>
    )
}

export default RecipeCard
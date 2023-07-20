import React from 'react';
import { useLoaderData } from 'react-router-dom';
import RecipeCard from './RecipeCard';

const ChefDetails = () => {
    const chefs = useLoaderData()

    const { chefImg, chefName, bio, numberOfRecipes, likes, yearsOfExperience, recipes } = chefs;
    return (
        <div>
            <div className="card glass mt-8">
                <figure><img className='w-3/6 h-96 pt-4 rounded-xl' src={chefImg} alt="car!" /></figure>
                <div className="card-body">
                    <h2 className="card-title"><span className='text-gray-900'>Name:</span> {chefName}</h2>
                    <p><span className='text-gray-900 text-xl'>Description:</span> {bio}</p>
                    <p><span className='text-gray-900 text-xl'>Likes:</span> {likes} like</p>
                    <p><span className='text-gray-900 text-xl'>Recipe Number:</span> {numberOfRecipes}</p>
                    <p><span className='text-gray-900 text-xl'>Experience:</span> {yearsOfExperience} years</p>
                </div>
            </div>

            <div className='grid grid-cols-3 gap-4 ml-20 mt-24'>
                {
                    recipes.map(recipe => <RecipeCard
                        key={recipe.name}
                        recipe={recipe}
                    ></RecipeCard>)
                }
            </div>
        </div>
    );
};

export default ChefDetails;
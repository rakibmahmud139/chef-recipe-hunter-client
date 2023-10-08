import React from 'react';

const RecipeCard = ({ recipe }) => {
    const { name, recipeImg, ingredients, cookingMethod, rating } = recipe;
    return (
        <div className="card md:w-96 bg-base-100 shadow-xl">
            <figure><img className='w-64 h-48 md:w-96 md:h-96 rounded-xl' src={recipeImg} alt="Shoes" /></figure>
            <div className="card-body">
                <h2 className="card-title">
                    Recipe Name: {name}
                </h2>
                <p className='text-gray-100 text-base mt-2 mb-0'>Ingredients:</p>
                <ol>
                    <li>{ingredients[0]}</li>
                    <li>{ingredients[1]}</li>
                    <li>{ingredients[2]}</li>
                    <li>{ingredients[3]}</li>
                    <li>{ingredients[4]}</li>
                </ol>
                <p><span className='text-gray-100 text-xl mt-2'>Coking Method:</span> {cookingMethod}</p>

                <button className='btn btn-accent bottom-0 mt-8'>Favorite</button>
            </div>
        </div>

    );
};

export default RecipeCard;
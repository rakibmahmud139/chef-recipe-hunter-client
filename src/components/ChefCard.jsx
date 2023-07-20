import React from 'react';
import { Link } from 'react-router-dom';

const ChefCard = ({ chef }) => {
    const { chefImg, chefName, yearsOfExperience, numberOfRecipes, likes, _id } = chef;

    return (
        <div>
            <div className="card lg:card-side bg-gray-100 shadow-xl">
                <img className='w-60 h-60 p-4 rounded' src={chefImg} alt="Album" />
                <div className="card-body">
                    <h2 className="card-title text-gray-900">Name: {chefName}</h2>
                    <p className='text-gray-900'>Experience: {yearsOfExperience} years</p>
                    <p className='text-gray-900'>Recipe Number: {numberOfRecipes}</p>
                    <p className='text-gray-900'>Like: {likes}</p>
                    <div className="card-actions justify-end">
                        <Link to={`/chef/${_id}`}><button className="btn btn-primary">View Recipes </button></Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ChefCard;
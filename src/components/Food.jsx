import React from 'react';

const Food = ({ food }) => {
    const { id, name, img, rating, price } = food;
    return (
        <div className="card card-compact w-96 bg-gray-400 shadow-2xl">
            <figure><img className='w-64 h-64 p-4 rounded-xl' src={img} alt="Shoes" /></figure>
            <div className="card-body">
                <h2 className="card-title text-gray-950">Name: {name}</h2>
                <p className='text-gray-950'>Rating: {rating}</p>
                <p className='text-gray-950'>price: {price}</p>
            </div>
        </div>
    );
};

export default Food;
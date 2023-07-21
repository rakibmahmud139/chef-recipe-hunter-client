import React, { useEffect, useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import ChefCard from './ChefCard';
import Food from './Food';

const Home = () => {
    const [foods, setFoods] = useState([]);

    const chefs = useLoaderData();


    // Load foods data
    useEffect(() => {
        fetch('http://localhost:5000/food')
            .then(res => res.json())
            .then(data => setFoods(data))
            .catch(err => {
                console.log(err.message);
            })
    }, [])

    return (
        <div>
            <div className="carousel mx-auto">
                <div id="slide1" className="carousel-item relative w-full">
                    <img src="/src/assets/image-1.jpg" className="w-full" />
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide4" className="btn btn-circle">❮</a>
                        <a href="#slide2" className="btn btn-circle">❯</a>
                    </div>
                </div>
                <div id="slide2" className="carousel-item relative w-full">
                    <img src="/src/assets/image-2.webp" className="w-full" />
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide1" className="btn btn-circle">❮</a>
                        <a href="#slide3" className="btn btn-circle">❯</a>
                    </div>
                </div>
                <div id="slide3" className="carousel-item relative w-full">
                    <img src="/src/assets/image-3.jpg" className="w-full" />
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide2" className="btn btn-circle">❮</a>
                        <a href="#slide4" className="btn btn-circle">❯</a>
                    </div>
                </div>
                <div id="slide4" className="carousel-item relative w-full">
                    <img src="/images/stock/photo-1665553365602-b2fb8e5d1707.jpg" className="w-full" />
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide3" className="btn btn-circle">❮</a>
                        <a href="#slide1" className="btn btn-circle">❯</a>
                    </div>
                </div>
            </div>


            {/* chef info */}
            <div className='grid grid-cols-3 gap-6 mt-24 ml-4 mr-4'>
                {
                    chefs.map(chef => <ChefCard
                        key={chef._id}
                        chef={chef}
                    ></ChefCard>)
                }
            </div>

            <div className='mt-24 ml-20 mr-4'>
                <div className='text-center'>
                    <h3 className='text-5xl'>More Korean Foods</h3>
                    <p className='mt-4'>There are some Korean food here. Kimchi, Bibimbap, Red rice cakes (tteokbokki), Bulgogi, Korean stew (jjigae), Jajangmyeon etc. Korean cuisine is largely based on rice, vegetables, seafood and (at least in South Korea) meats. Dairy is largely absent from the traditional Korean diet. Traditional Korean meals are named for the number of side dishes (반찬; 飯饌; banchan) that accompany steam-cooked short-grain rice...</p>
                </div>
                <div className='grid grid-cols-3 gap-8 mt-16'>
                    {
                        foods.map(food => <Food
                            key={food.id}
                            food={food}
                        />)
                    }
                </div>
            </div>

        </div>
    );
};

export default Home;
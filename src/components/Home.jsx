import React, { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import ChefCard from "./ChefCard";
import Food from "./Food";
import { TypeAnimation } from "react-type-animation";

const Home = () => {
  const [foods, setFoods] = useState([]);

  const chefs = useLoaderData();

  // Load foods data
  useEffect(() => {
    fetch("https://chef-recipe-hunter-server-rakibmahmud139.vercel.app/food")
      .then((res) => res.json())
      .then((data) => setFoods(data))
      .catch((err) => {
        console.log(err.message);
      });
  }, []);

  return (
    <div>
      <div className="mt-12 text-center text-xl">
        <TypeAnimation
          sequence={[
            "KOREAN ",
            2000,
            "CUISINE IS LARGELY BASED ON RICE, VEGETABLES,",
            2000,
            "SEAFOOD AND MEATS. DAIRY IS LARGELY ABSENT FROM",
            2000,
            "THE TRADITIONAL KOREAN DIET, TRADITIONAL KOREAN MEALS ARE NAMED FOR THE NUMBER OF",
            2000,
            "SIDE DISHES THAT ACCOMPANY STEAM-COOKED SHORT-GRAIN RICE..",
          ]}
          wrapper="span"
          speed={50}
          style={{ fontSize: "2em", display: "inline-block" }}
          repeat={Infinity}
        />
      </div>

      <div className="carousel carousel-end rounded-box mt-12">
        <div className="carousel-item">
          <img
            className=" h-96 w-96"
            src="https://a.cdn-hotels.com/gdcs/production188/d1042/560f847f-c64a-4009-9422-1723c2739c36.jpg?impolicy=fcrop&w=800&h=533&q=medium"
            alt="Drink"
          />
        </div>
        <div className="carousel-item">
          <img
            className=" h-96 w-96"
            src="https://daebak.co/cdn/shop/articles/10-korean-food-facts-daebak-239860.jpg?v=1663736433"
            alt="Drink"
          />
        </div>
        <div className="carousel-item">
          <img
            className=" h-96 w-96"
            src="https://img.buzzfeed.com/buzzfeed-static/static/2020-09/11/15/asset/19b0de03aa06/sub-buzz-2304-1599838033-1.jpg?crop=1080:1080;0,0"
            alt="Drink"
          />
        </div>
        <div className="carousel-item">
          <img
            className=" h-96 w-96"
            src="https://img.etimg.com/photo/94809641/94809641.jpg"
            alt="Drink"
          />
        </div>
        <div className="carousel-item">
          <img
            className=" h-96 w-96"
            src="https://a.cdn-hotels.com/gdcs/production50/d1916/51d76cc9-cbe8-4572-a671-545f882f1847.jpg?impolicy=fcrop&w=800&h=533&q=medium"
            alt="Drink"
          />
        </div>
        <div className="carousel-item">
          <img
            className=" h-96 w-96"
            src="https://img.theculturetrip.com/wp-content/uploads/2019/07/hwhxn4.jpg"
            alt="Drink"
          />
        </div>
        <div className="carousel-item">
          <img
            className=" h-96 w-96"
            src="https://assets.vogue.in/photos/6103d492578ff515bee7dfba/2:3/w_2560%2Cc_limit/Korean%2520food%2520restaurants%2520in%2520India.jpg"
            alt="Drink"
          />
        </div>
        <div className="carousel-item">
          <img
            className=" h-96 w-96"
            src="https://kellyloves.com/cdn/shop/articles/kimchi_ready_to_eat.jpg?v=1665059068&width=800"
            alt="Drink"
          />
        </div>
        <div className="carousel-item">
          <img
            className=" h-96 w-96"
            src="https://www.mdis.edu.sg/blog/wp-content/uploads/2018/07/Korean-food-mdis.jpg"
            alt="Drink"
          />
        </div>
      </div>

      {/* chef info */}
      <div className="grid grid-cols-3 gap-6 mt-24 ml-4 mr-4">
        {chefs.map((chef) => (
          <ChefCard key={chef._id} chef={chef}></ChefCard>
        ))}
      </div>

      {/* Food Section */}

      <div className="mt-24 ml-20 mr-4">
        <div className="text-center">
          <h3 className="text-5xl">More Korean Foods</h3>
          <p className="mt-4">
            There are some Korean food here. Kimchi, Bibimbap, Red rice cakes
            (tteokbokki), Bulgogi, Korean stew (jjigae), Jajangmyeon etc. Korean
            cuisine is largely based on rice, vegetables, seafood and (at least
            in South Korea) meats. Dairy is largely absent from the traditional
            Korean diet. Traditional Korean meals are named for the number of
            side dishes (반찬; 飯饌; banchan) that accompany steam-cooked
            short-grain rice...
          </p>
        </div>
        <div className="grid grid-cols-3 gap-8 mt-16">
          {foods.map((food) => (
            <Food key={food.id} food={food} />
          ))}
        </div>
      </div>

      {/* Another Section */}
      <div className="mt-24 mb-12 text-center">
        <TypeAnimation
          sequence={[
            "LET'S ",
            2000,
            "LET'S LUNCH",
            2000,
            "LET'S LUNCH TODAY",
            2000,
            "LET'S LUNCH TODAY WITH KOREAN",
            2000,
            "LET'S LUNCH TODAY WITH KOREAN DISHES",
          ]}
          wrapper="span"
          speed={50}
          style={{ fontSize: "2em", display: "inline-block" }}
          repeat={Infinity}
        />
      </div>
      <div className="card glass w-3/4 ml-48">
        <figure>
          <img
            className="mt-4 rounded"
            src="https://www.fluentu.com/blog/korean/wp-content/uploads/sites/27/2023/03/Korean-pickle-group-photo.jpg"
            alt="car!"
          />
        </figure>
        <div className="card-body">
          <h2 className="card-title">Some More Vegetables</h2>
          <p>
            {" "}
            Artichoke, Asparagus, Sprouts, Cabbage, Unique Vegetables and Greens
            in Korea, Perilla Leaf Cheongyang Chili Pepper, Korean Zucchini,
            Chonggak Radish, Sweet Potato,Soybean Sprout...
          </p>
          <div className="card-actions justify-end">
            <button className="btn btn-primary">MOre Dishes!</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;

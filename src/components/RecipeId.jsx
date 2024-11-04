import React, { useEffect, useState } from "react";
import Navbar from "./Navbar";
import Trendingslider from "./Trendingslider";
import { useParams } from "react-router-dom";

const RecipeId = () => {
  const { idMeal } = useParams();
  const [data, setData] = useState([]);
  const [active, setActive] = useState('ingredient');

  useEffect(() => {
    const fetchData = async () => {
      const api = await fetch(
        `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${idMeal}`
      );
      const data = await api.json();
      setData(data.meals[0]);
    };
    fetchData();
  }, [idMeal]);

  return (
    <>
      <Navbar />
      <div
        style={{
          width: "90%",
          margin: "auto",
          textAlign: "center",
        }}
      >
        <h1>{data.strMeal}</h1>
        <div
          style={{
            display: "flex",
          }}
        >
          <div className="img" style={{ width: "30%" }}>
            <img src={data.strMealThumb} alt="" style={{ width: "18rem" }} />
          </div>

          <div className="content" style={{ width: "60%" }}>
            <button className="btn" onClick={() => setActive('ingredient')}>Ingredient</button>
            <button className="btn" onClick={() => setActive('instruction')}>Instruction</button>
            <button className="btn" onClick={() => setActive('video')}>Video</button>

            {
              active === 'ingredient' ? (
                <div>
                  <div style={{ fontSize: '1.2rem', fontWeight: 'bold' }}>{data.strIngredient1} - {data.strMeasure1}</div>
                  <div style={{ fontSize: '1.2rem', fontWeight: 'bold' }}>{data.strIngredient2} - {data.strMeasure2}</div>
                  <div style={{ fontSize: '1.2rem', fontWeight: 'bold' }}>{data.strIngredient3} - {data.strMeasure3}</div>
                  <div style={{ fontSize: '1.2rem', fontWeight: 'bold' }}>{data.strIngredient4} - {data.strMeasure4}</div>
                  <div style={{ fontSize: '1.2rem', fontWeight: 'bold' }}>{data.strIngredient5} - {data.strMeasure5}</div>
                  <div style={{ fontSize: '1.2rem', fontWeight: 'bold' }}>{data.strIngredient6} - {data.strMeasure6}</div>
                  <div style={{ fontSize: '1.2rem', fontWeight: 'bold' }}>{data.strIngredient7} - {data.strMeasure7}</div>
                  <div style={{ fontSize: '1.2rem', fontWeight: 'bold' }}>{data.strIngredient8} - {data.strMeasure8}</div>
                  <div style={{ fontSize: '1.2rem', fontWeight: 'bold' }}>{data.strIngredient9} - {data.strMeasure9}</div>
                  <div style={{ fontSize: '1.2rem', fontWeight: 'bold' }}>{data.strIngredient10} - {data.strMeasure10}</div>
                  <div style={{ fontSize: '1.2rem', fontWeight: 'bold' }}>{data.strIngredient11} - {data.strMeasure11}</div>
                  <div style={{ fontSize: '1.2rem', fontWeight: 'bold' }}>{data.strIngredient12} - {data.strMeasure12}</div>
                  <div style={{ fontSize: '1.2rem', fontWeight: 'bold' }}>{data.strIngredient13} - {data.strMeasure13}</div>
                </div>
              ) : active === 'instruction' ? (
                <p style={{ fontWeight: 'bold' }}>{data.strInstructions}</p>
              ) : active === 'video' && data.strYoutube ? (
                <div>
                  <iframe
                    width="560"
                    height="315"
                    src={`https://www.youtube.com/embed/${data.strYoutube.split("v=")[1]}`}
                    title="YouTube video player"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  ></iframe>
                </div>
              ) : (
                <p style={{ fontWeight: 'bold' }}>No video available for this recipe.</p>
              )
            }

          </div>
        </div>
      </div>

      <Trendingslider />
    </>
  );
};

export default RecipeId;

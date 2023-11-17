import axios from 'axios';
import { useEffect, useState } from 'react';
import './App.css'

function Api() {
    const [meal, setMeal] = useState([]);

    useEffect(() => {
        axios.get('https://www.themealdb.com/api/json/v1/1/random.php')
            .then((result) => {
                setMeal(result.data.meals);
            })
            .catch((err) => {
                console.log('An error occurred: ', err);
            });
    }, []);

    return (
        <div className='App'>
            {meal.map((mealdata, index) => (
                <div className='meal_holder m-7 p-3' key={index}>
                    <img src={mealdata.strMealThumb} alt='Randommeal' style={{ height: '250px', width: '500px',borderRadius:'40px'}} />
                    <h1>{mealdata.strMeal} </h1>
                <h3><i>{mealdata.strCategory}</i>  Origin : {mealdata.strArea}</h3>
                    <p>{mealdata.strInstructions}</p>
                </div>
            ))}
        </div>
    );
}

export default Api;

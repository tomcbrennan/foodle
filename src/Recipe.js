import React from 'react';
import style from './recipe.module.css';


const Recipe = ({title, calories, image, ingredients}) => {
    return(
        <div className={style.recipe}>
            <div className="recipe-details">
            <h1>{title}</h1>
            <h3>Calories: {calories}</h3>
            <img src={image} className={style.image} alt="Food"/>
            </div>
            <ol>
                {ingredients.map(ingredient => (
                    <li>{ingredient.text}</li>
                ))}
            </ol>
        </div>
    );
}

export default Recipe;
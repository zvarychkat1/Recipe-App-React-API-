import React from 'react';
import style from './recipe.module.css'



const Recipe = ({title, calories, image, ingredients, url}) =>{
    return(
        <div className={style.recipe}>
            <h1><a className={style.link} href={url}>{title}</a></h1>
            <ol>
                {ingredients.map(ingredient =>(
                    <li>{ingredient.text}</li>
                ))}
            </ol>
            <p>{calories}</p>
            <img className={style.image} src={image} alt=""/>
        </div>
    )
}

export default Recipe;
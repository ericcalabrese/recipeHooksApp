import React from 'react';
import style from './recipe.module.css';

const Recipe = ({title,calories,image,ingredients,recipe,totalTime}) => {
	return (
		<div className={style.recipe}>
			<div className="textCenter">
				<h1>{title}</h1>
			</div>
			<img className={style.image} src={image} alt={title}/>
			<p className="ingredients">Ingredients</p>
			<ul>
				{ingredients.map(ingredient => (
					<li>{ingredient.text}</li>
				))}
			</ul>
			<p className="marginLeft15">Total Prep Time: {totalTime} mins</p>
			<p className="marginLeft15">Calories: {Math.round(calories)} cal</p>
			<button className="search-button textCenter">
				<a href={recipe}>Recipe</a>
			</button>
		</div>
	);
};

export default Recipe;
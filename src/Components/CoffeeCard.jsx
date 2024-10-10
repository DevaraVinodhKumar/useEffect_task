import React from 'react';


export function CoffeeCard({ image,title,price,description,ingredients }) {
  return (
    <div>
      <img src={image}/>
      <h2>{title}</h2>
      <p>{price}</p>
      <p>{description}</p>
      <ul>
        {ingredients && ingredients.map((ingredient, index) => (
          <li key={index}>{ingredient}</li>
        ))}
      </ul>
    </div>
  );
}


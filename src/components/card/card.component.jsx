import React from 'react';

import './card.styles.css';

export const Card = props => (
  <div className='card-container'>
    <img alt="card" src={props.card.imageUrl} />
    <h2> {props.card.name} </h2>
    <p> Set: {props.card.set} </p>
  </div>
);

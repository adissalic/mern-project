import React from 'react';

import classes from './Card.module.css'

const Card = props => {
  const newclass = props.className;
  return (

    <div className={classes.card + ' ' + classes[newclass]} style={props.style}>
      {props.children}
    </div>
  );
};

export default Card;

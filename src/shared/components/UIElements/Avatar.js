import React from "react";
import classes from "./Avatar.module.css";

const Avatar = (props) => {
  const newclass = props.classame;
  return (
    <div
      className={classes.avatar + " " + classes[newclass]}
      style={props.style}
    >
      <img
        src={props.image}
        alt={props.alt}
        style={{ width: props.width, height: props.width }}
      />
    </div>
  );
};

export default Avatar;

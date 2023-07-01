import React from "react";
import classes from "./UserItem.module.css";
import Avatar from "../../shared/components/UIElements/Avatar";
import Card from "../../shared/components/UIElements/Card";
import { Link } from "react-router-dom";

const UserItem = (props) => {
  return (
    <li className={classes["user-item"]}>
      <div className={classes["user-item__content"]}>
        <Card>
          <Link to={`/${props.id}/places`}>
            <div className={classes["user-item__image"]}>
              <Avatar
                image={`${process.env.REACT_APP_ASSET_URL}/${props.image}`}
                alt={props.name}
                classname="ser"
              />
            </div>
            <div className={classes["user-item__info"]}>
              <h2>{props.name}</h2>
              <h3>
                {props.placeCount} {props.placeCount === 1 ? "Place" : "Places"}
              </h3>
            </div>
          </Link>
        </Card>
      </div>
    </li>
  );
};

export default UserItem;

import React from "react";
import classes from "./PlaceList.module.css";
import Card from "../../shared/components/UIElements/Card";
import PlaceItem from "./PlaceItem";


const PlaceList = (props) => {


if (props.items.length === 0) {
  return (
    <div className="place-list center">
      <Card>
        <h2>This user does not have any places.</h2>
      </Card>
    </div>
  );
}

  return (
    <ul className={classes["place-list"]}>
      {props.items.map((place) => (
        <PlaceItem
          key={place.id}
          id={place.id}
          image={place.image}
          title={place.title}
          description={place.description}
          address={place.address}
          creatorId={place.creator}
          coordinates={place.location}
          onDelete={props.onDeletePlace}
        />
      ))}
    </ul>
  );
};

export default PlaceList;

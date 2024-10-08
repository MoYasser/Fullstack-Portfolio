import "./AnimalShow.css";
import React, { useState } from "react";

import bird from "./svg/bird.svg";
import cat from "./svg/cat.svg";
import cow from "./svg/cow.svg";
import dog from "./svg/dog.svg";
import gator from "./svg/gator.svg";
import heart from "./svg/heart.svg";
import horse from "./svg/horse.svg";

const svgMap = {
  bird,
  cat,
  cow,
  dog,
  gator,
  heart,
  horse,
};

const AnimalShow = ({ type }) => {
  const [clicks, setClicks] = useState(0);

  const handleClick = () => {
    setClicks(clicks + 1);
  };

  return (
    // eslint-disable-next-line jsx-a11y/no-static-element-interactions, jsx-a11y/click-events-have-key-events
    <div className="animal-show" onClick={handleClick}>
      <img className="animal" src={svgMap[type]} alt="animal" />
      <img
        className="heart"
        src={heart}
        alt="heart"
        style={{
          width: 10 + 10 * clicks + "px",
        }}
      />
    </div>
  );
};

export default AnimalShow;

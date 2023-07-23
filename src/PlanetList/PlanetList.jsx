import React from "react";
import PlanetItem from "../PlanetItem/PlanetItem";
import s from "./PlanetList.module.css";

const PlanetList = () => {
  return (
    <ul className={s.list}>
      {/* Render the PlanetItem component */}
      <PlanetItem />
    </ul>
  );
};

export default PlanetList;

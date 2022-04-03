import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "../App.css";
import ntf from "../images/ntf.jpg";
import ftn from "../images/ftn.jpg";

export default function Page1(params) {
  const getGameImg = () => {
    return params.game === "Name-to-Flag-game" ? ntf : ftn;
  };
  return (
    <div>
      <img src={getGameImg()} className="chooseGame" alt={params.game} />
      <Link to={`/${params.game}/game`}>
        <br />
        <button>Go</button>
      </Link>
    </div>
  );
}

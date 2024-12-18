import React from "react";
import { Link } from "react-router-dom"

import f1 from "./image_icons/footer_images/f1.png";
import f2 from "./image_icons/footer_images/f2.png";
import "./styles/footer.css"

function Footer() {
  return (
    <div className="pic">
    <div>
      <img src={f1} alt="" />
    </div>
    <div>
      <img src={f2} alt="" />
    </div>
    <div className="navigate">
      <h3><Link to="/">Home:</Link></h3>
      <h3><Link to="/dietplan">Diet Plan:</Link></h3>
      <h3><Link to="/workoutplan">Workout Plan:</Link></h3>
      <h3><Link to="/pdform">Diet Plan Form:</Link></h3>
      <h3><Link to="/pwform">Workout Plan Form:</Link></h3>
    </div>
    </div>
  );
}

export default Footer;

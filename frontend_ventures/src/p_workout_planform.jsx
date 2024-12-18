import React from "react";
import Topnav from "./topnav.jsx";
import Footer from "./footer.jsx";

import background from "./image_icons/personalized_workout_plan_form_images/background.png"
import overlay from "./image_icons/personalized_workout_plan_form_images/Overlay.png"



function Pworkoutplanform() {
  return (
    <>
      <Topnav />
      <div>
        <img className="bgpic" src={background} alt="" />
      </div>
      <div>
        <img className="overlay" src={overlay} alt="" />
      </div>
      <Footer/>
    </>
  );
}

export default Pworkoutplanform;

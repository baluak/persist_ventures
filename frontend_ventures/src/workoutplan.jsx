import React from "react";
import Topnav from "./topnav.jsx";
import Footer from "./footer.jsx";

import w1 from "./image_icons/workout_plan_images/W1.png";
import w2 from "./image_icons/workout_plan_images/W2.png";
import w3 from "./image_icons/workout_plan_images/W3.png";
import w4 from "./image_icons/workout_plan_images/W4.png";

function Workoutplan() {
  return (
    <>
      <Topnav />
      <div>
        <img src={w1} alt="" />
      </div>
      <div>
        <img src={w2} alt="" />
      </div>
      <div>
        <img src={w3} alt="" />
      </div>
      <div>
        <img src={w4} alt="" />
      </div>

      <Footer />
    </>
  );
}

export default Workoutplan;

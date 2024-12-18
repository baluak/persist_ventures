import React from 'react'
import Topnav from "./topnav.jsx"
import Footer from "./footer.jsx";
import "./styles/p_diet.css"

import backgound from "./image_icons/personalized_diet_plan_form_images/pdpf_backgound_image.png"
import overlay from "./image_icons/personalized_diet_plan_form_images/Overlay.png"


function Pdietplanform() {
  return (
    <>
      <Topnav />
      <div className="image-container">
        {/* First image */}
        <img className="bgpic" src={backgound} alt="Background" />

        {/* Overlay image */}
        <img className="overlay" src={overlay} alt="Overlay" />
      </div>
      <Footer />
    </>
  );
}

export default Pdietplanform
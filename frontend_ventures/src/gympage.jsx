import React from "react";
import "./styles/gympage.css";
import gymlogo from "./image_icons/home_images_icons/Container.png";
import dropbackimage from "./image_icons/home_images_icons/dropbackimage.png";
import vidmage from "./image_icons/home_images_icons/Section.png";
import sec1 from "./image_icons/home_images_icons/Section1.png";
import red from "./image_icons/home_images_icons/red.png";

import pone from "./image_icons/home_images_icons/pone.png";
import ptwo from "./image_icons/home_images_icons/ptwo.png";
import pthree from "./image_icons/home_images_icons/pthree.png";
import pfour from "./image_icons/home_images_icons/pfour.png";
import pfive from "./image_icons/home_images_icons/pfive.png";

import Footer from "./footer";

function Gym() {
  return (
    <>
      <div className="dropdown">
        <img className="nav" src={gymlogo} alt="gymlogo" />
      </div>

      <div>
        <img className="back" src={dropbackimage} alt="dropbackimage" />
      </div>
      <div>
        <img src={vidmage} alt="vidimage" />
      </div>
      <div>
        <img className="sec1" src={sec1} alt="sec1" />
      </div>
      <div>
        <img cla src={red} alt="red" />
      </div>

      <div>
        <img src={pone} alt="pone" />
      </div>
      <div>
        <img src={ptwo} alt="ptwo" />
      </div>
      <div>
        <img src={pthree} alt="pthree" />
      </div>
      <div>
        <img src={pfour} alt="pfour" />
      </div>
      <div>
        <img src={pfive} alt="pfive" />
      </div>
      

      <Footer/>
    </>
  );
}

export default Gym;

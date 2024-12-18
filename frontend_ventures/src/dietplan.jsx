import React  from "react";
import Topnav from "./topnav.jsx"
import Footer from "./footer.jsx";
import "./styles/dietplan.css"

import dp1 from "./image_icons/diet_plan_images/dp_one.png"
import dp2 from "./image_icons/diet_plan_images/dptwo.png"
import dp3 from "./image_icons/diet_plan_images/dp3.png"
import dp4 from "./image_icons/diet_plan_images/dp4.png"
import dp5 from "./image_icons/diet_plan_images/dp5.png"



function Diet (){
return(
  <>
<div>
  <Topnav/>
<img src={dp1} alt="" />
<img src={dp2} alt="" />
<img src={dp3} alt="" />
<img src={dp4} alt="" />
<img src={dp5} alt="" />
<Footer/>
</div>
  </>
)  
}

export default Diet
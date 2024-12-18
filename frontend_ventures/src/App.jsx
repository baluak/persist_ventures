import "./styles/App.css";
import Gym from "./gympage.jsx";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Diet from "./dietplan.jsx"; // Correct the import
import Workoutplan from "./workoutplan.jsx";
import Pdietplanform from "./p_diet_planform.jsx";
import Pworkoutplanform from "./p_workout_planform.jsx";

import ScrollToTop from "./ScrolltoTop.jsx";

function App() {
  return (
    <BrowserRouter>
    <ScrollToTop/>
      <Routes>
        <Route path="/" element={<Gym />} />

        <Route path="/dietplan" element={<Diet />} />

        <Route path="/workoutplan" element={<Workoutplan />} />

        <Route path="/pdform" element={<Pdietplanform />} />

        <Route path="/pwform" element={<Pworkoutplanform />} />
      </Routes>

    </BrowserRouter>
  );f
}

export default App;

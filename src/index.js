import React, { useState } from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App V1";

// function Test() {
//   const [movieRating, setMovieRating] = useState(0);
//   return (
//     <div>
//       <StarRating size={24} onSetRating={setMovieRating} />
//       <p>This movie was rated {movieRating}</p>
//     </div>
//   );
// }
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
    {/* <StarRating
      maxRating={5}
      message={["Terrible", "Bad", "Okay", "Good", "Amazing"]}
    />
    <StarRating />
    <Test /> */}
  </React.StrictMode>
);

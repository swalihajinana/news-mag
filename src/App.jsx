
import { useState } from "react";
import Navbar from "./Components/Navbar";
import NewsBoard from "./Components/NewsBoard";  // Corrected import

const App = () => {
 
  return (
    <div>
      <Navbar />
      <NewsBoard />
    </div>
  );
};

export default App;

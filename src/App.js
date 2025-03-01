import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
// import CarouselComponent from "./navbar/CarouselComponent";
import Navbar from "./navbar/Navbar";
import LandingPage from "./LandingPage";
import Signin from "./authentications/Signin";
import Signup from "./authentications/Signup";

function App() {
  return (
    <BrowserRouter>
      <Navbar />

      <div className="App">
        <Routes>
          <Route path="/" element={<LandingPage />} />
          {/* Add more routes as needed */}
          <Route path="/signin" element={<Signin />} />
          <Route path="/signup" element={<Signup />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;

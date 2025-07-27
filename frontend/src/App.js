import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Landing from "./components/Landing";
import AboutUs from "./components/AboutUs";
import Dogs from "./components/Dogs";
import DogDetails from "./components/DogDetails";
import Adoption from './components/Adoption';
import OurTeam from './components/OurTeam';

function App() {
  return (
     <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/about" element={<AboutUs />} />
        <Route path="/dogs" element={<Dogs />} />
        <Route path="/dog/:id" element={<DogDetails />} />
        <Route path="/team" element={<OurTeam/>} />
        <Route path="/adoption" element={<Adoption/>} />
        
      </Routes>
    </Router>
  );
}

export default App;

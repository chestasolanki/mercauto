import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";

import Home from "./pages/Home";
import Catalog from "./pages/Catalog";
import CarDetails from "./pages/CarDetails";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import DealerDashboard from "./pages/DealerDashboard";
import LifestyleMatch from "./pages/LifestyleMatch";

function App() {
  return (
    <BrowserRouter>
      <Navbar />   {/* this makes navbar appear on ALL pages automatically */}

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/catalog" element={<Catalog />} />
        <Route path="/car/:id" element={<CarDetails />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/dealer" element={<DealerDashboard />} />
        <Route path="/match" element={<LifestyleMatch />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

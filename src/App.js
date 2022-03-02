import React, { useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./views/Home";
import Shop from "./views/Shop";
import Contact from "./views/Contact";
import Footer from "./components/Footer";

function App() {
  useEffect(() => {
    document.body.style.margin = "0px";
    document.body.style.padding = "0px";
  }, []);

  return (
    <div className="App" >
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" exact element={<Home />} />
          <Route path="/shop" exact element={<Shop />} />
          <Route path="/contact" exact element={<Contact />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;

import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./views/Home";
import Shop from "./views/Shop";
import Contact from "./views/Contact";
import Footer from "./components/Footer";
import ItemDetail from "./components/ItemDetail";
import { getData } from "./utils/getData";
import Sidebar from "./components/Sidebar";
import { UserContext } from "./utils/UserContext";

function App() {
  const NUMBER_OF_ITEMS = 10;
  const [itemsList, setItemsList] = useState([]);
  const [count, setCount] = useState(0);
  const [selectedItemsList, setSelectedItemsList] = useState([]);

  useEffect(() => {
    console.log("App component did mont");

    const loadItems = async () => {
      setItemsList(await getData(NUMBER_OF_ITEMS));
    };

    loadItems();
  }, []);

  const incrementCartItems = (addedItem) => {
    setCount(count + 1);
    setSelectedItemsList(selectedItemsList.concat(addedItem));
  };

  const decrementCartItems = (removedItem) => {
    setCount(count - 1);
    setSelectedItemsList(
      selectedItemsList.filter((elem) => elem.idNumber !== removedItem)
    );
  };

  function openNav() {
    document.getElementById("mySidenav").style.width = "250px";
  }

  function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
  }

  const providerValue = {
    selectedItemsList,
    decrementCartItems,
  };

  const clearAll = () => {
    setCount(0);
    setSelectedItemsList([]);
  };

  return (
    <div className="App">
      <Router>
        <Navbar count={count} openNav={openNav} />

        <UserContext.Provider value={providerValue}>
          <Sidebar
            closeNav={closeNav}
            selectedItemsList={selectedItemsList}
            clearAll={clearAll}
          />
        </UserContext.Provider>

        <Routes>
          <Route path="/" exact element={<Home />} />
          <Route path="/shop" exact element={<Shop itemsList={itemsList} />} />
          <Route
            path="/shop/:id"
            element={
              <ItemDetail
                itemsList={itemsList}
                incrementCartItems={incrementCartItems}
                decrementCartItems={decrementCartItems}
              />
            }
          ></Route>
          <Route path="/contact" exact element={<Contact />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;

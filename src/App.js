import React, { useState } from "react";
import Banner from "./Banner";
import Menu from "./Menu";
import data from "./data/data";

const App = () => {

  // get an array of unique values for the filter button
  const fiterbtn = ["all", ...new Set(data.map((item) => item.category))];

  // state values
  const [menuData, setMenuDatat] = useState(data);
  const [category, setCategory] = useState(fiterbtn);

  //handle delete item from menu list
  const handleDelete = (id) => {
    const deleteItem = menuData.filter((item) => item.id !== id);
    setMenuDatat(deleteItem);
  };

  //handle order buttton
  const handleClick = (btnitem) => {
    const filteredMenu = data.filter((item) => item.category === btnitem);
    setMenuDatat(filteredMenu);

    if (btnitem === "all") {
      setMenuDatat(data);
    }
  };

  //conditional rendering for menu item, when there are no item left
  if (menuData.length === 0) {
    return (
      <>
        <Banner />
        <div className="no-data">
          <h1>No food left</h1>
          <button onClick={() => setMenuDatat(data)}>Refresh</button>
        </div>
      </>
    );
  }

  return (
    <>
      <Banner />
      <Menu
        data={menuData}
        handleDelete={handleDelete}
        handleClick={handleClick}
        category={category}
      />
    </>
  );
};

export default App;

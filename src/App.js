import React, { useState } from "react";
import Banner from "./Banner";
import Menu from "./Menu";
import data from "./data/data";

const App = () => {
  const fiterbtn = ["all", ...new Set(data.map((item) => item.category))];

  const [menuData, setMenuDatat] = useState(data);
  const [category, setCategory] = useState(fiterbtn);

  const handleDelete = (id) => {
    const deleteItem = menuData.filter((item) => item.id !== id);
    setMenuDatat(deleteItem);
  };

  const handleClick = (btnitem) => {
    const filteredMenu = data.filter((item) => item.category === btnitem);
    setMenuDatat(filteredMenu);

    if (btnitem === "all") {
      setMenuDatat(data);
    }
  };

  if (menuData.length === 0) {
    return (
      <>
        <Banner />
        <div className="no-data">
          <h1>No items left</h1>
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

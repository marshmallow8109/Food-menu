import { useState } from "react";

const Menu = ({ data, handleDelete, handleClick, category }) => {
  return (
    <section className="container">
      <div className="heading">
        <h1> Our menu</h1>
        <div className="underline"></div>
      </div>

      <div className="fiter-container">
        {category.map((item, index) => {
          return (
            <button key={index} onClick={() => handleClick(item)}>
              {item}
            </button>
          );
        })}
      </div>

      <div className="content">
        {data.map((item) => {
          const { id, img, title, price, description } = item;
          return (
            <article key={id} className="article-container">
              <div className="image-container">
                <img src={img} alt={title} className="photo" />
              </div>
              <div className="title=container">
                <div className="title">
                  <h3>{title}</h3>
                  <p>$ {price}</p>
                </div>
                <div className="underline-gray"></div>
                <div className="desc">
                  <p>{description}</p>
                </div>
                <div className="btn">
                  <button onClick={() => alert(`adding ${title} to cart`)}>
                    Order
                  </button>
                  <button onClick={() => handleDelete(id)}>Delete</button>
                </div>
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
};

export default Menu;

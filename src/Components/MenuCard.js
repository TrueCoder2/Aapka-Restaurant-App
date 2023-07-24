import React from 'react';
import "./style.css";

const MenuCard = ({ List }) => {
  return (
    <>
      <section className="main-card--cointainer">
        {List.map((item) => {
          const { id, name, category, description } = item;
          return (
            <div className="card-container" key={id}>
              <div className="card">
                <div className="card-body">
                  <span className="card-number card-circle subtitle">
                    {id}{" "}
                  </span>
                  <span className="card-author subtitle">{category} </span>
                  <h1 className="card-title"> {name} </h1>
                  <span className="card-description subtitle">
                    {description}
                  </span>
                  <br />
                  <div className="card-read"> Read </div>
                </div>
                <img src={item.image} alt="images" className="card-media" />
                <br />
                <br />
                <span className="card-tag subtitle"> order now </span>
              </div>
            </div>
          );
        })}
      </section>
    </>
  );
};

export default MenuCard;

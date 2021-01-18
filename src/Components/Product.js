import React from "react";
import shoeData from "./shoeData.json";
import { Link } from "react-router-dom";

export const Product = () => {
  console.log(shoeData);
  return (
    <div>
      <h2>Product</h2>
      <div className="productContainer">
        {Object.keys(shoeData).map((obj) => {
          return (
            <Link key={obj} to={`/Product/${obj}`} className="link">
              <img src={shoeData[obj].img} height={163} alt="java-one"/>
              <h4>{shoeData[obj].name}</h4>
            </Link>
          );
        })}
      </div>
    </div>
  );
};

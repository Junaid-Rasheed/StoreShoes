import React from 'react'
import { useParams } from 'react-router-dom'
import shoeData from "./shoeData.json";

export const ProductInfo = () => {
    const { id } = useParams();

  if(!shoeData[id]){
      return <h2>Page Not Found</h2>
  }
    return (
        <div>
            <h3>Product Info</h3>
            <div className="link">
              <img src={shoeData[id].img} height={300}  alt="Shoe Picture"/>
              <h4>{shoeData[id].name}</h4>
            </div>
        </div>
    )
}

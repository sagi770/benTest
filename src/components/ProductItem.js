import React from "react";

const ProductItem = props => {

    const prod= {id:props.id, name:props.name, price:props.price};
    
  return (
    <div className="card" onClick={(e) =>props.click(e, prod)} style={{ width: "300px" }}>
      <img
        className="card-img-top"
        src={`https://cdn.onecklace.com/products/${props.id}/product_${props.id}_1_225.jpeg`}
        alt="Card image"
      />
      <div className="card-body">
        <h4 className="card-title">{props.name}</h4>
        <p className="card-text">{props.price}</p>
      </div>
    </div>
  );
};
export default ProductItem;

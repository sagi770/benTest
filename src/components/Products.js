import React, { Component, Fragment } from "react";

import ProductItem from "./ProductItem";
import { Redirect } from "react-router-dom";
import url from "./json.json";


class Products extends Component {
  constructor(props) {
    super(props);

    this.state = { products: null, loading: true, product: null };
  }
  componentDidMount() {
    this.setState({ ...this.state, products: url, loading: false });
  }
  onClick = (event, product) => {
   
    this.setState({...this.state, product});
    
  };
  render() {

    if (this.state.loading){
      return <h1>Loading..</h1>;
    }else if(this.state.product){
      return <Redirect to={{pathname:"/product/"+ this.state.product.id, 
      state:{product:this.state.product}}} ></Redirect>;
    }
    return this.state.loading ? (
       <h1>Loading..</h1> 
    ) : (
      <Fragment>
        <h1 className="large text-primary">Products</h1>
        
        <div className="container">
          {this.state.products.map(product => {
            return (
              <ProductItem
                id={product.id}
                key={product.id}
                name={product.name}
                price={product.price}
                click={(e, product) => this.onClick(e, product)}
              />
            );
          })}
        </div>
      </Fragment>
    );
  }
}

export default Products;

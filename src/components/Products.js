import React, { Component, Fragment } from "react";

import axios from 'axios';
import ProductItem from "./ProductItem";
import {Redirect } from "react-router-dom";
class Products extends Component {

  constructor(props){
      super(props);

      this.state= {prudocts: null, loading :false};

  }  
  componentDidMount() {

    const url= "json.json";
    this.setState({...this.state, loading: true});
    axios.get(url).then( (products) =>{

        this.setState({...this.state, products: products , loading: false});

    });

  }
  onClick= ( event, name) =>{

    event.prevantDefault();
    
    return <Redirect to={`product/${name}`}></Redirect>;
  }
  render() {

    return this.props.loading ? (
     <h1>Loading..</h1>
    ) : (
      // <Fragment>
      //   <h1 className="large text-primary">Products</h1>
      //   <div className="posts">
      //     {this.state.products.map(product => (
      //       {/* <ProductItem
      //         key={product.id}
      //         name={product.name}
      //         price= {product.price}
      //         onClick={ (event) => this.onClick(event, product.name)}
      //       /> */
            
      //       }
      //     ))}
      //   </div>
       
      // </Fragment>
      <h1>dsa</h1>
    );
  }
}


export default Products;
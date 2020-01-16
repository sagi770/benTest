import React, { Component } from "react";
import Axios from "axios";
import { Redirect } from "react-router-dom";

class SingleItem extends Component {
  
  
  constructor(props) {
    super(props);
    
    this.state = { product: this.props.location.state.product, 
      material:"Gold" ,
      initials: null,
      redirect:false

    };
  }

  componentDidMount(){
    
    this.setState({ ...this.state, product: this.props.location.state.product });
    console.log(this.state);
  }

  onSubmit = (event)=>{

    event.preventDefault();
    const price= Number(this.state.product.price);
    const body= {
      product_id: this.state.product.id,
      name: this.state.product.name,
      price: price,
      material: this.state.material,
      initails: this.state.initials
    }
    Axios.post("http://localhost:5000/product",body).then(res =>{

       this.setState({...this.state, redirect: true})
       
    });

  }
  onChange=(event)=>{

    //event.preventDefault();
    this.setState({...this.state, [event.target.name]:event.target.value});
    
  }
  render() {
    if (this.state.redirect){
      return <Redirect to="/"></Redirect>;
    }
    let {id}= this.state.product;
    let goldPlated= this.state.material==="Gold";
    let imgSrc=`https://cdn.onecklace.com/products/${id}/${goldPlated?"gold_plated_":""}product_${id}_1_730.jpeg`;
    console.log(imgSrc);
    return (
      <div className="container-fluid p-2 ">
        <div className="row p-2 ">
          <div className="col-8  border">
            <img
              src={imgSrc}
              className="float-left"
              style={{ height: "300px" }}
            ></img>
          </div>
          <div className="col-4  border">
            <form onSubmit={this.onSubmit} className="was-validated">
              <h3>{this.state.product.name} </h3>
              
              <h3>$ {this.state.product.price} </h3>
              
              <p>Material</p>
              <div className="form-check-inline">
                <label className="form-check-label" htmlFor="radio1">
                  <input onChange={this.onChange}
                    type="radio"
                    className="form-check-input"
                    id="radio1"
                    name="material"
                    value="Gold"
                    defaultChecked={goldPlated}
                  />{" "}
                  Gold
                </label>
              </div>
              <div className="form-check-inline">
                <label className="form-check-label" htmlFor="radio2">
                  <input onChange={this.onChange}
                    type="radio"
                    className="form-check-input"
                    id="radio2"
                    name="material"
                    value="Silver"
                  />
                  Silver
                </label>
              </div>
              <br />
              <br />
              <div className="form-group">
                <label htmlFor="uname">Write Initials :</label>
                <input  onChange={this.onChange}
                  type="text"
                  className="form-control"
                  id="Initials"
                  placeholder="Write Initials"
                  name="initials"
                  required
                />
                <div className="valid-feedback">Valid.</div>
                <div className="invalid-feedback">
                  Please fill out this field.
                </div>
              </div>

              <button type="submit" className="btn btn-primary">
                Submit
              </button>
            </form>
          </div>
        </div>
      </div>
    );
  }
}

export default SingleItem;

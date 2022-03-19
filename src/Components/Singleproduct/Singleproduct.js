import React from 'react';
import './Singleproduct.css';

const Singleproduct = (props) => {
    console.log(props)
    return (
        <div className='col-md-4'>
           
          <div className="card p-3 border">
          <img className="w-50 m-auto" src={props.product.image} alt="" />
          <h1>{props.product.title}</h1>
          <div className=" d-flex justify-content-around">
          <button className="btn btn-success">Add to Cart</button>
          <button className="btn btn-danger">Delete</button>
          <button className="btn btn-info">Info</button>
          </div>
          </div>
            
        </div>
    );
};

export default Singleproduct;
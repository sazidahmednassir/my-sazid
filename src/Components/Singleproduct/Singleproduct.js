import React from 'react';
import ReactModal from '../ReactModal/ReactModal';
import './Singleproduct.css';

const Singleproduct = (props) => {
    console.log(props)
    return (
        <div className='col-md-4 mb-3'>
           
          <div className="card p-3 border">
          <img className="w-50 m-auto " src={props.product.image} alt="" />
          <h1>{props.product.title}</h1>
          <div className=" d-flex justify-content-around">
          <button onClick={props.setCart} className="btn btn-success">Add to Cart</button>
          <button className="btn btn-danger">Delete</button>
          <ReactModal product={props.product}></ReactModal>
          
     
          </div>
          </div>
            
        </div>
    );
};

export default Singleproduct;
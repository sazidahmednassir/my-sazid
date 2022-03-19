import React, { useEffect, useState } from 'react';
import Singleproduct from '../Singleproduct/Singleproduct';
import './Allproducts.css';

const Allproducts = (props) => {

    const [products, setProducts]=useState([])

    useEffect(()=>{
        fetch('https://fakestoreapi.com/products')
        .then(res => res.json())
        .then(data => setProducts(data))
    }, [products])
    // console.log(products)
    return (
        <div >
            <h1>All Products</h1>
       <div className="row  container m-5">
       {
                products.map((pd)=> (<Singleproduct key={pd.id} setCart={props.setCart}  product={pd}></Singleproduct>))
            }
       </div>
        </div>
    );
};

export default Allproducts;
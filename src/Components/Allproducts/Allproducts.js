import React, { useEffect, useState } from 'react';
import Singleproduct from '../Singleproduct/Singleproduct';
import './Allproducts.css';

const Allproducts = () => {

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
       <div className="row  container">
       {
                products.map((pd)=> (<Singleproduct key={pd.id} product={pd}></Singleproduct>))
            }
       </div>
        </div>
    );
};

export default Allproducts;
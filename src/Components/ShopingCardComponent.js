import { useEffect, useState } from "react";
import React from 'react'

export  function ShopingCardComponent() {
    const[products,setProducts]=useState([]);

    useEffect(()=>{
        fetch('https://fakestoreapi.com/products')
        .then(response=>response.json())
        .then(data=>{
            setProducts(data)
        },[])
    })
  return (<div className="d-flex flex-wrap">
{ products.map(product=>
          <div className="card w-25 p-2 m-2">
             <img src={product.image} className="card-img-top "style={{width:"200px",height:'250px'}} alt="..."/>
            <div className="card-header">
                <h5 className="card-title">{product.title}</h5>
                <div className='card-body'>
              <dl>
                  <dt>Price  :  {product.price}</dt>
                  <dt>Rating :  <span className='bi bi-star-fill'>  {product.rating.rate}</span> 
                      <span>  [{product.rating.count}]</span>
                  </dt>
               </dl>
              </div> 
              <div className="card-footer">
                <button className="btn btn-primary">Add to Cart</button>
              </div>
              
            </div>
        </div>
        )
        }
       </div>
            )
}

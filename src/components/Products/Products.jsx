import React from 'react';
import './Products.css';
import Plane from "../../assets/plane.png"
import {ProductsData} from "../../data/products";
import { useState } from 'react';

const Products = () => {

  const [MenuProducts, setMenuProducts]=useState(ProductsData);

  const fliter =(type)=>{
setMenuProducts(ProductsData.filter((product)=>product.type === type))
  }

  return (
    <>
    <div className="Container">
        <img src={Plane} alt="" className='plane'/>
        <h1>Our Future Products</h1>
        
        <div className='products'>
          <ul className="menu">
            <li onClick={()=>setMenuProducts(ProductsData)}>All</li>
            <li onClick={()=>fliter("skin care")}>Skin Care</li>
            <li onClick={()=>fliter("conditioner")}>Conditioners</li>
            <li onClick={()=>fliter("foundation")}>Foundations</li>
          </ul>

          <div className='list'>
                    {MenuProducts.map((product, i) => (
                        <div className="product" key={product.id || i}>
                            <div className="left-s">
                                <div className="name">
                                    <span>{product.name}</span>
                                    <span>{product.detail}</span>
                                </div>
                                <span>
                                    <span className='product-price'>{product.price}$</span>
                                    <div className='shop-Now'>Shop Now</div>
                                </span>
                            </div>
                            <img src={product.img} alt={product.name} className='img-p' />
                        </div>
                    ))}
                </div>

        </div>
    </div>

    </>
  )
}



export default Products
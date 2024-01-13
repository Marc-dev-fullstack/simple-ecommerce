import React from 'react'
import "./product.css";

const Product = ({productID,name,description,price, stockQuantity,imageUrl,category}) => {
  return (
    <section className='content-product'>
         <div className='product-images'>
      <img src= {imageUrl} style={{ height: "200px", width:"100%", objectFit:"cover" }} className='image-prod'/>
         </div>
         <div className="description-product">
         < h1>{name}</h1>
          <p>{description}</p>
          <h3>Le prix: <small>{price} $</small></h3>
          <h4> Stock dispo: {stockQuantity}</h4>
          <h3>Category: <small>{category} </small></h3>
         </div>
     </section>
 
  )
}

export default Product;

import React from 'react'
import ProductData from '../mocks/Api_mock';
import "./homepage.css";
import Product from '../composants/product/Product';


const HomePage = () => {
  return (
   <>
    <div className='product'>
  
      {ProductData.map((product)=> {
        {
          return <Product{...product}/>;
        }
      })}
    </div>
   </>
  );
};

export default HomePage;

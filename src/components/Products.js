import React, { useState } from 'react';
import {connect} from 'react-redux'

import Product from './Product';


const Products = ({products}) => {
  
  const allCategories = ['all', ...new Set(products.map((item) => item.category))];
  const [menuItems, setMenuItems] = useState(products);
  const [categories, setCategories] = useState(allCategories);

  const filterItems = (category) => {
    if (category === 'all') {
      setMenuItems(products);
      return;
    }
    const newItems = products.filter((item) => item.category === category);
    setMenuItems(newItems);
  };


  return <div className="products">
    <div className="product-container">
      <div className="product-header">
        <h1>Products</h1>
      </div>
      <div className="underline"></div>
      <div className="button-container">
        {categories.map((category,index) =>{
          return (
            <button
            type="button"
            className="filter-btn"
            key={index}
            onClick={() => filterItems(category)}
          >
            {category}
          </button>
          )
        })}
      </div>
        <Product menuItems={menuItems}/>
    </div>
  </div>;
};
const mapStateToProps = state => {
  return {
    products:state.shop.products
  }
}



export default connect(mapStateToProps)(Products);

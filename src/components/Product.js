import React from 'react';
import {addToCart,loadCurrentView} from "../actions"
import {connect} from 'react-redux'
import {Link} from 'react-router-dom'


const Product = ({menuItems,addToCart,loadCurrentView}) => {
  return      <div className="products-section">
  {menuItems.map((menuItem)=>(
    <div className="product-cart" key={menuItem.id}>
      <img src={menuItem.img} alt="" />
      <div className="card-info">
        <h4>{menuItem.title}</h4>
        <h4 className='price'>${menuItem.price}</h4>
      </div>
      <button className='add-to-cart' onClick={()=> addToCart(menuItem.id)}>ADD TO CART</button>
      <button onClick={()=>loadCurrentView(menuItem)}><Link to={`/product/${menuItem.title}`}>VIEW PRODUCT</Link></button>
    </div>
  ))}
</div>;
};
const mapDispatchToProps = dispatch =>{
    return {
      addToCart : (id)=>dispatch(addToCart(id)),
      loadCurrentView: (item)=>dispatch(loadCurrentView(item)),
    }
  }
export default connect(null, mapDispatchToProps)(Product);

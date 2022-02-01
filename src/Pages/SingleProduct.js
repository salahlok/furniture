import React from 'react';
import {connect} from 'react-redux';
import {addToCart} from "../actions"
import {Link} from 'react-router-dom'

const SingleProduct = ({currentItem,addToCart}) => {
  return <div className='single-product'>
        <div className="single-product-container">
            <div className="single-product-content">
                <div className="single-product-img">
                    <img src={currentItem.img} alt="" />
                </div>
                <div className="single-product-details">
                    <div className="single-product-header">
                        <h2>{currentItem.title}</h2>
                        <h4>$ {currentItem.price}</h4>
                    </div>
                    <div className="single-product-description">
                        <p>{currentItem.desc}</p>
                    </div>
                    <button onClick={()=> addToCart(currentItem.id)} className='add-to-cart'>ADD TO CART</button>
                    <button><Link to='/'>Return Home</Link></button>
                </div>

            </div>
        </div>
  </div>;
};


const mapStateToProps = (state)=>{
    return{
        currentItem:state.shop.currentItem,
    }
}

const mapDispatchToProps = dispatch =>{
    return {
      addToCart : (id)=>dispatch(addToCart(id)),      
    }
  }
export default connect(mapStateToProps,mapDispatchToProps)(SingleProduct);

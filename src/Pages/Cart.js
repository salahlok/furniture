import React,{useState,useEffect} from 'react';
import {connect} from 'react-redux'
import CartItem from '../components/CartItem'



const Cart = ({cart}) => {
  const [totalPrice, setTotalPrice] = useState(0);
  const [totalItems, setTotalItems] = useState(0);
  useEffect(() => {
    let items = 0;
    let price = 0;

    cart.forEach((item) => {
      items += item.qty;
      price += item.qty * item.price;
    });

    setTotalItems(items);
    setTotalPrice(price);
  }, [cart, totalPrice, totalItems, setTotalPrice, setTotalItems]);


  return <div className='cart'>
    <div className="cart-container">
      <div className="cart-details">
        {cart.map((item)=>(
          <CartItem key={item.id} item={item} />
        ))}
      </div>
      <div className="cart-total">
        <div className="cart-summery">
          <span>TOTAL: ({totalItems} items)</span> <br />
          <span className="total">Price : $ {totalPrice}</span>
        </div>
        <button>Procceed</button>
      </div>
    </div>
  </div>;
};



const mapStateToProps = state =>{
  return {
    cart: state.shop.cart
  }
}
export default connect(mapStateToProps)(Cart);

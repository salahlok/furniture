import React,{useState} from 'react';
import  {connect} from 'react-redux'
import {removeFromCart ,adjustQty} from '../actions'
import { AiFillDelete } from "react-icons/ai";
import { Link } from 'react-router-dom';


const CartItem = ({item ,adjustQty,removeFromCart}) => {
    const [input, setInput] = useState(item.qty);
    const onChangeHanlder = (e) => {
        setInput(e.target.value);
        adjustQty(item.id, e.target.value);
    }
  return <div className="cart-item">
      
            <div className="cart-item-content">
                <img src={item.img} alt="" />
                <div className="cart-item-container">
                    <div className="cart-item-details">
                        <h2>{item.title}</h2>
                        <h4 >$ {item.price}</h4>
                    </div>
                    <div className="cart-item-quantity">
                        <div className="item-qty">                            
                            <label htmlFor="qty">Quantity: </label>
                            <input min="1" type="number" id="qty" name="qty" value={input} onChange={onChangeHanlder}/>
                        </div>
                        <AiFillDelete className="remove-ui" onClick={()=> removeFromCart(item.id)}/>
                    </div>
                    <button><Link to="/products">Return</Link></button>
                    
                </div>
            </div>
            
      
  </div>;
};

const mapStateToProps = dispatch =>{
    return {
        
        removeFromCart: (id)=> dispatch(removeFromCart(id)),
        adjustQty: (id, value) => dispatch(adjustQty(id, value)),
    }
}
export default connect(null,mapStateToProps) (CartItem);

import React,{useState,useEffect} from 'react';
import {useSelector,useDispatch,connect} from 'react-redux';
import { FaBars } from "react-icons/fa";
import {Link} from 'react-router-dom'
import { AiOutlineShoppingCart,AiOutlineClose } from "react-icons/ai";
import {Open} from '../actions'

const Navbar = ({cart}) => {
    const [cartCount,setCartCount] = useState(0)
    const isOpen = useSelector(state=> state.isOpen)
    const dispatch = useDispatch()


    useEffect(() => {
        let count = 0;
        cart.forEach((item) => {count += item.qty})
        setCartCount(count)
    },[cart,cartCount])

  return <nav>
        <div className="nav">
            <div className="nav-header">
              <div className="logo"><Link to="/"><p><span>B</span>EYOND</p></Link></div>              
              <div className="toggle" onClick={()=> dispatch(Open())}><FaBars className='fas-icon' /></div>
            </div>
            <div className={'links '+(isOpen && 'active')}>
                <ul>
                    <li>
                        <Link to='/'>HOME</Link>
                    </li>
                    <li>
                        <Link to='/products'>PRODUCTS</Link>
                    </li>
                    <li>
                        <Link to='/contact'>CONTACT</Link>
                    </li>
                    <li>
                        <Link to='/about'>ABOUT</Link>
                    </li>
                </ul>
                <div className="nav-shopping"><Link to='/cart'><AiOutlineShoppingCart className='fas-icon' /></Link> <span>{cartCount}</span></div>

            </div>
        </div>
  </nav>;
};

const mapStateToProps = state =>{
    return {
        cart:state.shop.cart
    }
}
export default connect(mapStateToProps)(Navbar);

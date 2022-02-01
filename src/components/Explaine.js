import React,{useState} from 'react';
import expedia from '../assets/logos/expedia.png'
import avast from '../assets/logos/avast.png'
import buzzfeed from '../assets/logos/buzzfeed.png'
import dispatch from '../assets/logos/dispatch.png'
import booking from '../assets/logos/booking.png'
import accent from '../assets/accent_chaire.jpg'
import legs from '../assets/logs.PNG'
import lamp from '../assets/lamp.jpg'

const logos = [
    {
        id:1,
        img:expedia
    },
    {
        id:2,
        img:avast
    },
    {
        id:3,
        img:buzzfeed
    },
    {
        id:4,
        img:dispatch
    },
    {
        id:5,
        img:booking
    },
]



const images = [
    accent,
    legs,
    lamp,
    
]
const Explaine = () => {

  const [selected,setSelected]= useState(images[0])
 
  return <div className="explaine">
        <div className="explain-container">
            {logos.map((item)=>(
                <div key={item.id} className="explain-img" >
                    <img src={item.img} alt="" />
                </div>
            ))}
        </div>

        <div className="explaine-content">
            <div className="explaine-more">
                <div className="explaine-slider">
                    <div className="images-left">
                        {images.map((img,index)=>(
                            <img src={img} key={index} alt="" onClick={()=> setSelected(img)} />
                        ))}
                    </div>
                    <div className="image-right">
                        <img src={selected} alt="" />
                    </div>
                </div>
                <div className="explaine-details">
                    <h2>Comfortable Sofa</h2>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nostrum, repellat.</p>
                    <div className="explaine-list">
                        <div className="list-1">
                            <ul>
                                <li>Interior Strategy</li>
                                <li>Creative Design</li>
                                <li>Interior Architecture</li>
                            </ul>
                        </div>
                        <div className="list-1">
                            <ul>
                                <li>Update Design</li>
                                <li>Event Decorations</li>
                                <li>21 Years Experience</li>
                            </ul>
                        </div>
                    </div>
                    <button className="btn-active">LEARN MORE</button>
                </div>
            </div>
        </div>
    </div>;
};

export default Explaine;

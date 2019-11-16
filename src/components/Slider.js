import React,{Component} from 'react'
import img12 from '../assets/img/slider/12.png'
import img11 from '../assets/img/slider/11.png'




class Slider extends Component{
    render(){
        return (
            <div className="slider-area">
            <div className="slider-active-2">
                <div className="single-slider-4 bg-img furits-slider" ></div>
                    <div className="container">
                        <div className="fadeinup-animated furits-content text-center">
                            <img className="animated" src={img12} alt=""/>
                            <p className="animated">Health is not about the weight you lose. But about the life you gain!</p>
                            <a className="furits-slider-btn btn-hover animated" href="product-details.html">Shop Now</a>
                            <img className="animated slide-img-position" src={img11} alt=""/>
                        
                    </div>
                </div>
                </div>
                </div>
        )
    }
}

export default Slider
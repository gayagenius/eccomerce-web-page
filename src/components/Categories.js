import React,  { Component }  from 'react'
import img40 from '../assets/img/banner/40.jpg'
import img41 from '../assets/img/banner/41.jpg'
import img42 from '../assets/img/banner/42.jpg'
class Categories extends React.Component {
   render () {
       return (
           <div className="banner-area pt-90 pb-160 fix">
           <div className="container">
               <div className="row">
                   <div className="col-lg-4 col-md-4">
                       <div className="furits-banner-wrapper mb-30 wow fadeInLeft">
                           <img src={img40} alt=""/>
                           <div className="furits-banner-content">
                               <h4>Fruits</h4>
                               <p></p>
                               <a className="furits-banner-btn btn-hover" href="#">Shop Now</a>
                           </div>
                       </div>
                   </div>
                   <div className="col-lg-4 col-md-4">
                       <div className="furits-banner-wrapper mb-30 wow fadeInUp">
                           <img src={img41} alt=""/>
                           <div className="furits-banner-content">
                               <h4>Vegetables</h4>
                               <p></p>
                               <a className="furits-banner-btn btn-hover" href="#">Shop Now</a>
                           </div>
                       </div>
                   </div>
                   <div class="furits-banner-wrapper mb-30 wow fadeInRight">
                           <img src={img42}alt=""/>
                           <div class="furits-banner-content">
                               <h4>Pomegranate</h4>
                               <p>Lorem Ipsum is simply dummy text of the printing.</p>
                               <a class="furits-banner-btn btn-hover" href="#">Shop Now</a>
                           </div>
                  </div>
                  </div>
           </div>
       </div>
           )
   }
}
export default Categories


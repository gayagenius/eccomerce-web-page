import React,  { Component }  from 'react'
class Product extends React.Component {
   render () {
       return (
           <div className="product-fruit-wrapper mb-60">
                           <div className="product-fruit-img">
                               <img src={this.props.item.imageUrl} alt=""/>
                               <div className="product-furit-action">
                                   <a className="furit-animate-left" title="Add To Cart" onClick={()=>(this.props.item)} href="#">
                                       <i className="pe-7s-cart"></i>
                                   </a>
                                   <a class="furit-animate-right" title="Wishlist" href="#">
                                       <i class="pe-7s-like"></i>
                                   </a>
                               </div>
                           </div>
                           <div class="product-fruit-content text-center">
                               <h4><a href="product-details.html">{this.props.item.name}</a></h4>
                               <span>{this.props.item.price}</span>
                           </div>
                       </div>
       )
   }
}
export default Product
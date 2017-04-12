import React, { Component } from 'react';

 function ProductDetail(props){
     var {name,description,rating,price} = props.product;
     var stars = [];
     for(var i = 0; i< rating; i ++){
         stars.push(<span className="glyphicon glyphicon-star"></span>);
     }
     
     return (
            <div className="col-sm-4 col-lg-4 col-md-4">
              <div className="thumbnail">
                  <img src="http://placehold.it/320x150" alt=""/>
                  <div className="caption">
                       <h4><a href="#">{name}</a>
                      <h4 className="pull-right">{price}</h4>
                     
                      </h4>
                      <p>{description} 
                      
                      </p>
                  </div>
                  <div className="ratings">
                      <p className="pull-right">15 reviews</p>
                      <p>
                          {stars}
                      </p>
                  </div>
              </div>
          </div>

    );
}
export default ProductDetail;
import React, { Component } from 'react';

 function ProductDetail(props){
     var {name,description,rating,price,imgUrl} = props.product;
     var stars = [];
     for(var i = 0; i< rating; i ++){
         stars.push(<span className="glyphicon glyphicon-star"></span>);
     }
     
     return (
            <div className="col-sm-4 col-lg-4 col-md-4">
              <div className="thumbnail">
                  <img style={{width:"320px",height:"150px"}} src={imgUrl} alt=""/>
                  <div className="caption">
                       <h4><a href="#">{name}</a>
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
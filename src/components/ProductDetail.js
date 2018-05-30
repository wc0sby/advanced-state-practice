import React from "react";
import Review from '../components/Reviews'

function ProductDetail(props) {
  const {name,description,rating,imgUrl,reviews} = props.product;
  const stars = [];
  for (let i = 0; i < rating; i++) {
    stars.push(<span className="glyphicon glyphicon-star" />);
  }

  // const getReviews = props.map((item,i)=><Review review={item.reviews} key={i}/>)

  return (
    <div className="col-sm-4 col-lg-4 col-md-4">
      <div className="thumbnail">
        <img style={{width: "320px",height: "150px"}} src={imgUrl} alt="" />
        <div className="caption">
          <h4><a href="#">{name}</a>
          </h4>
          <p>{description} 
          </p>
        </div>
        <div className="ratings">
        {/* {getReviews} */}
          <Review review={reviews}/>
          <p>
            {stars}
          </p>
        </div>
      </div>
    </div>
  );
}
export default ProductDetail;

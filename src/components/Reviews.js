import React, { Component } from 'react'

export default class Review extends Component{

  state = {
    display: false
  }

  getReviewCount = this.props.review.length > 1 ? `${this.props.review.length} Reviews` : `${this.props.review.length} Review`
  listReviews = this.props.review.map((item,i)=><li key={i}>{item.description}</li>)
 
  handleShowReviews = () =>this.setState({display: this.state.display?false:true})

  render(){
    const stylesheet = {
      list:{
        display: this.state.display ? 'block' : 'none'
      }
    }
    return(
      <div>
        <ul style={stylesheet.list}>
          {this.listReviews}
        </ul>
        <div>
          <p className="pull-right" onClick={()=>this.handleShowReviews()}>{this.getReviewCount}</p>
        </div>
      </div>
    )
  }
}
import React from 'react'
import StarRatingComponent from 'react-star-rating-component'

class Reviews extends React.Component {

  // StarRatingComponents 'value' property refers to users rating
  // StarRatingComponents 'editing' set to false to keep static

  render() {
    return (
      <div>
        <StarRatingComponent name="rate1" editing={false} starCount={5} value={3}/>
        <h4>someUsername</h4>
        <p>Users written review of movie</p>
        <h4>*Users Top 5 Movies placed here as images</h4>
      </div>
    )
  }
}

export default Reviews

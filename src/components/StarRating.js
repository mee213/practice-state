import React, { Component } from "react";
import Star from './Star';

class StarRating extends Component {

  // Initialize a 'rating' state
  state = {
    rating: 0
  };

  // Write a function that returns 5 Star components
  //use loop and push method to add stars to an array based on the number value
  //then, render the stars to the dom

  showStars = () => {
    let stars = [];
    let maxRating = 5;

    for (let i=0; i<maxRating; i+=1) {
      stars.push(<Star 
        isSelected={this.state.rating > i}
        key={i}
        setRating={ () => this.handleSetRating(i+1) }
      />);
    };

    return stars;
  };

  // Write an event handler that updates the rating state based on the star a user clicks.
  // Pass the function to a Star component via props, and called when a user clicks on a star
  handleSetRating = (rating) => {
    this.setState({
      rating
    });
  };

  render() {
    return (
      <ul className="course--stars">
        {this.showStars()}
        
      </ul>
    );
  }
}

export default StarRating;
import React from 'react'

function Business(props) {
  return (
    <div className="business">
      <div className="image-container">
        <img src={props.imageSrc} alt={props.name} />
      </div>
      <h2>{props.name}</h2>
      <div className="business-information">
        <div className="business-address">
          <p>{props.address}</p>
          <p>{props.city}</p>
          <p>{props.state} {props.zipCode}</p>
        </div>
        <div className="business-reviews">
          <h3>{props.category}</h3>
          <h3 className="rating">{props.rating} stars</h3>
          <p>{props.reviewCount} reviews</p>
        </div>
      </div>
    </div>
  );
}


export default Business
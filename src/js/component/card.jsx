import React from "react";
import Button from "../component/button";
import PropTypes from 'prop-types';

const Card = (props) => {

return (<div className="card text-center g-3 mx-5" >
<img className="card-img-top" src="https://placehold.co/500x325" alt="Card image cap" />
<div className="card-body">
  <h5 className="card-title">{props.title}</h5>
  <p className="card-text">{props.description}</p>
  <Button buttonLabel="Find Out More" />
</div>
</div>);
}
Card.propTypes = {

	title: PropTypes.string,
	description: PropTypes.string,
	
};



export default Card;
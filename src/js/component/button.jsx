import React from "react";
import PropTypes from 'prop-types';
const Button = (props) => {

    return <button type="button" className="btn btn-primary"> {props.buttonLabel} </button>

   
};

Button.propType = {
    buttonLabel: PropTypes.string
}

export default Button;
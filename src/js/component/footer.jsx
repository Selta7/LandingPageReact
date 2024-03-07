import React from "react";
import PropTypes from 'prop-types';

const Footer = (props) => {

return (
    <footer class="page-footer font-small bg-dark text-white">
      <div class="footer-copyright text-center py-3"> {props.copyright}
        <a href="/">{props.website}</a>
      </div>
    </footer>
    
)
};
Footer.propTypes = {

	copyright: PropTypes.string,
	website: PropTypes.string,
	

};


export default Footer ;  
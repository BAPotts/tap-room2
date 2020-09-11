import React from "react";
import PropTypes from "prop-types";

function Keg(props){
  return(
    <React.Fragment>
      <h3>{props.name} - {props.brand}</h3>
      <h2>{props.price}</h2>
      <h2>{props.alcoholContent}</h2>
      <h2>{props.pintsLeft}</h2>
    </React.Fragment>
  );
}

Keg.propTypes = {
  name: PropTypes.string,
  brand: PropTypes.string,
  price: PropTypes.string,
  alcoholContent: Proptypes.string,
  pintsLeft: PropTypes.number
};
export default Keg;
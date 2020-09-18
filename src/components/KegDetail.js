import React from "react";
import PropTypes from "prop-types";

function KegDetail(props){
  const { keg } = props;

  function decrementPint(event) {
    event.preventDefault();
    props.onClickingDecrement({
      name: keg.name,
      brand: keg.brand,
      price: keg.price,
      alcoholContent: keg.alcoholContent,
      pintsLeft: keg.pintsLeft -1,
      id: keg.id
    });
  }

  return (
    <React.Fragment>
      <h1>Keg Details</h1>
      <h3>{keg.name} - {keg.brand}</h3>
      <p><em>{keg.price}</em></p>
      <p><em>{keg.alcoholContent}</em></p>
      <p><em>{keg.pintsLeft}</em></p>
      <button onClick={ decrementPint }>Take a Pint</button>
      <hr/>
    </React.Fragment>
  );
}

KegDetail.propTypes = {
  keg: PropTypes.object,
  onClickingDecriment: PropTypes.func
};


export default KegDetail;
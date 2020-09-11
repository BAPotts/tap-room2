import React from "react";
import { v4 } from "uuid";

function NewKegForm(props){

    function handleNewKegFormSubmission(event) {
      event.preventDefault();
      console.log(event.target.name.value);
      console.log(event.target.brand.value);
      console.log(event.target.price.value);
      console.log(event.target.alcoholContent.value);
      console.log(event.target.pintsLeft.value);

  return (
    <React.Fragment>
      <form onSubmit={handleNewKegFormSubmission}>
      <input
          type='text'
          name='name'
          placeholder='Beer Name' />
        <input
          type='text'
          name='brand'
          placeholder='Brand' />
        <input
          type="text"
          name='price'
          placeholder='Price' />
        <input
          type="text"
          name="alcoholContent"
          placeholder="Alcohol Content" />
        <input
          type="text"
          name="pintsLeft"
          placeholder="Total Pints" />
        <button type='submit'>Help!</button>
      </form>
    </React.Fragment>
  );
}

export default NewKegForm;
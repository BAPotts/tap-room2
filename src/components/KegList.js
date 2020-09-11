import React from "react"
import Keg from "./Keg";

function KegList(){
  return (
    <Keg 
      name="Red Eye Rye"
      brand="Founders"
      price="5"
      alcoholContent="7%"
      pintsLeft="124" />
  );
}

export default KegList;
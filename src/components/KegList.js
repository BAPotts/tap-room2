import React from "react"
import Keg from "./Keg";

const masterKegList = [
  {
    name: "Red Right Ale",
    brand: "Founders",
    price: "$5",
    alcoholContent: "7%",
    pintsLeft: "124"
  },
  {
    name: "BurgerTime Fancy Beer",
    brand: "Literate Giraffe Brewing",
    price: "$5",
    alcoholContent: "4.2%",
    pintsLeft: "124"
  },
  {
    name: "What About Raho",
    brand: "Golden Ibis",
    price: "$5",
    alcoholContent: "12%",
    pintsLeft: "124"
  }
];

function KegList(){
  return (
    <React.Fragment>
      {masterKegList.map((keg, index) =>
        <Keg name={keg.name}
          brand={keg.brand}
          price={keg.price}
          alcoholContent={keg.alcoholContent}
          pintsLeft={keg.pintsLeft}
          key={index} />
      )}
    </React.Fragment>
  );
}

export default KegList;
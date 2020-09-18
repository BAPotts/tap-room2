import kegListReducer from '../../reducers/keg-list-reducer';

describe ('kegListReducer', () => {

  const currentState = {
    1: { name: "Big Bear Brown Ale",
    brand: "Cedar Brewing",
    price: "$7",
    alcoholContent: "6%",
    pintsLeft: 99,
    id: 1},
    2: { name: 'All Day IPA',
        brand: "Bell's Brewery",
        price: "$6",
        alcoholContent: "7%",
        pintsLeft: 77,
        id: 2}
  }
  let action;
  const kegData = {
    name: "Big Bear Brown Ale",
    brand: "Cedar Brewing",
    price: "$7",
    alcoholContent: "6%",
    pintsLeft: 99,
    id: 1
  };

  test('Should return default state if there is no action type passed into the rducer', () => {
    expect(kegListReducer({}, { type: null})).toEqual({});
  });

  test('Should successfully add new keg data to masterKegList', () => {
    const { name, brand, price, alcoholContent, pintsLeft, id } = kegData;
    action = {
      type: 'ADD_KEG',
      name: name,
      brand: brand,
      price: price,
      alcoholContent: alcoholContent,
      pintsLeft: pintsLeft,
      id: id
    };

    expect(kegListReducer({}, action)).toEqual({
      [id] : {
        name: name,
        brand: brand,
        price: price,
        alcoholContent: alcoholContent,
        pintsLeft: pintsLeft,
        id: id
      }
    });
  });

  test('Should successfully delete a keg', () =>
  {
    action = {
      type:'DELETE_KEG',
      id: 1
    };
    expect(kegListReducer(currentState, action)).toEqual({
      2: { name: 'All Day IPA',
        brand: "Bell's Brewery",
        price: "$6",
        alcoholContent: "7%",
        pintsLeft: 77,
        id: 2}
    });
  })
})
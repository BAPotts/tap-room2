import kegListReducer from '../../reducers/keg-list-reducer';

describe ('kegListReducer', () => {

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
    const { names, location, issue, id } = kegData;
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
});
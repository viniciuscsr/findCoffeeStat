let { coffeeShops } = require('./data');

let userLocation = { lat: 32165464, long: 354654654 };

const x = 6;

const getCoffeeShops = () => {
  const calculateDistance = (latitude1, longitude1, latitude2, longitude2) => {
    return Math.floor(Math.random() * 100);
  };

  for (let i = 0; i < coffeeShops.length; i++) {
    // call calculateDistance
    let storeLat = coffeeShops[i].location.lat;
    let storeLong = coffeeShops[i].location.long;
    let distance = calculateDistance(
      storeLat,
      storeLong,
      userLocation.lat,
      userLocation.long
    );
    // add distance to object
    coffeeShops[i].distance = distance;
  }

  // sort array by nearest distance
  coffeeShops.sort((a, b) => {
    return b.sortingParameter - a.sortingParameter;
  });

  // slice array to be the size of X
  coffeeShops = coffeeShops.slice(0, x);

  return coffeeShops;
};

getCoffeeShops();

console.log(coffeeShops);

return;

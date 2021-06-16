const express = require('express');
const router = express.Router();
const { coffeeShops } = require('./data');

router.get('/', (req, res) => {
  res.render('index');
});

router.post('/', (req, res) => {
  const { screenSize } = req.body;
  const { sortingParameter } = req.body;

  let x;

  switch (screenSize) {
    case 'xs':
      x = 2;
      break;
    case 'sm':
      x = 4;
      break;
    case 'md':
      x = 6;
      break;
    case 'lg':
      x = 8;
  }

  const getCoffeeShops = (coffeeShopList, arraySize, sortingParameter) => {
    const calculateDistance = () => {
      // returning a random number for testing purposes
      return Math.floor(Math.random() * 100);
    };

    for (let i = 0; i < coffeeShopList.length; i++) {
      let distance = calculateDistance();
      // add distance to object
      coffeeShopList[i].distance = distance;
    }

    // sort array by nearest shop
    if (sortingParameter == 'nearest') {
      coffeeShopList.sort((a, b) => {
        return a.distance - b.distance;
      });
      // else sort by highest rating
    } else {
      coffeeShopList.sort((a, b) => {
        return b.rating - a.rating;
      });
    }

    // slice array to be the size of X
    coffeeShopList = coffeeShopList.slice(0, arraySize);

    return coffeeShopList;
  };

  const result = getCoffeeShops(coffeeShops, x, sortingParameter);

  res.render('results', { coffeeShops: result });
});

module.exports = router;

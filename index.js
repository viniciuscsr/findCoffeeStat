const express = require('express');
const app = express();
let { coffeeShops } = require('./data');

app.set('view engine', 'ejs');
app.use(express.json());

app.get('/', (req, res) => {
  res.render('index');
});

app.post('/', (req, res) => {
  console.log('here');

  const { screenSize } = req.body;
  const { sortingParameter } = req.body;

  const x = 6;

  const getCoffeeShops = () => {
    const calculateDistance = (
      latitude1,
      longitude1,
      latitude2,
      longitude2
    ) => {
      // returning a random number for testing purposes
      return Math.floor(Math.random() * 100);
    };

    for (let i = 0; i < coffeeShops.length; i++) {
      let distance = calculateDistance();
      // add distance to object
      coffeeShops[i].distance = distance;
    }

    // sort array by nearest distance
    let sortingParameter = 'rating';
    coffeeShops.sort((a, b) => {
      if (sortingParameter == 'distance') {
        return a.distance - b.distance;
      } else {
        return a.rating - b.rating;
      }
    });

    // slice array to be the size of X
    coffeeShops = coffeeShops.slice(0, x);

    return coffeeShops;
  };

  getCoffeeShops();

  console.log(coffeeShops);

  res.render('results', { coffeeShops });
});

app.get('/results', (req, res) => {
  res.render('results');
});

app.listen(5000, () => {
  console.log('SERVER IS RUNNING ON PORT 5000');
});

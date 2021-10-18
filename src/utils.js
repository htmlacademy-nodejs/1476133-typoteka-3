'use strict';

const {DATE_PERIOD} = require(`./constants`);

module.exports.getRandomInt = (min, max) => {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
};

module.exports.shuffle = (someArray) => {
  for (let i = someArray.length - 1; i > 0; i--) {
    const randomPosition = Math.floor(Math.random() * i);
    [someArray[i], someArray[randomPosition]] = [someArray[randomPosition], someArray[i]];
  }

  return someArray;
};

module.exports.getRandomDate = () => {
  const start = new Date();
  const end = new Date();
  end.setMonth(start.getMonth() - DATE_PERIOD);

  return new Date(start.getTime() + Math.random() * (end.getTime() - start.getTime()));
};

'use strict';

const {DATE_PERIOD} = require(`./constants`);

const getRandomInt = (min, max) => {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
};

const shuffle = (someArray) => {
  const array = [...someArray];
  for (let i = array.length - 1; i > 0; i--) {
    const randomPosition = Math.floor(Math.random() * i);
    [array[i], array[randomPosition]] = [array[randomPosition], array[i]];
  }

  return array;
};

const getRandomDate = () => {
  const start = new Date();
  const end = new Date();
  end.setMonth(start.getMonth() - DATE_PERIOD);

  return new Date(start.getTime() + Math.random() * (end.getTime() - start.getTime()));
};

module.exports = {getRandomInt, shuffle, getRandomDate}
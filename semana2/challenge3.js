function arrayOfMultiples (num, length) {

  const multiples = [];

  for (let index = 1; index <= length; index++) {

    const multiplo = num * index;

    multiples.push(multiplo);

  };

  return multiples;

};

module.exports = arrayOfMultiples;
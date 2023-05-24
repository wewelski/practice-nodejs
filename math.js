const add = (x,y) => x + y;
const PI = 3.1415926;
const square = x => x * x;

module.exports.add = add;
module.exports.PI = PI;
module.exports.square = square;

/* Lines 5 to 7 can also be:

module.exports.add = (x,y) => x + y;
module.exports.PI = 3.1415926;
module.exports.square = x => x * x;

or as an object:

const math = {
  add: add,
  PI: PI,
  square: square
}

*/
const listOfProducts = [
  {
    productName: "TV",
    quantity: 10,
    description: "television",
  },
  {
    productName: "AC",
    quantity: 5,
    description: "air conditioner",
  },
  {
    productName: "TV",
    quantity: 10,
    description: "television",
  },
  {
    productName: "AC",
    quantity: 5,
    description: "air conditioner",
  },
  {
    productName: "FAN",
    quantity: 10,
    description: "Ceiling Fan",
  },
];

function getUniqueProductCount(arr) {
  var obj = {};
  var i = 0;
  while (i < arr.length) {
    var str = arr[i].productName;
    if (obj[str] === undefined) {
      obj[str] = 1;
    } else {
      var p = obj[str];
      obj[str] = p + 1;
    }
    i++;
  }
  return obj;
}

var result = getUniqueProductCount(listOfProducts);
console.log(result);

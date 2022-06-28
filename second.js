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


  function getUniquePrducts(arr) {
    var obj = {};
    var i = 0;
    while (i < arr.length) {
      var str = arr[i].productName;
      if (obj[str] === undefined) {
        obj[str] = arr[i];
      } else {
        obj[str].quantity = obj[str].quantity + arr[i].quantity;
      }
      i++;
    }
    var totalArr = [];
    for (k in obj) {
      totalArr.push(obj[k]);
    }
    return totalArr;
  }
  
  var result2 = getUniquePrducts(listOfProducts);
  console.log(result2);
  
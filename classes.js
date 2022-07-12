
kiosk = {
  name:"oranges",
  price: 30.00,
    calculateFruitCost: function (fruitName, quantity) {
return `2 ${fruitName} for KES ${quantity * this.price}`; 
    }
}

console.log(kiosk.calculateFruitCost("Oranges", 6.00));


class KioskCalc{
    constructor(fruitsPriceList){ 
    this.fruitsPriceList = {
        "orange": 30,
        "mango": 15,
        "avocado": 40 
    },
    this.getTotalCost = function(fruit, quantity){
      return `2 ${fruit} for KES ${quantity * fruitsPriceList.orange}`
  }
}
}


var kioskCalc = new KioskCalc("orange", 2)
console.log(kioskCalc.getTotalCost())
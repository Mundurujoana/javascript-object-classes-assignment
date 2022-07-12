// JavaScript Assignment
// Assignment 1
kiosk = {
  name:"oranges",
  price: 30.00,
    calculateFruitCost: function (fruitName, quantity) {
return `2 ${fruitName} for KES ${quantity * this.price}`; 
    }
}
console.log(kiosk.calculateFruitCost("Oranges", 2));


// Assignment 2
class KioskCalc{
    constructor(fruitName,quantity,fruitsPriceList){ 
    this.fruitName =fruitName;
    this.quantity = quantity;
    this.fruitsPriceList = {
        "orange": 30,
        "mango": 15,
        "avocado": 40 
    },
    this.getTotalCost = function(){
      return `2 ${this.fruitName} for KES ${this.quantity * this.fruitsPriceList.orange}`
  }
}
}


var kioskCalc = new KioskCalc("orange", 2)
console.log(kioskCalc.getTotalCost())
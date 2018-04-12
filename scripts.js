function Phone(brand, price, color) {
	this.brand = brand;
	this.price = price;
	this.color = color;
}

Phone.prototype.printInfo = function() {
	console.log("The phone brand is " + this.brand + ", color is " + this.color + " and price is " + this.price + ".");
}

var IPhone6S = new Phone("Apple", 2250, "silver");
var Samsung = new Phone("Samsung Galaxy S6", 100, "blue");
var OnePlus = new Phone("OnePlus One", 50, "orange");

IPhone6S.printInfo();
Samsung.printInfo();
OnePlus.printInfo();

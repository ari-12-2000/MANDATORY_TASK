let quantityA = 0,
  quantityB = 0,
  quantityC = 0;
let reply;

//User input
do {
  const name = prompt("Enter the product name:");
  if (name == "A") quantityA += prompt("Enter the product quantity:");
  if (name == "B") quantityB += prompt("Enter the product quantity:");
  if (name == "C") quantityC += prompt("Enter the product quantity:");
  reply = prompt("Will you buy more products");
} while (reply.toLowerCase() === "yes");

const ans = prompt("Do you want the products to be wrapped as a gift?");

//Calculating total price before discount
let totalPrice = quantityA * 20 + quantityB * 40 + quantityC * 50;

//Calculating total quantity
let totalQuant = quantityA + quantityB + quantityC;

//These prices will get calculated only if customer is eligible for discount
let totalPrice1 = Number.MAX_VALUE,
  totalPrice2 = Number.MAX_VALUE,
  totalPrice3 = Number.MAX_VALUE,
  totalPrice4 = Number.MAX_VALUE;

//* TASK - 1

//"flat_10_discount": If cart total exceeds $200, apply a flat $10 discount on the cart total.
if (totalPrice > 200) totalPrice1 = totalPrice - totalPrice * 0.1;

//"bulk_10_discount": If total quantity exceeds 20 units, apply a 10% discount on the cart total.
if (totalQuant > 20) totalPrice2 = totalPrice - totalPrice * 0.1;

//"bulk_5_discount": If the quantity of any single product exceeds 10 units, apply a 5% discount on that item's total price.
let discQuantityA = 0,
  discQuantityB = 0,
  discQuantityC = 0;
if (quantityA > 10) {
  discQuantityA = quantityA * 20 * 0.05;
}
if (quantityB > 10) {
  discQuantityB = quantityB * 40 * 0.05;
}
if (quantityC > 10) {
  discQuantityC = quantityC * 50 * 0.05;
}

totalPrice3 = totalPrice - discQuantityA + discQuantityB + discQuantityC;

//"tiered_50_discount": If total quantity exceeds 30 units & any single product quantity greater than 15, then apply a 50% discount on products which are above  15 quantity. The first 15 quantities have the original price and units above 15 will get a 50% discount.

discQuantityA = discQuantityB = discQuantityC = 0;
if (totalQuant > 30 && (quantityA > 15 || quantityB > 15 || quantityC > 15)) {
  if (quantityA > 15) discQuantityA = quantityA * 20 * 0.5;
  if (quantityA > 15) discQuantityB = quantityB * 40 * 0.5;
  if (quantityA > 15) discQuantityC = quantityC * 50 * 0.5;
}
totalPrice4 = totalPrice - discQuantityA + discQuantityB + discQuantityC;

//Calculating the most beneficial amount after giving discount
let amount = Math.min(
  totalPrice,
  totalPrice1,
  totalPrice2,
  totalPrice3,
  totalPrice4
);

//Assigning the name of applied discount to the discount variable
let discount;
switch (amount) {
  case totalPrice:
    discount = "None";
    break;
  case totalPrice1:
    discount = "flat_10_discount";
    break;
  case totalPrice2:
    discount = "bulk_10_discount";
    break;
  case totalPrice3:
    discount = "bulk_5_discount";
    break;
  case totalPrice4:
    discount = "tiered_50_discount";
    break;
}

//Calculating the gift wrap fee
let giftWrap = 0;

if (ans.toLowerCase() === "Yes") giftWrap = totalQuant *= 1;

//Calculating the shipping fee
let shipping = 1,
  extra = 0;
if (totalQuant > 10) {
  shipping = totalQuant / 10;
  if (totalQuant % 10 > 0) extra++;
}
shipping = (shipping + extra) * 5;

//Calculating the total fee
let totalFee = giftWrap + shipping + amount;

//OUTPUT
if (quantityA > 0) {
  console.log(`Product:A Quantity of A=${quantityA} units`);
}

if (quantityB > 0) {
  console.log(`Product:B Quantity of B=${quantityB} units`);
}

if (quantityC > 0) {
  console.log(`Product:C Quantity of C=${quantityC} units`);
}

console.log(
  `Subtotal=${totalPrice}, discount name:${discount} , amount after discount:${amount}, shipping fee:${shipping}, gift wrap fee:${giftWrap}, Total:${totalFee}`
);
//Subtotal refers to total amount before discount
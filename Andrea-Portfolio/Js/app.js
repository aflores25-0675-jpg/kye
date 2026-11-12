// const: a value that never changes
const SHOP = "KapeTayo";
let DELIVERY_FEE = 49;
// let: a value that can change
let cups = 4;
cups = cups + 2;

DELIVERY_FEE = DELIVERY_FEE + 51;
// var: the old way (function-scoped), avoid
var promo = "BREWDAY";
console.log(SHOP, "order:", cups, "cups");
console.log("Delivery fee:", DELIVERY_FEE);
console.log("Promo code:", promo);

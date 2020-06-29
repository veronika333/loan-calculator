export function calculateTotal(amount, term){
    console.log('hello from the helper');

    //total interest based on the amount
    //0-1000=>25% of the amount
    //1001-5000=>pay 20%
//5001-10000=>15%
//+10000=10%
    //total interest based on the time
//     3 months-pay 5%, 
//     6 months - pay 10%,
// 12 months - pay 15%;
// 24 months - pay 20%;
let totalAmount;
if (amount <= 1000) {
    totalAmount = amount * .25;
} else if (amount > 1000 && amount <= 5000) {
    totalAmount = amount * .20;
} else if (
    amount > 5000 && amount <= 1000
) {
    totalAmount = amount * .15;
} else {
    totalAmount = amount * 0.10;
}
// return totalAmount;
let totalTerm;

switch(term) {
    case 3: totalTerm = amount * .05;
    break;
    case 6: totalTerm = amount * .10;
    break;
    case 12: totalTerm = amount * .15;
    break;
    case 24: totalTerm = amount * .20;
    break;
    default: break;
}
return amount + totalTerm + totalAmount;
}
// Function for calculating simple interest
function simpleInterest(principal, rate, year){
    let simpleAmount = parseFloat(principal) + (parseFloat(principal) * parseFloat(rate)/100 * parseFloat(year));
    return simpleAmount;
}

function main(){
    const prompt = require("prompt-sync")({ sigint: true });
    
    let myPrincipal = prompt("Enter your principal amount: ");
    let myRate = prompt("Enter your interest rate: ");
    let myYear = prompt("Enter your total year period: ");
    
    let totalAmount = simpleInterest(myPrincipal, myRate, myYear);
    let totalInterest = totalAmount - myPrincipal

    console.log("Total Amount:", totalAmount);
    console.log("Total Interest:", totalInterest);
}
main();
// Function for calculating compound interest
function compoundInterest(principal, rate, year){
    let compoundAmount = parseFloat(principal);
    for(let i = 0; i < year; i++){
        compoundAmount = compoundAmount + (compoundAmount * (parseFloat(rate)/100));
    }
    return compoundAmount;
}

function main(){
    const prompt = require("prompt-sync")({ sigint: true });
    let myPrincipal = prompt("Enter your principal amount: ");
    let myRate = prompt("Enter your interest rate: ");
    let myYear = prompt("Enter your total year period: ");
    let totalAmount = compoundInterest(myPrincipal, myRate, myYear);
    totalInterest = totalAmount - myPrincipal

    console.log("Total Amount:", totalAmount);
    console.log("Total Interest:", totalInterest);
}
main();
function simpleInterest(simplePrincipal, simpleRate, simpleYear){
    let simpleAmount = parseFloat(simplePrincipal) + (parseFloat(simplePrincipal) * parseFloat(simpleRate)/100 * parseFloat(simpleYear));
    return simpleAmount;
}

function compoundInterest(compoundPrincipal, compoundRate, compoundYear){
    let compoundAmount = parseFloat(compoundPrincipal);
    for(let i = 0; i < compoundYear; i++){
        compoundAmount = compoundAmount + (compoundAmount * (parseFloat(compoundRate)/100));
    }
    return compoundAmount;
}

function main(){
    const prompt = require("prompt-sync")({ sigint: true });
    
    console.log("For Simple Interest: Press 1");
    console.log("For Compound Interest: Press 2");
    
    let myOption = parseInt(prompt("Your Option: "));

    switch(myOption){
        case 1:
            console.log("**********SIMPLE INTEREST*****************");
            let mySimplePrincipal = prompt("Enter your principal amount: ");
            let mySimpleRate = prompt("Enter your interest rate: ");
            let mySimpleYear = prompt("Enter how many year: ");
            let simpleTotalAmount = simpleInterest(mySimplePrincipal, mySimpleRate, mySimpleYear);
            let simpleTotalInterest = simpleTotalAmount - mySimplePrincipal;
            console.log("Total Amount:", simpleTotalAmount);
            console.log("Total Interest:", simpleTotalInterest);
            break;

        case 2:
            console.log("**********COMPOUND INTEREST*****************");
            let myCompoundPrincipal = prompt("Enter your principal amount: ");
            let myCompoundRate = prompt("Enter your interest rate: ");
            let myCompoundYear = prompt("Enter how many year: ");
            let compoundTotalAmount = compoundInterest(myCompoundPrincipal, myCompoundRate, myCompoundYear);
            let compoundTotalInterest = compoundTotalAmount - myCompoundPrincipal;
            console.log("Total Amount:", compoundTotalAmount);
            console.log("Total Interest:", compoundTotalInterest);
            break;
        default:
             console.log("Sorry! You have chosen a wrong option. Please try again.");
    }
}

main();
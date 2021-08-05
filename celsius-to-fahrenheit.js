function toFahrenheit(celsius){
    let fahrenheit = (celsius * 1.8) + 32;
    return fahrenheit;
}

function main(){
    const prompt = require("prompt-sync")({ sigint: true });
    let temperature = prompt("Please enter the temperature: ");

    let tempInFahrenheit = toFahrenheit(temperature);

    console.log("The temperature in fahrenheit: ", tempInFahrenheit);
}

main();
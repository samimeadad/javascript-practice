function toCelsius(fahrenheit){
    let celsius = (fahrenheit - 32) * 0.5555555555555556;
    return celsius;
}

function main(){
    //const prompt = require("prompt-sync")({ sigint: true });
    //let temperature = prompt("Enter the temperature in fahrenheit: ");

    let tempInCelsius = toCelsius(32);
    console.log("The temperature in Celsius: ", tempInCelsius);
	//console.log("The temperature in celsius: ", temperature);

}

main();

//Grade calculation with return value from the function
// function gradeCalculate(marks){
//     if(marks >= 97){
//         return 'A+';
//     }
//     else if(marks >= 90 && marks < 97){
//         return 'A';
//     }
//     else if(marks >= 80 && marks < 90){
//         return 'B+';
//     }
//     else if(marks >= 70 && marks < 80){
//         return 'B';
//     }
//     else if(marks >= 60 && marks < 70){
//         return 'C+';
//     }
//     else if(marks >= 50 && marks < 60){
//         return 'C';
//     }
//     else if(marks >= 40 && marks < 50){
//         return 'D+';
//     }
//     else if(marks >= 30 && marks < 40){
//         return 'D';
//     }
//     else{
//         return 'F';
//     }
// }

// function main(){
//     const prompt = require("prompt-sync")({ sigint: true });
//     let myMarks = parseFloat(prompt("Please enter your total marks: "));
//     let myGrade = gradeCalculate(myMarks);
    
//     if(myGrade == 'A+'){
//         console.log("Congrats! You have got an A+. Your total marks is", myMarks);
//     }
//     else if(myGrade == 'A'){
//         console.log("Great! You have got an A. Your total marks is", myMarks);
//     }
//     else if(myGrade == 'B+'){
//         console.log("Very Good! You have got a B+. Your total marks is", myMarks);
//     }
//     else if(myGrade == 'B'){
//         console.log("Good! You have got a B. Your total marks is", myMarks);
//     }
//     else if(myGrade == 'C+'){
//         console.log("You have got a C+. Your total marks is", myMarks);
//     }
//     else if(myGrade == 'C'){
//         console.log("You have got a C. Your total marks is", myMarks);
//     }
//     else if(myGrade == 'D+'){
//         console.log("You have got a D+. Your total marks is", myMarks);
//     }
//     else if(myGrade == 'D'){
//         console.log("You have got a D. Your total marks is", myMarks);
//     }
//     else {
//         console.log("Sorry! You have failed. Your total marks is", myMarks, "! Please try again.");
//     }
// }

// main()



//Grade calculation without return value from the function

function gradeCalculate(marks){
    if(marks >= 97){
        console.log("Congrats! You have got an A+. Your total marks is", marks);
    }
    else if(marks >= 90 && marks < 97){
        console.log("Great! You have got an A. Your total marks is", marks);
    }
    else if(marks >= 80 && marks < 90){
        console.log("Very Good! You have got a B+. Your total marks is", marks);
    }
    else if(marks >= 70 && marks < 80){
        console.log("Good! You have got a B. Your total marks is", marks);
    }
    else if(marks >= 60 && marks < 70){
        console.log("You have got a C+. Your total marks is", marks);
    }
    else if(marks >= 50 && marks < 60){
        console.log("You have got a C. Your total marks is", marks);
    }
    else if(marks >= 40 && marks < 50){
        console.log("You have got a D+. Your total marks is", marks);
    }
    else if(marks >= 30 && marks < 40){
        console.log("You have got a D. Your total marks is", marks);
    }
    else{
        console.log("Sorry! You have failed. Your total marks is", myMarks, "! Please try again.");
    }
}

function main(){
    const prompt = require("prompt-sync")({ sigint: true });
    let myMarks = parseFloat(prompt("Please enter your total marks: "));
    gradeCalculate(myMarks);
}

main();
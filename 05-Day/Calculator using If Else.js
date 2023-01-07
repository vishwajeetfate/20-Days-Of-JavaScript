const operator = prompt('Enter operator to perform the calculation ( either +, -, * or / ): ');

// accept the number from the user through prompt box
const number1 = parseFloat(prompt ('Enter the first number for calculator code: '));
const number2 = parseFloat(prompt ('Enter the second number for calculator code: '));

let result; // declaration of the variable.

// use if, elseif and else keyword to define the calculator condition in JavaScript.
if (operator == '+') { // use + (addition) operator to add two numbers
    result = number1 + number2;
}
else if (operator == '-') { // use -  (subtraction) operator to subtract two numbers
    result = number1 - number2;
}
else if (operator == '*') { // use * (multiplication) operator to multiply two numbers
    result = number1 * number2;
}
else {
    result = number1 / number2; // use / (division) operator to divide two numbers
}

document.write("number1 :"+number1+"<br>")
document.write("number2 :"+number2 +"<br>")
document.write(  result+"<br>")


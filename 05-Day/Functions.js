
function addition(a, b) {
    return a + b;
}

// take input from the user
let num1 = parseFloat(prompt("Enter first number for function code: "));
let num2 = parseFloat(prompt("Enter second number for function code: "));

// calling function
let Answer = addition(num1,num2);

// display the result
document.write("number1 :"+num1+"<br>")
document.write("number2 :"+num2 +"<br>")
document.write("The sum is " + Answer);
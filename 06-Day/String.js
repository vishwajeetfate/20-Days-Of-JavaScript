
const text1 = 'vishwajeet';
const text2 = 'Kishor';
const text3 = '      fate    ';

// concatenating two strings
const result1 = text1.concat(' ', text2);
document.write(result1+"<br>"); 

// converting the text to uppercase
const result2 = text1.toUpperCase();
document.write(result2+"<br>"); 

// removing whitespace from the string
const result3 = text3.trim();
document.write(result3+"<br>"); 

// converting the string to an array
const result4 = text1.split();
document.write(result4+"<br>"); 

// slicing the string
const result5= text1.slice(1, 3);
document.write(result5+"<br>"); 
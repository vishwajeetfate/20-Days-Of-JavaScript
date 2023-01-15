let a = document.getElementById("a");
let b = document.getElementById("b");
let c = document.getElementById("c");

// get atrribute method
console.log(a.getAttribute("class")); // "hello"
console.log(b.getAttribute("class")); // "world"
console.log(c.getAttribute("class")); // "and"

// set attribute method
a.setAttribute("class", "greetings");
console.log(a.getAttribute("class")); // "greetings"

// remove attribute 
a.removeAttribute("class");
console.log(a.hasAttribute("class")); // false

a.dataset.name = "shivam";
console.log(a.dataset.name); // "shivam"
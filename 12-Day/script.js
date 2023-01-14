// accessing innerHTML and outerHTML 
console.log(sp.innerHTML);
console.log(para.innerHTML);
console.log(sp.outerHTML);
console.log(para.outerHTML);

// manipulating with innerHTML
document.getElementById("sp").innerHTML = "Hello, this is span and now the inner text has been changed";
document.getElementById("para").innerHTML = "Hello Everyone! something is missing";
document.getElementById("para1").innerHTML = "This was a lorem ipsum text";

// manipulating with outerHTML
document.getElementById("sp").outerHTML = "<b>Hello, this is span and now the inner text has been changed</b>"
document.getElementById("para").outerHTML = "<h2>Hello Everyone! something is missing</h2>";

//DOM is used to access elemetns inside a HTML page

// Accessing children of element

// changing color of text
function colorChange(){
    let color = document.getElementById("body");

    color.style.backgroundColor = "Aqua";
}
colorChange();

// changing paragraph element
function paraChange(){
    let paragraph = document.getElementById("para");

    paragraph.innerHTML = "This is not a website";
}
paraChange();

function changeHeading() {
    // Get the element with the id "myHeading"
    var heading = document.getElementById("heading");

    // Change the text of the element
    heading.innerHTML = "Heading changed!";
}
changeHeading();

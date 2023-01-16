let headingContainer = document.getElementById("heading-container");
let h1 = document.createElement("H1");
let headingText = document.createTextNode(generateRandomHeading());
let a = document.createElement("a");
a.href = "#";
a.appendChild(headingText);
h1.appendChild(a);
headingContainer.appendChild(h1);

function generateRandomHeading() {
  let adjectives = ["Exciting", "Amazing", "Incredible", "Fantastic", "Stunning"];
  let nouns = ["Adventure", "Journey", "Experience", "Story", "Tale"];
  let randomAdjective = adjectives[Math.floor(Math.random() * adjectives.length)];
  let randomNoun = nouns[Math.floor(Math.random() * nouns.length)];
  return `${randomAdjective} ${randomNoun}`;
}
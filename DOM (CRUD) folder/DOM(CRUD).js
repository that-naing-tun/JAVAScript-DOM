// DOCUMENT OBJECT MODEL (CRUD)

//C = create

const h1Elements = document.createElement("h1");
const textnode = document.createTextNode("Well come to mandalay");
h1Elements.appendChild(textnode);
const bodyelements = document.getElementsByTagName("body")[0];
bodyelements.appendChild(h1Elements)

//R = read 

const readh1Elements = document.getElementsByTagName("h1")[0];
console.log("This is h1 elements before update",readh1Elements.textContent);

//U =update
readh1Elements.textContent = "Well come to Myanmar";
console.log("This is h1 elements after  update ", readh1Elements.textContent);

//D = delete
//readh1Elements.remove();
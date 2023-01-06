//USEFUL DOM METHOD AND PROPERTIES

const bodyelements = document.getElementsByTagName("body")[0]; //return HTML Collection
// console.log("This is body Elements ", bodyelements);

// const classname = document.getElementsByClassName("parent")[0];//return HTML Collection
// classname.innerHTML = "";
// console.log("This is class name", classname);

// const idname = document.getElementById("My id"); // return id line
// console.log("This is id name ", idname);

const parentdiv = document.createElement("div");
parentdiv.classList.add("parent");
const childddivone = document.createElement("div");
childddivone.classList.add("Child");
childddivone.append("Child one");
// const childddivonetext = document.createTextNode("Child One");
// childddivone.appendChild(childddivonetext);
const childdivtwo = document.createElement("div"); //The same with upper two lines
childdivtwo.classList.add("Child");
childdivtwo.append("Child two");
// const childdivtwotext = document.createTextNode("Child two");
// childdivtwo.appendChild(childdivtwotext);

parentdiv.append(childddivone,childdivtwo); //The same with upper two lines
// parentdiv.appendChild(childddivone);
// parentdiv.appendChild(childdivtwo);

bodyelements.appendChild(parentdiv); //The same with upper two lines


const styleTest = document.getElementsByClassName("styletest")[0];
console.log("This is css style test width is  ", getComputedStyle(styleTest).width);
console.log("This is css style test height is  ", getComputedStyle(styleTest).height);
console.log("This is css style test backgrounColor is ", getComputedStyle(styleTest).backgroundColor);


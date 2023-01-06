const inputtext = document.getElementsByClassName("form-control")[0]; //return HTMl collection

const shoppinglistTag = document.getElementsByClassName("shoppinglistcontainer")[0];//return HTMl collection 

let productiId = 1;
const inputchange = (event) =>{
    const inputValue = event.target.value;
    const productcontainer = document.createElement("div"); 
    productcontainer.classList.add("productcontainer");
    const parentdiv = document.createElement("div");
    parentdiv.classList.add("productName");
    parentdiv.addEventListener("click", () => {
        const clasExists = parentdiv.classList.contains("purchased");
        if(clasExists){
            parentdiv.classList.remove("purchased");
        }else {
            parentdiv.classList.add("purchased");
        }
    });
    const spantag = document.createElement("span");
    const trashicon = document.createElement("i");
    trashicon.classList.add("fa-solid","fa-trash");
    trashicon.addEventListener("click", () =>{
        
     });
    spantag.id = productiId;
    const product = productiId.toString() + ". " + inputValue;
    spantag.append(product);
    parentdiv.append(spantag);
    //parentdiv.append(trashicon);
    productcontainer.append(parentdiv, trashicon);
    shoppinglistTag.append(productcontainer);
    inputtext.value = "";
    productiId += 1;

}

inputtext.addEventListener("change",inputchange);
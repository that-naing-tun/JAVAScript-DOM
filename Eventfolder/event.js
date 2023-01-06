const mybuttom = document.getElementById("mybuttom");

const image = document.getElementsByClassName("myclass")[0];

const originalimage = image.src;

const imagearray = [
                    "https://images.unsplash.com/photo-1672009087725-cda86eba1689?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxOHx8fGVufDB8fHx8&auto=format&fit=crop&w=600&q=60",
                    "https://plus.unsplash.com/premium_photo-1667682998399-3eee9dc2000d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxOXx8fGVufDB8fHx8&auto=format&fit=crop&w=600&q=60",
                    "https://images.unsplash.com/photo-1672053057415-6cefca05bdaf?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwyM3x8fGVufDB8fHx8&auto=format&fit=crop&w=600&q=60",
                    "https://images.unsplash.com/photo-1661961110372-8a7682543120?ixlib=rb-4.0.3&ixid=MnwxMjA3fDF8MHxlZGl0b3JpYWwtZmVlZHwxfHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=600&q=60",
                    "https://images.unsplash.com/photo-1671877308526-ac799c88db13?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxNHx8fGVufDB8fHx8&auto=format&fit=crop&w=600&q=60"
                   ];

let counter = 0;                   
const myfunction = () => {
    if(counter === 5) {
        image.src = originalimage;
        counter =0;
        return;
    }
   image.src = imagearray[counter];
   counter += 1;
   console.log("This is counter number",counter);
}

mybuttom.addEventListener("click",myfunction);
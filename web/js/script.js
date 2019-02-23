function changeColor(color) {
     console.log(color);
     let body = document.getElementsByTagName("body");
     //body[0].style="background-color: "+color;
 }

 function changeColorOnClick() {
    let select = document.getElementById("color");
    let body = document.getElementsByTagName("body");
    body[0].style="background-color: " + select.value;
 }
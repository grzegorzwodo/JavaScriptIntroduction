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


function validateNameOrSurname(obj) {
    if(obj.value.length >= 2) {
        obj.classList.remove("error");
    }else {
        obj.classList.add("error");
    }
}

function validateStreet(obj) {
    if(obj.value.length >= 1) {
        obj.classList.remove("error");
    }else {
        obj.classList.add("error");
    }
}

function validatePostalCode(obj) {
    var rePostalCode = /(^[0-9]{2}\-[0-9]{3}$)/i;
    if(rePostalCode.test(obj.value)) {
        console.log("remove error");
        obj.classList.remove("error");
    }else {
        console.log("add error");
        obj.classList.add("error");
    }
}

function validateEmailAddress(obj) {
    console.log(obj.value);
    if(validateEmail(obj.value)) {
        console.log("remove error");
        obj.classList.remove("error");
    }else {
        console.log("add error");
        obj.classList.add("error");
    }
}
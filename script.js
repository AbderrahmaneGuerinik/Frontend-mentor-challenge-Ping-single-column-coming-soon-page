let submitButton = document.getElementById("submit");

let input = document.getElementById("input");
let ScreenSize = window.innerWidth / 16;
let emptyMobile = document.getElementById("empty-mobile");
let invalidMobile = document.getElementById("invalid-mobile");
let emptyDesk = document.getElementById("empty-desktop");
let form = document.getElementById("form");
let invalidDesk = document.getElementById("invalid-desktop")


let regExp = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
 

submitButton.onclick = function(e) {
    let email = document.getElementById("input").value;
    if( ScreenSize < 48 && email === "") {
        e.preventDefault();
        input.style.marginBottom = ".3rem";
        invalidMobile.style.display = "none";  
        emptyMobile.style.display = "block";
        input.style.border = "1px solid red";  
    }   else {
        if(ScreenSize < 48 && !(regExp.test(email))) {
            e.preventDefault();
            input.style.marginBottom = ".3rem";
            invalidMobile.style.display = "block";  
            emptyMobile.style.display = "none"; 
            input.style.border = "1px solid red"; 
        } else {
            if(ScreenSize >= 48 && email === "" ) {
                e.preventDefault();
                invalidDesk.style.display = "none";
                form.style.marginBottom = ".5rem";
                emptyDesk.style.display = "block";
                emptyDesk.style.marginBottom = "7rem";
                input.style.border = "1px solid red"; 
            } else {
                if(ScreenSize >= 48 && !(regExp.test(email))) {
                    e.preventDefault();
                    emptyDesk.style.display = "none";
                    form.style.marginBottom = ".5rem";
                    invalidDesk.style.display = "block";
                    invalidDesk.style.marginBottom = "7rem";
                    input.style.border = "1px solid red";  
                } 
            }
        }
    }
}
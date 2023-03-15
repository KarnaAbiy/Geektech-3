// /**************************************************************************************

// 1.

const inputMail = document.querySelector("#email");
const btnMail = document.querySelector(".checkmail");
const inputPass = document.querySelector("#password");
const eyebtn = document.querySelector(".passwordshow");

const isitok = document.querySelector(".mailresult");
const passok = document.querySelector(".passresult");

const regExp = /@/g;

const regExpPass = /[\w\s]{8,}/g;

btnMail.addEventListener("click", () => {
    if (regExp.test(inputMail.value)) {
        isitok.innerHTML = "Valid email address";
    }
    else{
        isitok.innerHTML = "It is not email address";
    }
});

btnMail.addEventListener("click", () => {
    if (regExpPass.test(inputPass.value)) {
        passok.innerHTML = "Password is reliable";      
    }
    else{
        passok.innerHTML = "Password is not reliable";
    }
});

eyebtn.addEventListener("click", () => {
    if(inputPass.getAttribute("type") === "password"){
        inputPass.setAttribute("type", "text");
        passok.innerHTML = "Сonfirm your password"
    }else{
        inputPass.setAttribute("type", "password");
        passok.innerHTML = "Сonfirm your password"
    }
});

// ************************************************************************************************

// 2.

const moving = document.querySelector(".moveblock");

const move = () => {
    document.body.style.moveblock.right = 10 + "px";
}
const movingBlock = () => {
    move += 10+"px";
}
movingBlock();
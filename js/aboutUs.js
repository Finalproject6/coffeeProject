'use strict';
let btn = document.getElementsByClassName("button");
let i;
for (i = 0; i < btn.length; i++) {

    btn[i].addEventListener('click', handelr);
}

let arr = ['Shahed', 'Ahmad Alasa\'d', 'Salsabil', 'Ibrahem', 'Ahmad hamzeh'];

function handelr() {

    swal("Enter your email :", {
        content: "input",
    })
        .then((value) => {
            swal(`Your Email: ${value} we  well contact you soon`);
            console.log(value);
        });
}



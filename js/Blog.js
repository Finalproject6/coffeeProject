'use strict';
let sub = document.getElementById('btn');
sub.addEventListener('click', handelr);
let f = document.getElementById('in');
function handelr(event) {
event.preventDefault();
    swal("You will recive our latest news on your email", {
    })
if(f.value==false){
    swal("You should enter your email ", {
    })
}
}


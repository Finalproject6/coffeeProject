"use strict";
/////////////////////////// feedback form/////////////////////////
//constructer function
function Feedback(name, email, message) {
    this.name = name;
    this.email = email;
    this.message = message;
    Feedback.gloarray.push(this);
}
Feedback.gloarray = [];
let newFeeds = document.getElementById('btn');
//event
newFeeds.addEventListener('click', handelSubmit);
function handelSubmit(event) {
    event.preventDefault();
    console.log(event);
    // let uName=event.target.user.value ( didn't work)
    let userName = document.getElementById('user');
    let userEmail = document.getElementById('email');
    let usermessage = document.getElementById('message');
    let uName = userName.value;
    let uEmail = userEmail.value;
    let umessage = usermessage.value;
    new Feedback(uName, uEmail, umessage);
    ul.textContent = '';
    renderFeedback();
    saveToLs();
};
console.log(Feedback.gloarray);
const ul = document.getElementById('unlist');
//render feeds
function renderFeedback() {
    for (let i = 0; i < Feedback.gloarray.length; i++) {
        const li = document.createElement('li');
        ul.appendChild(li);

        li.textContent = ` - ${Feedback.gloarray[i].name} (${Feedback.gloarray[i].email}): ${Feedback.gloarray[i].message}`;

    }
}
//localStorage
function saveToLs() {
    const convertedFb = JSON.stringify(Feedback.gloarray);
    localStorage.setItem('feeds', convertedFb);
}
function getLocalStorageFeeds() {



    let data = localStorage.getItem('feeds');
    let parsedata = JSON.parse(data);
    if (parsedata) {
        for (let i = 0; i < parsedata.length; i++) {
            Feedback.gloarray.push(parsedata[i])
        }
    }
}
getLocalStorageFeeds();

renderFeedback();


anime.timeline({loop: true})
  .add({
    targets: '.ml5 .line',
    opacity: [0.5,1],
    scaleX: [0, 1],
    easing: "easeInOutExpo",
    duration: 700
  }).add({
    targets: '.ml5 .line',
    duration: 600,
    easing: "easeOutExpo",
    translateY: (el, i) => (-0.625 + 0.625*2*i) + "em"
  }).add({
    targets: '.ml5 .ampersand',
    opacity: [0,1],
    scaleY: [0.5, 1],
    easing: "easeOutExpo",
    duration: 600,
    offset: '-=600'
   }).add({
    targets: '.ml5 .letters-left',
    opacity: [0,1],
    translateX: ["0.5em", 0],
    easing: "easeOutExpo",
    duration: 600,
    offset: '-=300'
  }).add({
    targets: '.ml5 .letters-right',
    opacity: [0,1],
    translateX: ["-0.5em", 0],
    easing: "easeOutExpo",
    duration: 600,
    offset: '-=600'
  }).add({
    targets: '.ml5',
    opacity: 0,
    duration: 2000,
    easing: "easeOutExpo",
    delay: 10000
  });

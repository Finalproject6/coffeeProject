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
        li.textContent = `${Feedback.gloarray[i].name} (${Feedback.gloarray[i].email}): ${Feedback.gloarray[i].message}`;
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
    for (let i = 0; i < parsedata.length; i++) {
        Feedback.gloarray.push(parsedata[i])
    }
}
getLocalStorageFeeds();
renderFeedback();




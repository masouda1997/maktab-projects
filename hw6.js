'use strict'

let pill = document.getElementById("pill")
// let pill2 = document.querySelectorAll('input[name=check]:checked');
let nav = document.querySelector('nav')
let galery = document.getElementById('galery') 
// let trigger = document.querySelector('.toggle-pill input[type="checkbox"]+label')
// console.log(trigger);



pill.addEventListener("change", (e) => {
    if (e.target.checked) {
        document.body.style.backgroundColor = '#222'
        nav.style.backgroundColor = '#111'
        galery.style.color = 'white'
        // trigger.style.color = 'rgb(175, 169, 165)'
        // console.log("Checkbox is checked..");

    } else {
        document.body.style.backgroundColor = '#F9F9F9'
        nav.style.backgroundColor = '#F0F0F0'
        galery.style.color = 'black'
        // trigger.style.color = 'rgb(80, 86, 90)'
        // console.log("Checkbox is not checked..");
    }
});
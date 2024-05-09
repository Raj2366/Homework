var t = document.querySelector('.t');
var t1 = document.querySelector('.t1');
var t2 = document.querySelector('.t2');
var container = document.querySelector('.container')
// var emoji = document.querySelectorAll('.emoji');
// var box= document.querySelectorAll('.box')

t.addEventListener("mouseover", function () {
    container.style.backgroundImage = "url('designer.png')";
})

t.addEventListener("mouseleave", function () {
    container.style.backgroundImage="none";
})

// box.addEventListener("mouseover", function () {
//     for (let i = 0; i < box.length; i++){
//         emoji.style.opacity = "1";
//     }
    
// })




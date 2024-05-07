var t = document.querySelector('.t');
var t1 = document.querySelector('.t1');
var t2 = document.querySelector('.t2');
var container = document.querySelector('.container')

t.addEventListener("mouseover", function () {
    container.style.backgroundImage = "url('designer.png')";
})

t.addEventListener("mouseleave", function () {
    container.style.backgroundImage="none";
})


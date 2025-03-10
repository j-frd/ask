function myFunction() {
    location.href = 'next.html';
}

var a = document.getElementById('no');
a.addEventListener('mouseover', change);

function change() {
    var i = Math.floor(Math.random()*150) + 1;
    var j = Math.floor(Math.random()*200) + 1;

    a.style.left = i + 'px';
    a.style.top = j + 'px';
    a.style.position = 'absolute';
}
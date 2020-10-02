// *********************************************
// DOM 
// *********************************************
/*var p = document.querySelector('.paragraph');
window.setInterval(function() {
    p.classList.toggle('blue');
    //p.classList.toggle('red');
}, 1000);

var ps = document.querySelectorAll('p');
for (var i = 0; i < ps.length; i++) {
    (function(p) {
        window.setInterval(
            function() {
                p.classList.toggle('red')
            }, 1000)
    })(ps[i]);
}*/

// Event
var p = document.querySelector('p');
/*var rougit = function() {
    p.classList.toggle('blue')
}
p.addEventListener('click', rougit)
*/

var ps = document.querySelectorAll('p')
for (var i = 0; i < ps.length; i++) {
    var para = ps[i]
    var rougit = function() {
        this.classList.toggle('red')
    }
    para.addEventListener('click', rougit)
    para.addEventListener('mouseover', function() {
        this.classList.add('blue')
    })
    para.addEventListener('mouseout', function() {
        this.classList.remove('blue');
    })
}

var liens = document.querySelectorAll('a.external')
for (var i = 0; i < liens.length; i++) {
    var lien = liens[i]
    lien.addEventListener('click', function(ev) {
        console.log('click sur le lien')
        ev.stopPropagation()
        var rep = window.confirm('Voulez vous quitter le site?')
        if (rep === false) {
            ev.preventDefault()
        }

    })
}

var paragraphlink = document.querySelector('.paragraphlink').addEventListener('click', function(e) {
    console.log("j'ai clique matay", e)
})
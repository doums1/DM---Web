var compteur = 0;
var value;

window.addEventListener('load', function() {
    bouton();
    value = Random(1, 100)
});

function Random(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
}

function bouton() {
    var q = document.getElementById('valider')
    q.addEventListener('click', essai)
}

function essai() {
    var q = document.getElementById('message')
    var i = document.getElementById('valider')
    var n = document.getElementById('input').value;
    if (compteur < 6) {
        if (isNaN(n) || n === "") {
            q.innerHTML = "[" + compteur + "] On a dit un nombre entier !!!"
        }else {
            if (n == value) {
                q.style.color = 'green'
                q.innerHTML = "[" + compteur + "] C'est gagné ! Le nombre mystère était bien " + value
                i.textContent = "Rejouer"
                i.onclick = function() {
                    location.reload()
                }
            }else {
                compteur++
                if (n > value) {
                    q.style.color = 'blue'
                    q.innerHTML = "[" + compteur + "] C'est moins"
                }else {
                    q.style.color = 'blue'
                    q.innerHTML = "[" + compteur + "] C'est plus"
                }
            }
        }
    }else {
        q.style.color = 'red'
        q.innerHTML = "[6] C'est perdu ! Le nombre mystère était " + value
        i.textContent = "Rejouer"
        i.onclick = function() {
            location.reload()
        }
    }
}

function rejouer() {
    window.location.reload()
}


// Creo la mia variabile dove si scatenerà l'input per la somma degli elementi
var onClick = document.getElementById('button');
var outPutBoxes = document.getElementById('boxes-content');

var costoHamburger = 50;
var conto = 50;
outPutBoxes.innerHTML = '€ ' + 50; 

// Implementazione, codice che calcola le aggiunte Burger:

// Comando JS per il click e l'inizio del calcolo e iterazione
onClick.addEventListener('click', function(){         
    // Comandi per iterare e tenere in conto l'input dell'utente:
    var checkboxes = document.getElementsByClassName('box');
    for (var x = 0; x < checkboxes.length; x++) {
        // Verifica se c'è stato il check:
        if (checkboxes[x].checked === true ) {
            console.log(checkboxes[x].value);
            var som = conto += parseInt(checkboxes[x].value);
        }
    }
    outPutBoxes.innerHTML = '€' + som;


});
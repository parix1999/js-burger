// Inizio programma con stampaggio a video nome utente:
var nome =  prompt('Ciao scegli il nome del tuo Burger');

document.getElementById('name').innerHTML =' Nome panino:  ' + nome;


// Creo la mia variabile dove si scatenerà l'input per la somma degli elementi
var onClick = document.getElementById('button');
var outPutBoxes = document.getElementById('boxes-content');

outPutBoxes.innerHTML = '€ ' + 50; 
var lista20 = ['june20','sconto20','burger20'];
var lista10 = ['june10','sconto10','burger10'];
var price = 50;

// Implementazione, codice che calcola le aggiunte Burger:
// Comando JS per il click e l'inizio del calcolo e iterazione
onClick.addEventListener('click', function(){         
    // Comandi per iterare e tenere in conto l'input dell'utente:
    var checkboxes = document.getElementsByClassName('box');
    var costoHamburger = price;
    var sconto = 0;
    for (var x = 0; x < checkboxes.length; x++) {
        // Verifica se c'è stato il check:
        if (checkboxes[x].checked === true ) {
            costoHamburger += parseInt(checkboxes[x].value);
        }       
    }

    var coupon = document.getElementById('coupon');

    for (var i = 0; i < lista20.length; i++) {
        if (lista20[i] === coupon.value) {
            sconto = 20;
           
        }

    }
    for (var z = 0; z < lista10.length; z++) {
        if (lista10[z] === coupon.value) {
            sconto = 10;
        }

    }
    if (sconto === 0 && coupon.value.length > 0) {
        alert('Questo coupon non esiste');
    }

    costoHamburger = costoHamburger * ((100 - sconto) / 100);
    outPutBoxes.innerHTML = '€' + costoHamburger.toFixed(2);

    
});






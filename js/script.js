// Inizio programma con stampaggio a video nome utente:
var nome =  prompt('Ciao scegli il nome del tuo Burger');

document.getElementById('name').innerHTML =' Nome panino:  ' + nome;


// Creo la mia variabile dove si scatenerà l'input per la somma degli elementi
var onClick = document.getElementById('button');
var outPutBoxes = document.getElementById('boxes-content');

outPutBoxes.innerHTML = '€ ' + 50; 
var discaunt20 = ['june20','sconto20','burger20'];
var discaunt10 = ['june10','sconto10','burger10'];


// Implementazione, codice che calcola le aggiunte Burger:
// Comando JS per il click e l'inizio del calcolo e iterazione
onClick.addEventListener('click', function(){         
    // Comandi per iterare e tenere in conto l'input dell'utente:
    var checkboxes = document.getElementsByClassName('box');
    var costoHamburger = 50;

    for (var x = 0; x < checkboxes.length; x++) {
        // Verifica se c'è stato il check:
        if (checkboxes[x].checked === true ) {
            var somma = costoHamburger += parseInt(checkboxes[x].value);
            outPutBoxes.innerHTML = '€' + somma.toFixed(2);
        
        }       
    }

    var couponD = document.getElementById('coupon');
    for (var i = 0; i < discaunt20.length; i++) {
        if (discaunt20[i] === couponD.value) {
            var discount = 20;
            var discauntCalc20 = (somma * discount) / 100;
            var calc20 = somma - discauntCalc20;
            outPutBoxes.innerHTML = '€' + calc20.toFixed(2);
        }

    } 
    
    for (var z = 0; z < discaunt10.length; z++ ) {
        if (discaunt10[z] === couponD.value) {
            var discount = 10; 
            var discauntCalc10 = (somma * discount) / 100;
            var calc10 = somma - discauntCalc10;
            outPutBoxes.innerHTML = '€' + calc10.toFixed(2);
        }

    }
    if (couponD.value.lenght > 0 && discaunt20[i]) {
        alert('no');
    } 

});






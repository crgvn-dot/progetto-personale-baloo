        /* Quando il dipositivo è  uno smartphone o un piccolo tablet, il menù (smartmenu) viene attivato o disattivato 
        cliccando sulla classica icona con 3 barre orizzontali tramite questo script JQuery*/
        $(document).ready(function(){   
            /*$(".smartmenu").click(function() { ... });: Questo seleziona
            l'elemento HTML con la classe "smartmenu" e associa una funzione a un evento di click su di esso. 
            In pratica, questa parte del codice dice "quando un elemento con la classe 'smartmenu' viene cliccato, esegui la seguente funzione".*/
            $(".smartmenu").click(function() {

            /*$("#menu").toggleClass("mostra-smartmenu");: Questa riga di codice seleziona l'elemento HTML con l'ID "menu" e aggiunge o rimuove la classe "mostra-smartmenu" a seconda che la classe sia già presente o meno. In poche parole, 
            alterna la presenza della classe. Se l'elemento ha già la classe, la rimuove; se non ce l'ha, la aggiunge.*/
            $("#menu").toggleClass("mostra-smartmenu");
            });
        });
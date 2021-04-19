// punto a document e dico di eseguire il codice js-jq solo
// quando la pagina del DOM è completamente caricata
$(document).ready(function(){

  // punto all'icona hamburger e imposto un event listener su
  // click. Con una funziona anonima punto al div contenente
  // il menu e lo faccio comparire in .5 secondi
  $('.fa-bars').click(function(){
    $('.hamburger-menu').show(500);
  })

  // punto all'icona x chiudi e imposto un event listener su
  // click. Con una funziona anonima punto al div contenente
  // il menu e lo faccio scomparire in .5 secondi
  $('.close').click(function(){
    $('.hamburger-menu').hide(500);
  })

});
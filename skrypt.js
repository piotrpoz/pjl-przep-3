
function main() {
    
  console.log('hello world!');
  
  if (window.navigator.userAgentData.platform.toLowerCase() === 'macos') {
    console.info('ktoś tu używa macintosha'); 
  }
  else {
    console.warn('o nieee, tylko nie ' +  window.navigator.userAgentData.platform + '!!');
  }

  var $klikalny = document.querySelector('.klikalny');
  var $klikalny2 = document.querySelector('.klikalny2');

  $klikalny.addEventListener('click', function() {
    console.log('ktoś kliknął klikalny blok');
    
    var znahaslo = false;
    if (znahaslo) {
      console.log('zapraszam w moje skromne progi');
    }
    else {
      console.log('wypraszam!')
    }
  });

  $klikalny2.addEventListener('click', function() {
    console.log('tutaj trochę was przetrzymam!');

   
    generujTekst();
    zmienKlaseDziecka('.klikalny2', "w3-container w3-padding-16");
  


  });
}


(function() {
  window.addEventListener('load', main);


})();

/**
  *
  */
var generujTekst = function() {
  var dlugosc = Math.ceil(Math.random() * 100_000);
  console.log('wygeneruję losowy tekst o długości ' + dlugosc);
  
  var tekst = "";
  for (var i = 0; i < dlugosc; i++) {
    var losowaLiczba = Math.ceil(Math.random() * 24);
    tekst += String.fromCharCode(losowaLiczba + 65);
  }
  
  console.log('oto co mi wyszło: ', tekst);

}

/**
  *
  */
var zmienKlaseDziecka = function(selector, nowaKlasa) {
      
  document.querySelector(selector).children[0].className = nowaKlasa;

}
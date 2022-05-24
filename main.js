var resultado = document.getElementById('resultado')

function binar(){
  var input = document.querySelector("#binario")
  var number = input.value;
  return number;

}

function binario(){
  
  valor = parseInt(binar());
  var conc = '';

  if(isNaN(valor) ){
    conc = 'voce digitou string'
  } else {
  var a = [];
  while(valor>=1){
    
    a.unshift(valor%2);
    valor = Math.trunc(valor/2);
  }

  
  a.forEach(function(number){
  conc = conc + number;
  });

  return conc;
}
}

function resultadoTag(){
  if(typeof binario() === "undefined"){
    resultado.innerHTML = "você não digitou um número, por favor digite um número válido"
  } 
  else{
    resultado.innerHTML = binario();

  }
}


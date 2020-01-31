var resultado = 0;


function cancelar(valor){
   document.getElementById('tela').value = valor;
}

function insertNumero(valor){
   document.getElementById('tela').value += valor; 

}

function exibirResultado(){
   var resultado = 0;
   resultado = document.getElementById('tela').value;  
   document.getElementById('tela').value = eval(resultado);
   
}

function apagarNumero(){
    var valor = document.getElementById('tela').value 
    var convertido = valor.toString();
    document.getElementById('tela').value = convertido.substring(0,convertido.length-1);
}

function calcularPorcentagem(){


   var coletoraMultiplicao = 0;
   var coletora1 = null;
   var coletora2 = null;
   var coletora3 = 0;
   
   

      for (let i = 0; i < document.getElementById('tela').value.length; i++) {
         
         if(document.getElementById('tela').value[i] == "*" || document.getElementById('tela').value[i] == "+" ||
             document.getElementById('tela').value[i] == "-" ) {
             
                  coletoraMultiplicao = i;
                  coletora3 = document.getElementById('tela').value[i];
         } 
            
      }
    
            for (let i = 0; i < document.getElementById('tela').value.length; i++) {
                 
                  if( i < coletoraMultiplicao && coletora1 === null){
               
                     coletora1 = document.getElementById('tela').value[0];
                    
                  } 
                  if (coletora1 != null && i < coletoraMultiplicao && document.getElementById('tela').value[i] != coletora1) {
                     
                     coletora1 += document.getElementById('tela').value[i];
                     
                  }     
            }
            
            
            for (let i = 1; i < document.getElementById('tela').value.length; i++) {
                 
               if( i > coletoraMultiplicao && coletora2 === null){
            
                     coletora2 = document.getElementById('tela').value[i];
                     
               } 
               if (coletora2 != null && i > coletoraMultiplicao && document.getElementById('tela').value[i] != coletora2) {
                     
                  coletora2 += document.getElementById('tela').value[i];        
                  
               }       
            }
                       
      var valor1 = Number.parseFloat(coletora1)
      var valor2 = Number.parseFloat(coletora2)

      if (coletora3 === "*") {                   
         
         document.getElementById('tela').value = valor1 * (valor2/100);
             
      } else if (coletora3 === "+") {
           
         document.getElementById('tela').value = valor1 + (valor1 * (valor2/100));                   
             
      } else if (coletora3 === "-") {                   
      
         document.getElementById('tela').value = valor1 - (valor1*(valor2/100));
      
      }
   
}




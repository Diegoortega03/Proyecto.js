



alert("Bienvenido a CONVERSION.ONLINE para ingresar debes loguearte");    
let usuario_logueado= prompt("Ingrese su nombre de usuario");
let edad=prompt("Ingrese su edad");



if (edad>=18 && usuario_logueado=="Diego" ){   
;

    
function conversion(moneda,monto){
    if (moneda == "dolar"){
        let resultado=monto*185;
        return resultado
    }

   else if (moneda == "euro"){
        let resultado=monto*201;
        return resultado
    }


 
} 
 

let monto= prompt( "ingrese monto a cambiar");
    monto=parseFloat(monto);;
  
let moneda= prompt( "ingrese moneda original para cambiar a peso argentino (dolar o euro)");


conversion(moneda,monto);
console.log("La moneda original es:", moneda);
console.log("El cambio realizado da un resultado en pesos argentinos de:",monto+conversion(moneda,monto));
}





else if(edad<18 ){
    alert("USUARIO MENOR DE EDAD, NO PUEDE INGRESAR AL SISTEMA");

  
}


else {

alert("USUARIO DESCONOCIDO, NO PUEDE INGRESAR AL SISTEMA")
}




let monto;

while(monto!= "SALIR"){
    
    monto=prompt( "ingrese monto a cambiar o SALIR para finalizar");
    
    

    if(monto != "SALIR"){
        moneda= prompt( "ingrese moneda original para cambiar a peso argentino (dolar o euro)");
        console.log("La moneda original es:", moneda);
        console.log("El cambio realizado da un resultado en pesos argentinos de:",monto+conversion(moneda,monto));
    }

 
}
 






















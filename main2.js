
//Ingreso de usuario------------------------------------------------------------------------------------------------------------------------

alert("BIENVENIDO A CONVERSION.ONLINE PARA COMENZAR INGRESA TUS DATOS")



class usuario{

    constructor(nombre,apellido,edad){
        this.nombre= nombre;
        this.apellido= apellido;
        this.edad= edad;
    }
  }


  let lista_usuarios=[ ];
  let nombre;
  let apellido;
  let edad;
for(let i=0 ; i<1;i=i+1){
    nombre=prompt("ingrese su nombre");
    apellido=prompt("ingrese su apellido");
    edad=prompt("ingrese su edad");

    let nuevo_usuario=new usuario(nombre, apellido, edad);
    lista_usuarios.push(nuevo_usuario);

    
}


if(edad>=18) {  

 for(let obj_usuario of lista_usuarios){
    

    console.log("DATOS DEL USUARIO", obj_usuario);




}

//OBJETO "MONEDA"-------------------------------------------------------------------------------------------------
class Moneda{  
      constructor(nombre , valor ) { 
        this.nombre= nombre ;
        this.valor=valor;
    }
    get_datos(){
        console.log("---------------"),
        console.log("Moneda:",this.nombre),
        console.log("Valor actual:",this.valor),
        console.log("");

        
    }

    
}

//ARRAY MONEDAS------------------------------------------------------------------------------------------------------

let lista_monedas=[];

lista_monedas.push(new Moneda ("dolar", 377));
lista_monedas.push(new Moneda ("euro", 405));
lista_monedas.push(new Moneda ("libra esterlina",103));


console.log("lista de monedas disponibles");


for(let moneda of lista_monedas){ 
    moneda.get_datos();
}  


function elegir_moneda( moneda){
    return moneda.nombre==cambio;
}

//proceso de cambio-------------------------------------------------------------------------------------------------------------------------

let cambio=prompt("ingrese moneda a cambiar");

let resultado_moneda=lista_monedas.find(elegir_moneda);


console.log(resultado_moneda);


let monto=prompt("ingrese monto");


if (resultado_moneda!=undefined);

{  
if(cambio=="dolar"){
    let resultado= monto*377
    console.log("el resultado del cambio en pesos argentinos es de:",resultado);
  }

  else if(cambio=="euro"){
    let resultado= monto*405
    console.log("el resultado del cambio en pesos argentinos es de:",resultado);
  }

  else if(cambio=="libra esterlina"){
    let resultado= monto*103
    console.log("el resultado del cambio en pesos argentinos es de:",resultado);
  }



  else{
    console.log("moneda inexistente:",cambio)};
 
}


 







//Bucle while---------------------------------------------------------------------------------------------------------------------------------






while(cambio!= "SALIR"){
    
    cambio=prompt( "ingrese moneda para convertir o SALIR para finalizar");
    
    

    if(cambio != "SALIR"){
        monto= prompt( "ingrese monto para cambiar a peso argentino");
        console.log("La moneda original es:",resultado_moneda=lista_monedas.find(elegir_moneda) );
        if (resultado_moneda!=undefined) ;

{  
if(cambio=="dolar"){
    let resultado= monto*377
    console.log("el resultado del cambio en pesos argentinos es de:",resultado);
  }

  else if(cambio=="euro"){
    let resultado= monto*405
    console.log("el resultado del cambio en pesos argentinos es de:",resultado);
  }

  else if(cambio=="libra esterlina"){
    let resultado= monto*103
    console.log("el resultado del cambio en pesos argentinos es de:",resultado);
  }



  else{
    console.log("moneda inexistente:",cambio)};
 
}
        
        
    }
}


}



else{alert("ERES MENOR DE EDAD NO PUEDES INGRESAR AL SISTEMA")} 



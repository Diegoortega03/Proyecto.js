//----CREANDO LOG IN----------------//


let arr_usuarios=[];
let form=document.getElementById("form")
let entrar=false;


form.addEventListener("submit", e=>{ 
    e.preventDefault()
    if(password.value.length<8){
        document.getElementById("warnings").innerHTML="contraseña demasiado corta (mas de 8 caracteres) " 
        entrar=true
        
    }

    
    else if (password.value.length >=8) {
        document.getElementById("warnings_dos").innerHTML="usuario registrado con exito"
    }
} )





function alta_usuario(){


   
    let username= document.getElementById("usuario");
    let password=document.getElementById("password");
    let mail=document.getElementById("mail")
    


   


console.log(username);

let user={nombre:username.value , contraseña:password.value , mail:mail.value};

arr_usuarios.push(user);


let arr_JSON=JSON.stringify(arr_usuarios);

localStorage.setItem("arr_usuarios", arr_JSON)


}

function login_usuario(){


    let arr= localStorage.getItem("arr_usuarios")

    arr=JSON.parse(arr)

    
    let contraseña=document.getElementById("password_login").value;
    let mail=document.getElementById("mail_login").value;

    
    for( let user of arr){

       if(mail==user.mail && contraseña==user.contraseña && mail!="" && contraseña!=""  && entrar==false){ 
           location.href="./pages/home.html"

        }

        else {
            

            document.getElementById("warnings_login").innerHTML="usuario o contraseña incorrectos" 
        }
    


} 


    
}



let boton_registro =document.getElementById("boton_registro");
let boton_login=document.getElementById("boton_login")



boton_registro.addEventListener("click", alta_usuario
);

boton_login.addEventListener("click", login_usuario
);


//funcion convertir 

function convertir(){

    let valor =parseInt (document.getElementById("monto").value)
    let resultado=0;
    let dolar= 377;
    let euro= 400;
    let libra= 333;

    if(document.getElementById("dolar").checked){
        resultado= valor/dolar;
        document.getElementById("resultado").innerHTML="Resultado: $"+ resultado.toFixed(2)
    }

    else if(document.getElementById("euro").checked){

        resultado=valor/euro;
        document.getElementById("resultado").innerHTML="Resultado: €"+ resultado.toFixed(2)
    }

    else if(document.getElementById("libra esterlina").checked)
    {   resultado=valor/libra;
    document.getElementById("resultado").innerHTML="Resultado: £"+ resultado.toFixed(2)}

    else{alert("completa todos los campos para convertir monto")}

}

 

















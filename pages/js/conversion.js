

 //agregando fetch 


const moneda_uno = document.getElementById('moneda-uno');
const moneda_dos = document.getElementById('moneda-dos');
const cantidad_uno = document.getElementById('cantidad-uno');
const cantidad_dos = document.getElementById('cantidad-dos');
const cambio = document.getElementById('cambio');
const taza = document.getElementById('taza');



function calculate(){
    const monedaEl_one = moneda_uno.value;
    const monedaEl_two = moneda_dos.value;

   fetch(`https://api.exchangerate-api.com/v4/latest/${monedaEl_one}`)
   .then(res => res.json() )
   .then(data => {
       const taza = data.rates[monedaEl_two];
       
       cambio.innerText = `1 ${monedaEl_one} = ${taza} ${monedaEl_two}`;

       cantidad_dos.value = (cantidad_uno.value * taza).toFixed(2);

    } );
    
}

//Event listeners
moneda_uno.addEventListener('change', calculate);
cantidad_uno.addEventListener('input', calculate);
moneda_dos.addEventListener('change', calculate);
cantidad_dos.addEventListener('input', calculate);

taza.addEventListener('click', () =>{
    const temp = moneda_uno.value;
    moneda_uno.value = moneda_dos.value;
    moneda_dos.value = temp;
    calculate();
} );


calculate();





















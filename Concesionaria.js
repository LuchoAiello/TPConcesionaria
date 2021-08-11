/*Etapa 1
En esta primera etapa, necesitamos requerir tu módulo autos que se encuentra en la misma carpeta del archivo donde estás trabajando.
Además, necesitarás crear un objeto literal llamado concesionaria que contendrá todas las funcionalidades que el cliente solicita.
Por último, nuestro objeto literal debe tener un atributo llamado autos que contenga la lista de automóviles importada anteriormente.
requerir módulo autos */

/*Etapa 2
Ahora que la concesionaria tiene los autos, es posible crear la funcionalidad buscarAuto que reciba por parámetro la patente y devuelva el auto al cual le corresponde. 
En caso de no encontrar el mismo, deberá retornar null.
Paerkftra que todo funcione tenés que agregar el código que escribiste en el ejercicio anterior.*/

/*Etapa 3
Ahora, María les pide que agreguen la funcionalidad de venderAuto que recibe la patente y, en caso de encontrar al automóvil, le asigna el estado de vendido.
¿Cómo lo resuelven?
Recordatorio: Para comenzar tenés que agregar el código que escribiste en el ejercicio anterior. Para resolver esta nueva funcionalidad, tendrás que utilizar la función buscarAuto.*/

/*Funcionalidad extra
La primera es poder contar, como concesionaria, con la habilidad de poder tener la lista de autos para la venta. A lo cual, María, 
cree que es una tarea sencilla que Juan y vos pueden encarar solos, usando la función autosParaLaVenta, aunque por las dudas ella les recuerda que no deberían 
de aparecer los autos que ya fueron vendidos.
Para comenzar, tenés que agregar el código que escribiste en el ejercicio anterior. Tené en cuenta que estamos optimizando nuestro código, por lo cual,
 deberíamos utilizar el método filter.*/

/* Una nueva funcionalidad extra
María, contenta con el trabajo que realizaron, les pide otra funcionalidad extra. Resulta que a la concesionaria le suelen preguntar muy seguido cuáles de los autos para la 
venta son 0 km. Tené en cuenta que María considera que un auto 0 km es aquel que tenga un kilometraje menor a 100. Vas a tener que desarrollar la funcionalidad autosNuevos.
¿Cómo podés resolver esto reutilizando la función autosParaLaVenta?
Para comenzar, tenés que agregar el código que escribiste en el ejercicio anterior.*/

// El cliente le pidió saber cuánto dinero generaron las ventas.
// María te pide que completes la función listaDeVentas que devuelve una lista que contiene el precio de venta de cada auto vendido. 
// A esto, Juan, que está al lado tuyo, se le escapa la frase "mmm.....estoy seguro que alguna función de arrays nos va a servir, pero no me acuerdo".
// Para comenzar tenés que agregar el código que escribiste en el ejercicio anterior.

// Terminada esta función, María te pide que resuelvas la funcionalidad de totalDeVentas, que justamente nos devuelva la sumatoria del valor de todas las ventas realizadas.
//  Acá el único requerimiento técnico explícito es que utilices la función reduce, ¡a codear!

// Muy contento el equipo por cómo viene el desarrollo, por la tarde, María te comenta que se agrega una funcionalidad muy importante: 
// la de verificar si una persona puede comprar o no un auto. Esta permite al sistema definir si una persona al consultar por un auto, puede comprarlo. 
// Las personas solo sacan los autos en cuotas y tomando dos factores como condición de compra. Una es el costo total: 
// si el total de un auto excede lo que la persona considera caro, no va a comprar el auto. Otra condición es su capacidad de pago en cuotas: 
// si la capacidad de pago en cuotas supera al costo de la cuota, va a poder pagarlo. Si ambas condiciones se cumplen, se realiza la compra.
// Es por esto que María te pide que desarrolles la función puedeComprar que reciba por parámetro un auto y una persona y devuelva true si la misma puede comprar el auto.
// Una persona va a ser representada mediante un objeto literal de la siguiente forma:
// {
// nombre: “Juan”,
// capacidadDePagoEnCuotas: 20000,
// capacidadDePagoTotal: 100000
// }
// Para comenzar tenés que agregar el código que escribiste en el ejercicio anterior.

const autos = require('./autos');

let concesionaria = {
   
  autos: autos,
  
   buscarAuto:  function (patente){

      //filtra la patente de los autos 
      
      const moduloAutos = autos.filter(function (autos) { 
        
         return autos.patente == patente; 
      });
      
      // el filter devuelve un array con lo que filtro(si se cumple devuelve el array donde esta esa patente), de no ser asi devuelve un array vacio
      // si el numero de elementos de moduloAutos es mayor a 0, devuelve el auto al cual corresponde la patente, de lo contrario devuelve null

      const resultado = (moduloAutos.length > 0) ? moduloAutos[0] : null;
      
      return resultado;
     },

     venderAuto: function(patente) {
      
      //lo que hace autoAVender es prender la funcion de buscarAuto
       const autoAVender = this.buscarAuto(patente);
      // si el auto existe se cambia el valor a true, como no hay que comparar nada no se le pasa nada en el if
         if(autoAVender)
      //Para cambiar una propiedad se usa el operador de asignación ( = )
           autoAVender.vendido = true;
  },

  autosParaLaVenta: function(){

   // buscadorDeAutos filtra los en el objeto literal autos, aquellos autos en donde el elemento vendido = false
   const buscadorDeAutos = autos.filter(function (autos) { 
        
      return autos.vendido == false; 


     });
   // autosALaVenta dice que si el numero de elementos que tiene buscadorDeAutos es mayor a 0, que de vuelva el auto en el cual el elemento vendido sea falso, caso contrario 
   //retorna 'No hay autos a la venta'

     const autosALaVenta = (buscadorDeAutos.length > 0) ? buscadorDeAutos : 'No hay autos a la venta';
     return autosALaVenta;

   },

   autosNuevos: function(){
      
      //autosDisponiblesMenoresA100Km prende la funcion de autosParaLaVenta y filtra los autos menores a 100km
      const autosDisponiblesMenoresA100Km = this.autosParaLaVenta().filter(autos => autos.km < 100);
      
      return autosDisponiblesMenoresA100Km;

   },

   listaDeVentas: function(){
      
      let arrayVacia = [];
       // listaDePrecios para que pushee a la arrayVacia los precios de los autos vendidos (autos.vendidos tiene que ser true)
       // de no ser asi devuelve un array vacia
      const listaDePrecios = autos.map(function (autos){
           
         if(autos.vendido == true){
              
              return arrayVacia.push(autos.precio)
             }
         }
       )
      
      return arrayVacia;

   },

   totalDeVentas: function(){

      const funcion = this.listaDeVentas();
      //si la lista esta vacia devuelve 0
      return funcion.reduce((acumulador, numero) => acumulador + numero, 0)
         
   },

   puedeComprar: function(autos, persona){

      const cuota = autos.precio / autos.cuotas;
      //si se cumplen las 2 condiciones devuelve true, de lo contrario devuelve false. 
      if(persona.capacidadDePagoTotal >= autos.precio && persona.capacidadDePagoEnCuotas >= cuota){
        
         return true;

      }else{

         return false;

      }
   },

   autosQuePuedeComprar: function(persona){
      
      const listaDeAutos = this.autosParaLaVenta();
      
      let arrayVacio = [];
     
      for (let i = 0; i < listaDeAutos.length; i++){
        
         if(this.puedeComprar(listaDeAutos[i], persona)==true){
           
            arrayVacio.push(listaDeAutos[i])
         }
      }
      return arrayVacio;
   }
}


// console.log(concesionaria.autosQuePuedeComprar(
//    {
//       nombre: "Juan",
//       capacidadDePagoEnCuotas: 20000,
//       capacidadDePagoTotal: 150000
//       } ))


// console.log(concesionaria.puedeComprar({
//    marca : "Ford",
//    modelo : "Fiesta",
//    precio : 150000,
//    km : 200,
//    color : "Azul",
//    cuotas : 12,
//    anio : 2019,
//    patente : "APL123",
//    vendido : false
// }, {
   // nombre: "Juan",
   // capacidadDePagoEnCuotas: 20000,
   // capacidadDePagoTotal: 150000
   // }))

// concesionaria.venderAuto("APL123");
// concesionaria.venderAuto("JJK116");
// console.table(concesionaria.buscarAuto('APL123'));
// console.table(concesionaria.buscarAuto("JJK116"));
//console.log(concesionaria.totalDeVentas())

//console.table(concesionaria.buscarAuto('APL123'));
// concesionaria.venderAuto("APL123");
// concesionaria.venderAuto("JJK116");
// console.table(concesionaria.buscarAuto("JJK116"));
// console.table(concesionaria.buscarAuto('APL123'));
// console.log(concesionaria.listaDeVentas())


//console.table(concesionaria.autosNuevos()) 
// console.table(concesionaria.venderAuto('APL123'));
// console.table(concesionaria.buscarAuto('APL123'));
// console.table(concesionaria.venderAuto("JJK116"));
// console.table(concesionaria.buscarAuto("JJK116"));
// console.table(concesionaria.autosParaLaVenta())
// console.table(concesionaria.buscarAuto("APL123"));
// console.table(concesionaria.buscarAuto("JJK116"));
// console.table(concesionaria.buscarAuto("asdAP123"));






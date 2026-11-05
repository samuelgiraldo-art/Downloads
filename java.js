const prueba ={
    entrada_nombre: " carlos Samuel ",
    entrada_correo: "carlos.giraldoa@cun.edu.co",
    entrada_edad : "17",
    entrada_codigo_promo : "DESC-2022-X"
};

let nombre = prueba.entrada_nombre.trim().toLowerCase();

nombre = 
nombre.charAt(0).toUpperCase() + nombre.slice(1)
nombre.replace("samuel", "Samuel")                                  
console.log(nombre)
let correo = prueba.entrada_correo.toLowerCase();
// let Arroba = correo.includes("@")
let valido = correo.endsWith(".co")
 console.log(correo);
 console.log(valido);
// console.log(terminacon);

let codigo= prueba.entrada_codigo_promo;
let iniciaDesc = codigo.startsWith("DESC-");

let años = codigo.slice(5,9);
console.log(iniciaDesc)
console.log(años)

let año =   17 
    if ( año >=18){
        console.log(" eres mayor de edad");
    }else{
    console.log(" eres menor de edad ");
    }




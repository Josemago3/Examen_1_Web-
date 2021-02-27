//arreglo inicial de comidas
var comida= [{nombre: "Coca-Cola", descripcion : "Bebida sabor cola de 300ml", precio : "30", tipo : "Bebida"},
             {nombre: "Agua de horchata", descripcion : "Bebida sabor horchata y una pizca de canela (1 litro)", precio : "70", tipo : "Bebida"},
             {nombre: "Cerveza", descripcion : "Bebida alcohólica marca bohemia (350ml) ", precio : "30", tipo : "Bebida"},
             {nombre: "Tacos al pastor", descripcion : "Orden de 5 tacos tipo al pastor", precio : "30", tipo : "Platillo"},
             {nombre: "Taco Árabe", descripcion : "Orden de 1 taco tipo árabe.", precio : "20", tipo : "Platillo"},
             {nombre: "Pizza", descripcion : "Pizza de 12 rebanadas con queso y pepperoni", precio : "200", tipo : "Platillo"},
             {nombre: "Memela", descripcion : "Tortilla de maíz elaborada a mano con salsa y quesillo", precio : "30", tipo : "Platillo"},
             {nombre: "Flan", descripcion : "Flan sabor vainilla con cubierta de caramelo", precio : "30", tipo : "Postre"},
             {nombre: "Nieve de Limón", descripcion : "Nieve sabor limón elaborada artesanalmente en el estado de puebla", precio : "15", tipo : "Postre"},
             {nombre: "Gelatina", descripcion : "Gelatina sabor rompope", precio : "10", tipo : "Postre"}]; 

function mostrarBebidas() {
    var j=1;

    document.getElementById("comida").style.display = "none";
    document.getElementById("postre").style.display = "none";
    document.getElementById("bebidas").style.display = "block";
    
    for(i=0;i<comida.length;i++){
        if(comida[i].tipo=="Bebida"){
            var producto= "bproducto"+(j);
            var descripcion= "bdescripción"+(j);
            var precio= "bprecio"+(j);
            document.getElementById(producto).innerHTML = comida[i].nombre;
            document.getElementById(descripcion).innerHTML = comida[i].descripcion;
            document.getElementById(precio).innerHTML = comida[i].precio;
            j++;
        }
    }
}

function mostrarComida() {
    var j=0;

    document.getElementById("bebidas").style.display = "none";
    document.getElementById("postre").style.display = "none";
    document.getElementById("comida").style.display = "block";

    for(i=0;i<comida.length;i++){
        if(comida[i].tipo=="Platillo"){
            var producto= "Pproducto"+(j+1);
            var descripcion= "Pdescripción"+(j+1);
            var precio= "Pprecio"+(j+1);
            document.getElementById(producto).innerHTML = comida[i].nombre;
            document.getElementById(descripcion).innerHTML = comida[i].descripcion;
            document.getElementById(precio).innerHTML = comida[i].precio;
            j++;
        }
    }
}

function mostrarPost() {
    var j=0;

    document.getElementById("bebidas").style.display = "none";
    document.getElementById("comida").style.display = "none";
    document.getElementById("postre").style.display = "block";

    for(i=0;i<comida.length;i++){
        if(comida[i].tipo=="Postre"){
            var producto= "oproducto"+(j+1);
            var descripcion= "odescripción"+(j+1);
            var precio= "oprecio"+(j+1);
            document.getElementById(producto).innerHTML = comida[i].nombre;
            document.getElementById(descripcion).innerHTML = comida[i].descripcion;
            document.getElementById(precio).innerHTML = comida[i].precio;
            j++;
        }
    }
}

/**
 Menú
1.
Nombre: Coca-Cola
Descripción: Bebida sabor cola de 300ml
Precio venta: $30
Tipo de comida: Bebida

2.
Nombre: Agua de horchata
Descripción: Bebida sabor horchata y una pizca de canela (1 litro)
Precio venta: $70
Tipo de comida: Bebida

3. 
Nombre: Cerveza
Descripción: Bebida alcohólica marca bohemia (350ml) 
Precio venta: $30
Tipo de comida: Bebida

{nombre: "Cerveza", descripcion : "Bebida alcohólica marca bohemia (350ml) ", precio : "30", tipo : "Bebida"},
4.
Nombre: Tacos al pastor
Descripción: Orden de 5 tacos tipo al pastor
Precio venta: $30
Tipo de comida: Platillo
{nombre: "Tacos al pastor", descripcion : "Orden de 5 tacos tipo al pastor", precio : "30", tipo : "Platillo"},


5.
Nombre: Taco Árabe
Descripción: Orden de 1 taco tipo árabe.
Precio venta: $20
Tipo de comida: Platillo
{nombre: "Taco Árabe", descripcion : "Orden de 1 taco tipo árabe.", precio : 20", tipo : "Platillo"},

6.
Nombre: Pizza
Descripción: Pizza de 12 rebanadas con queso y pepperoni
Precio venta: $200
Tipo de comida: Platillo
{nombre: "Pizza", descripcion : "Pizza de 12 rebanadas con queso y pepperoni", precio : 200", tipo : "Platillo"},

7.
Nombre: Memela  
Descripción: Tortilla de maíz elaborada a mano con salsa y quesillo
Precio venta: $30
Tipo de comida: platillo
{nombre: "Memela", descripcion : "Tortilla de maíz elaborada a mano con salsa y quesillo", precio : 30", tipo : "Platillo"},

8.
Nombre: Flan
Descripción: Flan sabor vainilla con cubierta de caramelo
Precio venta: $25
Tipo de comida: Postre
{nombre: "Flan", descripcion : "Flan sabor vainilla con cubierta de caramelo", precio : 30", tipo : "Postre"},

9.
Nombre: Nieve de Limón
Descripción: Nieve sabor limón elaborada artesanalmente en el estado de puebla 
Precio venta: $15
Tipo de comida: Postre
{nombre: "Nieve de Limón", descripcion : "Nieve sabor limón elaborada artesanalmente en el estado de puebla", precio : 15", tipo : "Postre"},

10.
Nombre: Gelatina
Descripción: Gelatina sabor rompope
Precio venta: $10
Tipo de comida: postre

{nombre: "Tacos al pastor", descripcion : "Orden de 5 tacos tipo al pastor", precio : "30", tipo : "Platillo"},
{nombre: "Tacos al pastor", descripcion : "Orden de 5 tacos tipo al pastor", precio : "30", tipo : "Platillo"},
{nombre: "Taco Árabe", descripcion : "Orden de 1 taco tipo árabe.", precio : 20", tipo : "Platillo"},
{nombre: "Pizza", descripcion : "Pizza de 12 rebanadas con queso y pepperoni", precio : 200", tipo : "Platillo"},
{nombre: "Memela", descripcion : "Tortilla de maíz elaborada a mano con salsa y quesillo", precio : 30", tipo : "Platillo"},
{nombre: "Flan", descripcion : "Flan sabor vainilla con cubierta de caramelo", precio : 30", tipo : "Postre"},
{nombre: "Nieve de Limón", descripcion : "Nieve sabor limón elaborada artesanalmente en el estado de puebla", precio : 15", tipo : "Postre"},
{nombre: "Gelatina", descripcion : "Gelatina sabor rompope", precio : 10", tipo : "Postre"},



 */
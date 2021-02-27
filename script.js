function mostrarBebidas() {
    var bebidas = ["","Coca cola", "Agua de horchata", "Cerveza"]; //arreglo de bebidas
    for(i=1;i<=bebidas.length;i++){ 
        var p= "producto"+i;
        var iva= "IVA"+i;
        var t= "T"+i;
        console.log(p);
        /*document.getElementById(p).innerHTML = bebidas[i];*/
        
    }
    var bebidas = {
        nombre: "Coca-Cola",
        descripcion : " Bebida sabor cola de 300ml",
        precio : "$30",
        tipo : "Bebida",
    };
    document.getElementById("producto1").innerHTML = bebidas.nombre;
    document.getElementById("descripción1").innerHTML = bebidas.descripcion;
    document.getElementById("precio1").innerHTML = bebidas.precio;
}
function mostrarComida() {
    var bebidas = []; //arreglo de bebidas
    
    document.getElementById("bebidas_menu").innerHTML = "Hola estoy aqui";
}
function mostrarPost() {
    var bebidas = []; //arreglo de bebidas
    
    document.getElementById("bebidas_menu").innerHTML = "Hola estoy aqui";
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
4.
Nombre: Tacos al pastor
Descripción: Orden de 5 tacos tipo al pastor
Precio venta: $30
Tipo de comida: Platillo
5.
Nombre: Taco Árabe
Descripción: Orden de 1 taco tipo árabe.
Precio venta: $20
Tipo de comida: Platillo
6.
Nombre: Pizza
Descripción: Pizza de 12 rebanadas con queso y pepperoni
Precio venta: $200
Tipo de comida: Platillo

7.
Nombre: Memela  
Descripción: Tortilla de maíz elaborada a mano con salsa y quesillo
Precio venta: $30
Tipo de comida: platillo
8.
Nombre: Flan
Descripción: Flan sabor vainilla con cubierta de caramelo
Precio venta: $25
Tipo de comida: Postre
9.
Nombre: Nieve de Limón
Descripción: Nieve sabor limón elaborada artesanalmente en el estado de puebla 
Precio venta: $15
Tipo de comida: Postre
10.
Nombre: Gelatina
Descripción: Gelatina sabor rompope
Precio venta: $10
Tipo de comida: postre



 */
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
             {nombre: "Gelatina", descripcion : "Gelatina sabor rompope", precio : "10.50", tipo : "Postre"}]; 
var ventas=0;

function mostrarBebidas() {
    var j=0;
    ocultarImagen();
    document.getElementById("comida").style.display = "none";
    document.getElementById("postre").style.display = "none";
    document.getElementById("editar").style.display = "none";
    document.getElementById("bebidas").style.display = "block";
    limpiar("bebida",3,"none");
    for(i=0;i<comida.length;i++){
        if(comida[i].tipo=="Bebida"){
            var producto= "bproducto"+(j+1);
            var descripcion= "bdescripción"+(j+1);
            var precio= "bprecio"+(j+1);
            document.getElementById(producto).innerHTML = comida[i].nombre;
            document.getElementById(descripcion).innerHTML = comida[i].descripcion;
            document.getElementById(precio).innerHTML = comida[i].precio;
            j++;
        }
    }
    limpiar("bebida",j,"table-row");
}

function mostrarComida() {
    var j=0;
    ocultarImagen();
    document.getElementById("bebidas").style.display = "none";
    document.getElementById("postre").style.display = "none";
    document.getElementById("editar").style.display = "none";
    document.getElementById("comida").style.display = "block";
    limpiar("comida",4,"none");
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
    limpiar("comida",j,"table-row");
}

function mostrarPost() {
    var j=0;
    ocultarImagen();
    document.getElementById("bebidas").style.display = "none";
    document.getElementById("comida").style.display = "none";
    document.getElementById("editar").style.display = "none";
    document.getElementById("postre").style.display = "block";
    limpiar("postre",3,"none");
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
    limpiar("postre",j,"table-row");
}

function limpiar(pro, tam, most){
    for(k=0;k<tam;k++){
        var producto= pro+(k+1);
        console.log(document.getElementById(producto).style.display = most);
        document.getElementById(producto).style.display = most;
    }
}

function editar(){
    var j=0;
    ocultarImagen();
    document.getElementById("bebidas").style.display = "none";
    document.getElementById("comida").style.display = "none";
    document.getElementById("postre").style.display = "none";
    document.getElementById("editar").style.display = "block";
    limpiar("editar",10,"none");
    for(i=0;i<comida.length;i++){
        var producto= "producto"+(i+1);
        var descripcion= "descripción"+(i+1);
        var precio= "precio"+(i+1);
        var tipo= "tipo"+(i+1);
        document.getElementById(producto).innerHTML = comida[i].nombre;

        document.getElementById(descripcion).innerHTML = comida[i].descripcion;
        document.getElementById(precio).innerHTML = comida[i].precio;
        document.getElementById(tipo).innerHTML = comida[i].tipo;
    }
    limpiar("editar",comida.length,"table-row");
    //Agregar
    //document.getElementById("Agregar");
    //Eliminar
}

function agregar(){
    var repetido;
    var nom = document.getElementById("productoI").value;
    var des = document.getElementById("descripciónI").value;
    var pre = document.getElementById("precioI").value;
    var tip = document.getElementById("tipoI").value;
    if(des.length==0){
        des = "Sin descripción"
    }
    if(pre==0){
        pre = 20;
    }
    if(tip=="Bebida"){
        repetido = comida.filter(comida => comida.tipo === "Bebida").length;
        if(repetido+1 > 3){
            alert("Arreglo de bebidas lleno, no se puede agregar el elemento");
        }
        else{
            var comi ={  nombre: nom,
                descripcion: des,
                precio: pre,
                tipo: tip
            };
            comida.push(comi);
        }
    }
    if(tip=="Platillo"){
        repetido = comida.filter(comida => comida.tipo === "Platillo").length;
        if(repetido+1 > 4){
            alert("Arreglo de platillos lleno, no se puede agregar el elemento");
        }
        else{
            var comi ={  nombre: nom,
                descripcion: des,
                precio: pre,
                tipo: tip
            };
            comida.push(comi);
        }
    }
    if(tip=="Postre"){
        repetido = comida.filter(comida => comida.tipo === "Postre").length;
        if(repetido+1 > 3){
            alert("Arreglo de platillos lleno, no se puede agregar el elemento");
        }
        else{
            var comi ={  nombre: nom,
                descripcion: des,
                precio: pre,
                tipo: tip
            };
            comida.push(comi);
        }
    }

    editar();            
}

function edit(){
    var bendera=0;
    var repetido;
    var nombre = document.getElementById("productoE").value;
    var des = document.getElementById("descripciónE").value;
    var pre = document.getElementById("precioE").value;
    var tip = document.getElementById("tipoE").value;
    if(des.length==0){
        des = "Sin descripción"
    }
    if(pre==0){
        pre = 20;
    }
    console.log(des, pre, tip);
    console.log(comida.length);
    for(i=0;i<comida.length;i++){
        console.log(i);
        console.log(tip, nombre);
        console.log(comida[i].nombre,i);
        if(comida[i].nombre==nombre){
            console.log(tip, nombre,comida[i].tipo,i);
            if(tip=="Bebida"){
                repetido = comida.filter(comida => comida.tipo === "Bebida").length;
                if(comida[i].tipo!="Bebida" && repetido+1 > 3){
                    alert("Arreglo de bebidas lleno, no se puede agregar el elemento");
                }
                else{
                    comida[i].descripcion = des;
                    comida[i].precio = pre;
                    comida[i].tipo = tip;
                    bandera = 1;
                }
            }
            if(tip=="Platillo"){
                repetido = comida.filter(comida => comida.tipo === "Platillo").length;
                if(comida[i].tipo!="Platillo" && repetido+1 > 4){
                    alert("Arreglo de platillos lleno, no se puede agregar el elemento");
                }
                else{
                    comida[i].descripcion = des;
                    comida[i].precio = pre;
                    comida[i].tipo = tip;
                    bandera = 1;
                }
            }
            if(tip=="Postre"){
                repetido = comida.filter(comida => comida.tipo === "Postre").length;
                if(comida[i].tipo!="Postre" && repetido+1 > 3){
                    alert("Arreglo de platillos lleno, no se puede agregar el elemento");
                }
                else{
                    comida[i].descripcion = des;
                    comida[i].precio = pre;
                    comida[i].tipo = tip;
                    bandera = 1;
                }
            }
        }
    }
    if(bandera == 0){
        alert("¡Elemento no encontrado!");
    }
    editar();
}

function eliminar(){    
    var nombre = document.getElementById("productoO").value;
    for(i=0;i<comida.length;i++){
        if(comida[i].nombre==nombre){
            var eliminado= comida.splice(i,1);
            comida.splice(i,1);
            console.log(eliminado, i,comida);
        }
    }
    editar();
}

function TipoR(tipo){
    var repetido=0;
    for(i=0;i<comida.length;i++){
        if(comida[i].tipo==tipo){
            repetido++;
        }
    }
    return repetido;
}

function suma(){
    var suma=0.00,B=0,P=0,O=0;
    for(i=0;i<4;i++){
        if(B<3){
            var precio= "bprecio"+(P+1);
            var cantidad = "bT"+(P+1);
            var n =document.getElementById(precio).innerHTML;
            console.log(n);
            console.log(document.getElementById(cantidad).value);
            suma+= document.getElementById(precio).innerHTML * document.getElementById(cantidad).value;
            B++;
        }
        if(P<4){
            var precio= "Pprecio"+(P+1);
            var cantidad = "PT"+(P+1);
            var n =document.getElementById(precio).innerHTML;
            console.log(n);
            console.log(document.getElementById(cantidad).value);
            suma+= document.getElementById(precio).innerHTML * document.getElementById(cantidad).value;
            P++;
        }
        if(O<3){
            var precio= "oprecio"+(O+1);
            var cantidad = "oT"+(O+1);
            var n =document.getElementById(precio).innerHTML;
            console.log(n);
            console.log(document.getElementById(cantidad).value);
            suma+= document.getElementById(precio).innerHTML * document.getElementById(cantidad).value;
            O++;
        }
    }
    if(suma==0){
        document.getElementById("Total").value = "0.00";
    }
    else{
        document.getElementById("Total").value = suma;
    }
}

function comprar(){
    var B=0,P=0,O=0;

    suma();

    for(i=0;i<4;i++){
        if(B<3){
            var cantidad = "bT"+(P+1);
            document.getElementById(cantidad).value = 0;
            B++;
        }
        if(P<4){
            var cantidad = "PT"+(P+1);
            document.getElementById(cantidad).value = 0;
            P++;
        }
        if(O<3){
            var cantidad = "oT"+(O+1);
            document.getElementById(cantidad).value = 0;
            O++;
        }
    }

    ventas+= parseFloat(document.getElementById("Total").value);
    alert("¡Compra realizada exitosamente! \nTotal de la comprar: "+ document.getElementById("Total").value);
    document.getElementById("Total").value = "0.00";
}

function salir(){
    alert("Ganancias Totales: "+ventas);
    location.reload();
}

function ocultarImagen(){
    var x = document.getElementById("contenido__img");
    if (x.style.display === "none") {
        /*x.style.display = "block";*/
    } else {
        x.style.display = "none";
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
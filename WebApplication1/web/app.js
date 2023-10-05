/* 
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/JSP_Servlet/JavaScript.js to edit this template
 */

var app = angular.module("app", ["ngRoute"]);

app.config(function($routeProvider){
    $routeProvider
    .when("/", { //El .when() me permite evaluar el ruteo
        templateUrl: "cajero.html",
        controller: "controlador"
    }) 
    .when("/productos", {
        templateUrl: "productos.html",
        controller: "controlador"
    });
});

app.controller("controlador", function($scope){
    var lista = this;
    var n = 2;
    var n_carrito = 1;
    
    lista.productos=[
        {id:1, nombre:"Agua", precio:5},
        {id:2, nombre:"Arroz", precio:20}
    ];

    lista.carrito=[

    ];

    lista.addProducto = function(){
        var nombre = lista.nombre;
        var precio = lista.precio;

        if(nombre != "" && precio != "" && !isNaN(precio)){
            n++;
            lista.productos.push({id:n, nombre: nombre, precio: precio});
            lista.nombre = "";
            lista.precio = "";
        }
        
    }

    lista.addToKart = function(){
        var id = lista.productoSeleccionado;
        var cantidad = lista.cantidad;
        var producto = lista.productos.find(function(obj){
            return obj.id == id;
        });

        if (producto != undefined && cantidad >0){
            lista.carrito.push({id:n, nombre: producto.nombre, cantidad: cantidad, precio: producto.precio, total: producto.precio*cantidad});
            n_carrito++;
        }
    }

    lista.getTotalCarrito = function(){
        var total = 0;
        lista.carrito.forEach(x => {
            total+=x.total;
        });
    }
});

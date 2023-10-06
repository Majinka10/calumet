var app = angular.module("app", ["ui.router"]);

app.config(function($stateProvider, $urlRouterProvider) {
    // Configuración de la ruta por defecto
    $urlRouterProvider.otherwise('/angular');

    // Configuración de las rutas con $stateProvider
    $stateProvider
        .state('angular', {
            url: '/angular',
            templateUrl: 'main_angular.html',
            controller: 'MainAngular'
        })
        .state('universidad', {
            url: '/universidad',
            templateUrl: 'main_universidad.html',
            controller: 'MainUniversidad'
        })
        .state('angular.cajero', {
            url: '/cajero',
            templateUrl: 'angular_cajero.html',
            controller: 'MainAngular'
        })
        .state('angular.productos', {
            url: '/productos',
            templateUrl: 'angular_productos.html',
            controller: 'MainAngular'
        })
        .state('universidad.facultades', {
            url: '/facultades',
            templateUrl: 'universidad_facultades.html',
            controller: 'FacultadesController'
        })
        .state('universidad.escuelas', {
            url: '/escuelas',
            templateUrl: 'universidad_escuelas.html',
            controller: 'EscuelasController'
        });
});

app.controller("MainUniversidad", function($scope){
    $scope.message = "¡MAIN DE UNIVERSIDAD!";
});

app.controller("EscuelasController", function($scope){
    $scope.message = "Estás en la página de escuelas.";
});

app.controller("FacultadesController", function($scope){
    $scope.message = "Estás en la página de facultades.";
});

app.controller("MainAngular", function($scope){
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
        var precio = parseFloat(lista.precio);

        if(nombre != "" && !isNaN(precio) && precio > 0){
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
            total += x.total;
        });

        return total;
    }
});



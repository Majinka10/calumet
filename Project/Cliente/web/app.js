var app = angular.module("app", ["ui.router"]);

app.config(function($stateProvider, $urlRouterProvider) {
    // Configuración de la ruta por defecto
    $urlRouterProvider.otherwise('/agenda');

    // Configuración de las rutas con $stateProvider
    $stateProvider
    .state('angular', {
        url: '/angular',
        templateUrl: 'main_angular.html',
        controller: 'MainAngular',
        redirectTo: 'angular.cajero'
    })
    .state('agenda', {
        url: '/agenda',
        templateUrl: 'main_agenda.html',
    })
    .state('angular.cajero', {
        url: '/cajero',
        views: {
            '': {
                templateUrl: 'AngularJS/angular_cajero.html',
                controller: 'MainAngular'
            }
        }
    })
    .state('angular.productos', {
        url: '/productos',
        views: {
            '': {
                templateUrl: 'AngularJS/angular_productos.html',
                controller: 'MainAngular'
            }
        }
    });
});

app.controller("MainAgenda", ["$http", function($http) {
    agenda = this;
    
    agenda.message = "Hola mundo";
    
    agenda.contactos = [];
    
    agenda.addContacto = function(){
        var parametros = {
            proceso: "Agregar",
            id: agenda.id,
            typeId: agenda.typeId,
            firstName: agenda.firstName,
            lastName: agenda.lastName,
            address: agenda.address, 
            email: agenda.email,
            phone: agenda.phone,
            favorite: agenda.favorite
        };
        
        console.log('Datos enviados desde AngularJS:', parametros);
        
        $http({
            method: 'POST',
            url: 'Controlador',
            params: parametros
        }).then(function(res){
            console.log(res.data);

            if(res.data.ok === true){
                if (res.data.message === "El contacto fue agregado"){
                    console.log("Correcto: Contacto agregado");
                    window.location.reload();
                } else {
                    console.log("Error");
                }
            } else {
                alert(res.data.errorMsg);
            }
        });
    };
    
    agenda.listContactos = function(){
        var parametros = {
            proceso: "Listar"
        };
        
        $http({
            method: 'POST',
            url: 'Controlador',
            params: parametros
        }).then(function(res){
            console.log(res.data);
            agenda.contactos = res.data.Contactos;
            console.log('Datos recuperados:', agenda.contactos);

        })
    };
    
    agenda.deleteContacto = function(id){
        var parametros = {
            proceso: "Eliminar",
            id: id
        };
        
        $http({
            method: 'POST',
            url: 'Controlador',
            params: parametros
        }).then(function(res){
            if(res.data.ok === true){
                if (res.data.message === "El contacto fue eliminado"){
                    window.location.reload();
                } else{
                    console.log("Error");
                }
            } else{
                alert(res.data.errorMsg);
            }
        })
    };
    
    agenda.listContactos();
}]);

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



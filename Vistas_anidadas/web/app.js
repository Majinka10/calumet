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
            controller: 'CajeroController'
        })
        .state('angular.productos', {
            url: '/productos',
            templateUrl: 'angular_productos.html',
            controller: 'ProductosController'
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

  
app.controller("MainAngular", function($scope){
    $scope.message = "¡MAIN DE ANGULAR!";
});

app.controller("MainUniversidad", function($scope){
    $scope.message = "¡MAIN DE UNIVERSIDAD!";
});

app.controller("ProductosController", function($scope){
    $scope.message = "Estás en la página de productos.";
});

app.controller("CajeroController", function($scope){
    $scope.message = "Estás en la página de cajero.";
});

app.controller("EscuelasController", function($scope){
    $scope.message = "Estás en la página de escuelas.";
});

app.controller("FacultadesController", function($scope){
    $scope.message = "Estás en la página de facultades.";
});



(function(){
  
  var app = angular.module('starter', ['ionic'])
  
  app.controller('newsCtrl', function($scope, $http, $ionicLoading){
    
    $scope.arrayNews=[];
    
    $scope.getNews = function(){
      
      $ionicLoading.show({
        duration: 3000,
        template: '<ion-spinner icon="android"></ion-spinner><br/>Obteniendo noticias!'
      });
      
      $http.get('data/news_mock.json')//Cambiar aquí por url de consulta que debe retornar un archivo json con la misma estructura del suministrado, de lo contrario, se debe modificar el objeto success que se retorna para obtener el array de datos de manera correcta
      .success(function(data){
        console.log(data);
        $scope.arrayNews=data;
      });
    };
    
    
    $scope.toggleNews = function(registro) {
//      registro.show = !registro.show;
      if ($scope.isNewShown(registro)) {
        $scope.shownGroup = null;
      } else {
        $scope.shownGroup = registro;
      }
    };
    
    $scope.isNewShown = function(registro) {
//      return registro.show;
      return $scope.shownGroup === registro;
    };
    
    
  });
  
  app.run(function($ionicPlatform) {
    $ionicPlatform.ready(function() {
      if(window.cordova && window.cordova.plugins.Keyboard) {

        cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);

        cordova.plugins.Keyboard.disableScroll(true);
      }

      if(window.StatusBar) {
        StatusBar.styleDefault();
      }

    });
  })
  
}());

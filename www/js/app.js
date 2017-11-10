// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
var exampleApp = angular.module('starter', ['ionic', 'ngCordova'])

.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    if(window.cordova && window.cordova.plugins.Keyboard) {
      // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
      // for form inputs)
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);

      // Don't remove this line unless you know what you are doing. It stops the viewport
      // from snapping when text inputs are focused. Ionic handles this internally for
      // a much nicer keyboard experience.
      cordova.plugins.Keyboard.disableScroll(true);
    }
    if(window.StatusBar) {
      StatusBar.styleDefault();
    }
  });
})

exampleApp.controller("ExampleController", function($scope, $cordovaBarcodeScanner, $http) {
  
      $scope.scanBarcode = function() {
          $cordovaBarcodeScanner.scan().then(function(imageData) {
              //alert(JSON.stringify(imageData, null, 4));
              $scope.data = imageData.text;
              console.log("Barcode Format -> " + imageData.format);
              console.log("Cancelled -> " + imageData.cancelled);     
          }, function(error) {
              console.log("An error happened -> " + error);
          });
      };

      $scope.name = "Manan";

      $scope.search = function(){
        $http.get(`https://5a60084d.ngrok.io/api/v1/item/?barcode=90930823`)
        .then(function(res){
         $scope.data2 = res.data;
          console.log(res.data);
        })
        
      }

      $scope.alert = function(){
        alert("You have successfully purchased this Item !!")
      }
  
  });


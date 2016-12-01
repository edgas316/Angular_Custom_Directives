// DDO - Directive Definition Object
(function(){
   var app = angular.module('directiveModule', []) 
   
   app.directive('helloWorld', function(){
       return{ // DDO
           template: 'Hello World'
       }
   })
}())
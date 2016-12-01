angular.module('moduleName')
    .directive('myDirective', function(){
    return {
        restrict:'EA',
        scope:{}, // This iselates the scope 
        template:'<div>{{myVal}}</div>',
        controller:controller,
        link:function(scope, element, attrs){}
    }
})
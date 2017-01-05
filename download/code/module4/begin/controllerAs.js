(function() {

  var controllerAs = function () {

    var template = '<button ng-click="vmc.addItem()">Add Item</button><ul>' +
                 '<li ng-repeat="item in vmc.items">{{ ::item.name }}</li></ul>',

        controller = function() {
          var vmc = this


            init();

            function init() {
               vmc.items = angular.copy(vmc.datasource);
            }

            vmc.addItem = function() {
                var name = 'New Directive Controller Item';
                vmc.add()(name);
                vmc.items.push({
                    name: name
                });
            }

        };

      return {
          restrict: 'EA', //Default in 1.3+
          scope: {
              datasource: '=',
              add: '&',
          },
          controller: controller,
          controllerAs:'vmc',
          bindToController:true,
          template: template
      };
  };

  angular.module('directivesModule')
    .directive('controllerAs', controllerAs);

}());

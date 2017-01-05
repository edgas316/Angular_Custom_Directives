(function() {

  var tableHelper = function () {

      var controller = ['$scope', function($scope) {
          var vmc = this,
              visibleProps = [];

          vmc.columns = [];
          vmc.reverse = false;
          vmc.orderby;

          $scope.$watchCollection('datasource', getColumns);

          //Handle sorting of data as user clicks on a column in the table
          vmc.sort = function(col) {
              if (vmc.columnmap) {
                  //The col value is the "friendly" value so we need to figure out the "raw" value
                  rawCol = getRawColumnName(col);
                  vmc.reverse = (vmc.orderby === rawCol) ? !vmc.reverse: false;
                  vmc.orderby = rawCol;
              }
              else {
                  vmc.reverse = (vmc.orderby === col) ? !vmc.reverse: false;
                  vmc.orderby = col;
              }
          }

          //Get the columns to display in the table header
          function getColumns() {

              //Since columnmap is an '@' property in this example (to demonstrate we can do that)
              //we need to convert it to an object.
              //Can use $scope.$eval or $parse service ($parse is in another example)
              //See https://docs.angularjs.org/guide/expression
              vmc.columnmap = $scope.$eval(vmc.columnmap);

              if (vmc.columnmap) {
                  //Use columnmap to handle displaying columns
                  vmc.columnmap.forEach(function(map) {
                      if (!map.hidden) {
                          for (var prop in map) {
                              if (prop !== 'hidden') pushColumns(prop, map[prop]);
                          }
                      }
                  });
              }
              else {
                  //No column map so default to raw properties
                  for (var prop in vmc.datasource[0]) {
                      pushColumns(prop, prop);
                  }
              }
          }

          //Load each row's values in the proper order based upon order of the columnmap
          //We could use ng-repeat="(key,value) in row" on the <td> but the order that data
          //is written out won't match with the headers. This functions handles that issue.
          vmc.getRowValues = function(row) {
              var sortedValues = [];
              if (vmc.columnmap) {
                  visibleProps.forEach(function(prop) {
                      sortedValues.push(row[prop]);
                  });
              }
              return sortedValues;
          };

          function getRawColumnName(friendlyCol) {
              var rawCol;
              vmc.columnmap.forEach(function(colMap) {
                  for (var prop in colMap) {
                      if (colMap[prop] === friendlyCol) {
                         rawCol = prop;
                         break;
                      }
                  }
                  return null;
              });
              return rawCol;
          }

          function pushColumns(rawCol, renamedCol) {
              visibleProps.push(rawCol);
              vmc.columns.push(renamedCol);
          }

      }];

      return {
          restrict: 'E',
          replace: true,
          scope: {
            columnmap: '@',
            datasource: '='
          },
          controller: controller,
          controllerAs: 'vmc',
          bindToController: true,
          templateUrl: 'tableHelperTemplate.html'
      };
  };

  angular.module('directivesModule')
    .directive('tableHelper', tableHelper);

}());

// Code goes here
agGrid.initialiseAgGridWithAngular1(angular);

var module = angular.module("example", ["agGrid"]);

module.controller("exampleCtrl", function($scope) {
  var x= 0;
  var columnDefs = [{
      headerName: "Make",
      field: "make",
      maxWidth: 120
    },
    {
      headerName: "Model",
      field: "model",
      maxWidth: 90
    },
    {
      headerName: "Price",
      field: "price",
      width: 150
    }
  ];
  var rowData = [
    {
      make: "Toyota",
      model: "Celica",
      price: 35000
    },
    {
      make: "Ford",
      model: "Mondeo",
      price: 32000
    },
    {
      make: "Porsche",
      model: "Boxter",
      price: 72000
    }
  ];
  const data = [0,1,2,3]

  $scope.grid = {
    columnDefs: columnDefs,
    rowData: rowData,
    rowSelection: 'single',
    angularCompileRows: true,

  };
  


  $scope.deleteRow = function() {
    var selected = $scope.grid.api.getFocusedCell();
    $scope.grid.rowData.splice(selected.rowIndex, 1);
    $scope.grid.api.setRowData($scope.grid.rowData)
  }
  $scope.clearData= function() {
    $scope.grid.api.setRowData([]);
  }
  $scope.getRowData= function() {
    var selected = $scope.grid.api.getFocusedCell();
    console.log('Row Data:');
    console.log(selected);

  }
  $scope.addItems = function() {
    var newItems = rowData;
    var res = $scope.grid.api.applyTransaction({
      add: newItems,
    });
    // printResult(res);
  }


});
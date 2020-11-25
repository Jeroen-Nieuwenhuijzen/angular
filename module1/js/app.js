(function () {
  'use strict';

  angular.module('LunchCheck', [])
  .controller('LunchCheckController', LunchCheckController);

  LunchCheckController.$inject = ['$scope'];
  function LunchCheckController($scope) {

    $scope.LunchCheck = function() {
      // trimming is already done by ng-model
      var divMessage = angular.element(document.querySelector('.message'));
      var inputText = angular.element(document.querySelector('input'));
      if ($scope.lunchitems === undefined || $scope.lunchitems === "") {
        $scope.result = 'Please enter data first';
        inputText.css("border", "3px solid red");
      } else {
        var items = $scope.lunchitems.split(',');
        var realItems = [];
        items.forEach(item => (item.trim() !== "" ? realItems.push(item.trim()) : ""));
        if (items.length === 0) {
          $scope.result = 'Please enter data first';
          divMessage.css("color", "red");
          inputText.css("border", "3px solid red");
        } else if (items.length <= 3) {
          $scope.result = 'Enjoy!';
          divMessage.css("color", "green");
          inputText.css("border", "3px solid green");
        } else {
          $scope.result = 'Too much!';
          divMessage.css("color", "green");
          inputText.css("border", "3px solid green");
        }
      }
    };

    $scope.removeResult = function() {
      var inputText = angular.element(document.querySelector('button'));
      $scope.result = '';
      inputText.css("border", "1px solid gray");

    }
  }

})();

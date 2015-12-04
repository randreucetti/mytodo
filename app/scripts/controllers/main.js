'use strict';

angular.module('mytodoApp')
  .controller('MainCtrl', function($scope, localStorageService) {

    // var todosInStore = localStorageService.get('todos');

    $scope.todos =  [];
    $scope.todo = '';

    $scope.$watch('todos', function() {
      localStorageService.set('todos', $scope.todos);
    }, true);

    $scope.addTodo = function() {
      if (!$scope.todos[$scope.todo]) {
        $scope.todos.push($scope.todo);
        $scope.todo = '';
      }
    };

    $scope.removeTodo = function(index) {
      $scope.todos.splice(index, 1);
    };

  });

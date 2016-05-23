'use strict';

angular.module('myApp.view1', ['ngRoute', 'sailsResource'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider
  .when('/view1', {
    templateUrl: 'view1/view1.html',
    controller: 'View1Ctrl as task'
  });
}])

.controller('View1Ctrl', function ($rootScope, sailsResource) {
  var self = this;
  var item = sailsResource('Item');
  
  this.itemResource = item;
  this.itemForm = new item();
  this.itemTypes = item.query();

  this.add = function () {
    self.itemForm.$save(function (newItem) {
      self.itemTypes.push(newItem);
    });
    self.itemForm = new item();
  };
  this.refreshServerCount = function () {
    // Tests the custom URL functionality
    self.serverCount = item.count();
  };

  this.cancel = function () {
    self.itemForm = new item();
  };
  
  this.deleteItem = function (item) {
    item.$delete();
  };
  
  this.editItem = function (item) {
    item.$editing = true;
  };
  
  this.saveItem = function (item) {
    item.$save();
    item.$editing = false;
  };
  
  this.checkItemCompleted = function (item){
    item.status = "completed";
    item.$save();
  };
  
  this.checkItemToDo = function (item){
    item.status = "To do";
    item.$save();
  };
  
  this.causeError = function () { 
    item.notFound(
      function (response) {
      },
      function (response) {
        self.error = response.statusCode;
      });
  };
  
  $rootScope.$on('$sailsResourceCreated', function () {
    self.created++;
  });
  
  $rootScope.$on('$sailsResourceUpdated', function () {
    self.updated++;
  });
  
  $rootScope.$on('$sailsResourceDestroyed', function () {
    self.destroyed++;
  });
  
  
})
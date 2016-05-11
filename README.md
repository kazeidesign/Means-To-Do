# MEAN-Sails-To-Do

To do example with MEAN stack with Sails.js = [Mean-Sails-Stack](github.com/kazeidesign/Mean-Sails-Stack).

### Under Development

<!--
## Ready to use

This app is ready to use. Clone this repository ``` git clone https://github.com/kazeidesign/Mean-Sails-Stack.git ``` in your server.

Run `` cd Mean-Sails-Stack/ && npm install && sails lift ``.

/!\ At the first `` sails lift ``, wait less than one minute for the automatical bower install.

Look in your browser at [localhost:1337](http://localhost:1337). Your Sails.js app is ready and you can use Angular.js.

## Getting Started

#### Needed

[Node.js](https://nodejs.org/en/): version 4.4.4 LTS or later

[Sails.js](http://sailsjs.org): version 0.12.3 or later

<a href="https://www.mongodb.com/" target="_blank">MongoDB</a>: version 2.4.0 or later

<a href="https://angularjs.org/" target="_blank">Angular.js</a>: version 1.5.5 or later

[Grunt-sass](https://www.npmjs.com/package/grunt-sass): version 1.2.0 or later

[Angular-Sails](https://github.com/janpantel/angular-sails): version 1.1.4 or later (/!\ Doesn't work with 2.0.0 Beta version)

[Angular-Material](https://github.com/angular/material): version 1.1.0 or later

[Html5-boilerplate](https://github.com/h5bp/html5-boilerplate): version 5.3.0 or later

---

#### CRUD between AngularJS and SailsJS

```javascript
var app = angular.module("MyApp", ['ngSails']);

//OPTIONAL! Set socket URL!
app.config(['$sailsProvider', function ($sailsProvider) {
    $sailsProvider.url = 'http://foo.bar';
}]);

app.controller("FooController", function ($scope, $sails) {
  $scope.bars = [];

  (function () {
    // Using .success() and .error()
    $sails.get("/bars")
      .success(function (data, status, headers, jwr) {
        $scope.bars = data;
      })
      .error(function (data, status, headers, jwr) {
        alert('Houston, we got a problem!');
      });

    // Using .then()
    $sails.get("/bars")
      .then(function(resp){
          $scope.bars = resp.data;
      }, function(resp){
        alert('Houston, we got a problem!');
      });

    // Watching for updates
    var barsHandler = $sails.on("bars", function (message) {
      if (message.verb === "created") {
        $scope.bars.push(message.data);
      }
    });
    
    // Stop watching for updates
    $scope.$on('$destroy', function() {
      $sails.off('bars', barsHandler);
    });
    
  }());
});
```

---

### Example

 Under development

API Reference
--------------

### Sails.JS REST ###
Angular Sails wraps the native sails.js REST functions. For further information check out [the sails docs](http://sailsjs.org/#!documentation/sockets) and [Mike's Screencast](http://www.youtube.com/watch?v=GK-tFvpIR7c)

### Native socket functions ###
The sails service is nothing more like the native socket.io object!

Enjoy!

[KazeiDesign](https://github.com/kazeidesign)

---

#### To do

* Doc
* To do example
* Post example
* Front office & Back office example
* [grunt-scss-lint](https://github.com/ahmednuaman/grunt-scss-lint)
* [grunt-sass-lint](https://github.com/sasstools/grunt-sass-lint)
* [grunt-postcss](https://github.com/nDmitry/grunt-postcss)

-->
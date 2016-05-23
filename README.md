# MEAN-Sails-To-Do

To do example with MEAN stack with Sails.js = [Mean-Sails-Stack](github.com/kazeidesign/Mean-Sails-Stack).

## Ready to use

This app is ready to use. Clone this repository ``` https://github.com/kazeidesign/Means-To-Do.git ``` in your server.

Run `` cd Means-To-Do/ && npm install && sails lift ``.

/!\ At the first `` sails lift ``, wait less than one minute for the automatical bower install.

Look in your browser at [localhost:1337](http://localhost:1337). Your Sails.js app is ready and you can play with it.

## Getting Started

#### Needed

This To-do example is based on [MEAN-Sails-Stack](https://github.com/kazeidesign/Mean-Sails-Stack).


---

## How-to create this To-Do

#### Model

```javascript
module.exports = {
  schema: true,
  attributes: {
    feature: {
      type: 'string',
      required: true
    },
    status: {
      type: 'string',
      defaultsTo: 'To do'
    }
  }
};
```

#### API

Run `` sails generate api item `` and initialize `` task `` in the `` .config `` of your module.

```javascript

.config(['$routeProvider', function($routeProvider) {
  $routeProvider
  .when('/view1', {
    templateUrl: 'view1/view1.html',
    controller: 'View1Ctrl as task' // Initialize item
  });
}])

```

#### List all item

```javascript
.controller('View1Ctrl', function ($rootScope, sailsResource) {
  var self = this;
  var item = sailsResource('Item', {
    nocache: {method: 'GET', isArray: true, cache: false},
    count: {method: 'GET', url: '/item/count'},
    notFound: {method: 'GET', url: '/whoa/there'}
  });
  
  this.itemResource = item;
  this.itemTypes = item.query();
  
  })
```


#### Create a new item

```javascript
  this.itemForm = new item();
  this.add = function () {
    self.itemForm.$save(function (newItem) {
      self.itemTypes.push(newItem);
    });
    self.itemForm = new item();
  };
  
  
// Cancel
  this.cancel = function () {
    self.simpleForm = new simple();
  };
  
  // Return an error in the console
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
```

#### Delete an item

```javascript
  this.deleteitem = function (item) {
    item.$delete();
  };
  
  [...]
  
  $rootScope.$on('$sailsResourceDestroyed', function () {
    self.destroyed++;
  });
```

#### Update an item

```javascript
  this.editItem = function (item) {
    item.$editing = true;
  };
  
  this.saveItem = function (item) {
    item.$save();
    item.$editing = false;
  };
  
  
  [...]
  
  $rootScope.$on('$sailsResourceUpdated', function () {
    self.updated++;
  });
  
```

#### Check/Uncheck an item

```javascript
  this.checkItemCompleted = function (item){
    item.status = "completed";
    item.$save();
  };
  
  this.checkItemToDo = function (item){
    item.status = "To do";
    item.$save();
  };
```

#### HTML

```html
  <md-card-title flex>
    <md-card-title-text>
      <md-input-container>
        <md-checkbox class="checkbox" ng-model="item.status" ng-true-value="'completed'" ng-false-value="'To do'" aria-label="Checkbox 1" ng-click="task.checkItemToDo(item)"></md-checkbox>
        {{ item.feature }}
      </md-input-container>
    </md-card-title-text>
  </md-card-title>
```

#### SASS

```css
/* variable */

$white: #fff;

/* Reset */

html, body {
  background-color: inherit;
}

i {
    cursor: pointer;
}

/* Utilities */

.cl--white {
  color: $white;
}


body {
  background: url(https://images.unsplash.com/photo-1422393462206-207b0fbd8d6b?format=auto&auto=compress&dpr=1&crop=entropy&fit=crop&w=1920&h=1280&q=80);
  background-size: cover;
  background-position: center center;
  background-attachment: fixed;
} 

.container {
  margin: 0 auto;
}

md-card md-card-title {
    padding: 0px 16px;
}

.completed_task .ng-binding {
  text-decoration: line-through;
}
---


--------------

Enjoy!

[KazeiDesign](https://github.com/kazeidesign)
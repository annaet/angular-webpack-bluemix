import angular from 'angular'
import './bower_components/jquery/dist/jquery'
import './bower_components/angular-bootstrap/ui-bootstrap'
import './bower_components/angular-bootstrap/ui-bootstrap-tpls'
import './bower_components/angular-ui-router/release/angular-ui-router'
import './bower_components/bootstrap/dist/js/bootstrap'

import ExampleController from './app/routes/example/example.controller'
import ExampleDirective from './app/directives/example.directive'
import ExampleService from './app/services/example.service'

import './styles/styles.scss'

angular.module('angularWebpack', [
  'ui.router',
  'ui.bootstrap'
])

.controller('exampleController', ExampleController)
.service('exampleService', ExampleService)
.directive('exampleDirective', () => new ExampleDirective)

.config(function($stateProvider, $urlRouterProvider, $locationProvider) {
  $locationProvider.html5Mode({
    enabled: true
  })

  $stateProvider
    .state('home', {
      url: '/',
      templateUrl: 'app/routes/example/example.html',
      controller: 'exampleController',
      controllerAs: 'ctrl'
    })

  $urlRouterProvider
    .otherwise('/')
})

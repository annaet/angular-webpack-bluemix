import angular from 'angular'

import ExampleController from './app/controllers/example.controller'
import ExampleDirective from './app/directives/example.directive'
import ExampleService from './app/services/example.service'

import './styles/styles.scss'

angular.module('angularWebpack', [])
  .controller('exampleController', ExampleController)
  .service('exampleService', ExampleService)
  .directive('exampleDirective', () => new ExampleDirective)

import angular from 'angular';
import {MainCtrl} from './main/MainCtrl';
import './styles/styles.scss';

angular.module('angularWebpack', [])
.controller('MainCtrl', MainCtrl);

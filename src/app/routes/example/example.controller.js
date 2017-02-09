export default class ExampleController {
  constructor($scope, exampleService) {
    $scope.message = 'Hello world!'

    exampleService.getData().then(result => $scope.data = result)

    $scope.clickIt = () => {
      alert('ES2015!!!')
    }
  }
}

export default class ExampleController {
  constructor(exampleService) {
    this.message = 'Hello world!'

    exampleService.getData().then(result => this.data = result)
  }

  clickIt() {
    alert('ES2015!!!')
  }
}

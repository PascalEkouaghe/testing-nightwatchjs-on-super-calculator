module.exports = {
  url:'http://juliemr.github.io/protractor-demo/',
  elements: {
    firstOp: 'input[ng-model=first]',
    secondOp: 'input[ng-model=second]',
    calculate: '#gobutton',
    result: 'h2.ng-binding',
    operator: 'select[ng-model=operator]'
  }
}

(function() {
  var superCalculatorCommands = {
    calculate: function() {
      this.click('@calculate').api.pause(2500);
      return this;
    }
  };
  module.exports = {
    commands: [superCalculatorCommands],
    url:'http://juliemr.github.io/protractor-demo/',
    elements: {
      firstOp: 'input[ng-model=first]',
      secondOp: 'input[ng-model=second]',
      calculate: '#gobutton',
      result: 'h2.ng-binding',
      operator: 'select[ng-model=operator]'
    }
  }
})();

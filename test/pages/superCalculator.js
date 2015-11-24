(function() {
  function getHistoryTableCellSelector(x, y) {
    return 'tr:nth-child(' + x + ') td:nth-child(' + y + ')';
  }

  var superCalculatorCommands = {
    calculate: function() {
      this.click('@calculate').api.pause(2500);
      return this;
    },
    assertHistoryContains: function() {
      for(var i = arguments.length; i > 0 ; i--) {
        var expectedHistoryElement = arguments[i - 1];
        this.assert.containsText(getHistoryTableCellSelector(i, 2) , expectedHistoryElement.expr)
        .assert.containsText(getHistoryTableCellSelector(i, 3), expectedHistoryElement.result);
      }
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

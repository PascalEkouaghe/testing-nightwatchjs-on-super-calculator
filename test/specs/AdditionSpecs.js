(function() {
  module.exports = {
    before : function(client) {
      console.log('Setting up...');
      this.superCalculator = client.page.superCalculator();
      this.superCalculator.navigate();
    },

    after : function(client) {
      client.end();
      console.log('Closing down...');
    },

    '1 + 2 = 3': function(client) {
      this.superCalculator.setValue('@firstOp', 1)
      .setValue('@secondOp', 2)
      .calculate()
      .assert.containsText('@result', '3');
    },

    '3 - 1 = 2': function(client) {
      this.superCalculator.setValue('@firstOp', 3)
      .setValue('@secondOp', 1)
      .setValue('@operator', '-')
      .calculate()
      .assert.containsText('@result', '2');
    }
  }
})();

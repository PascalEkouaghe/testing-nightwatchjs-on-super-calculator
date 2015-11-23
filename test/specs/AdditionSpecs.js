module.exports = {
  before : function(browser) {
    browser.url('http://juliemr.github.io/protractor-demo/')
    .waitForElementVisible('body', 100);
    console.log('Setting up...');
  },

  after : function(browser) {
    browser.end();
    console.log('Closing down...');
  },

  '1 + 2 = 3': function(browser) {
    browser.setValue('input[ng-model=first]', 1)
    .setValue('input[ng-model=second]', 2)
    .click('#gobutton')
    .pause(2500)
    .assert.containsText('h2.ng-binding', '3');
  }
}

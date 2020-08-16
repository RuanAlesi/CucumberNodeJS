const assert = require('assert');
const { Given, When, Then} = require('cucumber');
const myFunctions = require('./myFunctions');

Given('today is {string}', function (givenDay) {
    this.today = givenDay;
});

When('I ask whether it\'s Friday yet', function () {
    this.actualAnswer = myFunctions.IsItFriday(this.today);
});

Then('I should be told {string}', function (expectedAnswer) {
    assert.equal(this.actualAnswer, expectedAnswer);
});
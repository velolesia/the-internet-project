var expect = require('chai').expect;

describe("Test dropdown menu", function(){
	it("Select first option", function(){
		browser.url("/dropdown");
		browser.selectByValue("#dropdown", "1");
		expect(browser.getValue("#dropdown")).to.be.equal("1")
	})
})
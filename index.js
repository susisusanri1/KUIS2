const { Builder, By, Key } = require("selenium-webdriver");
var assert = require('assert');

async function login() {
    let driver = await new Builder().forBrowser("chrome").build();

    await driver.get('https://s2.demo.opensourcecms.com/orangehrm/symfony/web/index.php/auth/log');
    await driver.findElement(By.name("txtUsername")).sendKeys('opensourcecms');
    await driver.findElement(By.name("txtPassword")).sendKeys('opensourcecms');
    await driver.findElement(By.name("Submit")).click();

    let getValue = await driver.findElement(By.xpath('//li')).getText();
    try {
        assert.equal("Welcome Admin", getValue)
        console.log('Test Success')
    } catch (e) {
        console.log(e);
    }
}

login();
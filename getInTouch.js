var webdriver = require("selenium-webdriver");
var assert = require('assert');
const {By, until} = require('selenium-webdriver');

 
var appium = "http://localhost:4723/wd/hub";


var caps = [{
    platformName: 'Android'
    , platformVersion: '11.0'
    , deviceName: 'Device 1'
    , automationName: 'UIAutomator2'
    , browserName: 'Chrome'

},
{
    platformName: 'Android'
    , platformVersion: '11.0'
    , deviceName: 'Device 2'
    , automationName: 'UIAutomator2'
    , browserName: 'Chrome'
}];


async function testFormGetInTouch(caps){
    try{
        var driver = new webdriver.Builder()
            .usingServer(appium)
            .withCapabilities(caps)
            .build();

        await driver.get('https://decemberlabs.com');


        const hamburguerMenu = await driver.findElement(By.xpath('//a[@class="btn_mobile"]'))
        await hamburguerMenu.click();
        await driver.wait(until.elementLocated(By.xpath('//a[text()="Get in touch"]')), 3000)
        const getInTouchButton = await driver.findElement(By.xpath('//a[text()="Get in touch"]'));
        await driver.wait(until.elementIsVisible(getInTouchButton), 2000);
        await driver.wait(until.elementIsEnabled(getInTouchButton), 2000);
        await getInTouchButton.click();
        const sendButton = await driver.findElement(By.id('wpforms-submit-872'));
        await sendButton.click();
        const fieldName = await driver.findElement(By.id('wpforms-872-field_0'));
        assert.match( clasess = await fieldName.getAttribute("class"), /wpforms-error/)
        const fieldEmail = await driver.findElement(By.id('wpforms-872-field_1'));
        assert.match( clasess = await fieldEmail.getAttribute("class"), /wpforms-error/)
        const fieldMessage = await driver.findElement(By.id('wpforms-872-field_2'));
        assert.match( clasess = await fieldMessage.getAttribute("class"), /wpforms-error/)
        const fieldCompany = await driver.findElement(By.id('wpforms-872-field_6'));
        
        await fieldName.sendKeys("test")
        await fieldEmail.sendKeys("test@decemberlabs.com")
        await fieldMessage.sendKeys("test")
        await fieldCompany.sendKeys("test")
        await sendButton.click();
        await driver.wait(until.elementLocated(By.id('wpforms-confirmation-872')),10000)
        
       

        driver.quit();
    }

    catch(err){
        handleFailure(err, driver)
    }

}
    caps.map(async (capabilities) => {
        await testFormGetInTouch(capabilities);
        });


function handleFailure(err, driver) {
     console.error('Error Test Failed: !\n', err.stack, '\n');
     driver.quit();
}
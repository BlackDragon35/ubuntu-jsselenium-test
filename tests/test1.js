//require("chromedriver");
const {By,Key,Builder} = require("selenium-webdriver");
const chrome = require('selenium-webdriver/chrome');

async function example(){
 
	var searchString = "Automation testing with Selenium";

	console.log("custom selenium test")

	try{
		//To wait for browser to build and launch properly
		let driver = await new Builder().forBrowser("chrome")
		.setChromeOptions(new chrome.Options().addArguments('--headless').addArguments("--no-sandbox").addArguments('--disable-gpu').addArguments("--disable-extensions").addArguments("--disable-dev-shm-usage"))
		.build();

		//To fetch http://google.com from the browser with our code.
		await driver.get("http://google.com");
			
		//To send a search query by passing the value in searchString.
		await driver.findElement(By.name("q")).sendKeys(searchString,Key.RETURN);

		//Verify the page title and print it
		var title = await driver.getTitle();
		console.log('Title is:',title);

		//It is always a safe practice to quit the browser after execution
		await driver.quit();
	}catch (ex){
		console.log('error');
		console.log(ex.stack);
	}         
}
example()
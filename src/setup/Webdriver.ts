// require('selenium-webdriver/chrome')
// require('selenium-webdriver/firefox')
// require('chromedriver')
// require('geckodriver')
// const { Builder } = require('selenium-webdriver')
import { WebDriver, Builder } from 'selenium-webdriver'
import { Options as ChromeOptions, ServiceBuilder as ChromeServiceBuilder } from 'selenium-webdriver/chrome'
import { Options as FirefoxOptions, ServiceBuilder as FirefoxServiceBuilder } from 'selenium-webdriver/firefox'
import { Env } from '../Env'

export class Webdriver {

	public static driver: WebDriver

	public static async init(): Promise<void> {
		if (Webdriver.driver != undefined)
			return

		let toBuild: Builder = new Builder()
		if (Env.nmBrowser == "chrome")
			toBuild = await Webdriver.getChromeBuild(toBuild)
		if (Env.nmBrowser == "firefox")
			toBuild = await Webdriver.getFirefoxBuild(toBuild)

		Webdriver.driver = toBuild.build()
	}

	private static async getFirefoxBuild(toBuild: Builder): Promise<Builder> {
		const firefoxOptions = new FirefoxOptions()
		firefoxOptions.addArguments(...Env.arNmFirefoxOptionArgument)
		toBuild = await new Builder().forBrowser(Env.nmBrowser)
		toBuild.setFirefoxOptions(firefoxOptions)
		if (Env.nmFirefoxServiceArgument) {
			const firefoxService = new FirefoxServiceBuilder(Env.nmFirefoxServiceArgument)
			toBuild.setFirefoxService(firefoxService)
		}
		return toBuild
	}

	private static async getChromeBuild(toBuild: Builder): Promise<Builder> {
		const chromeOptions = new ChromeOptions()
		chromeOptions.addArguments(...Env.arNmChromeOptionArgument)
		toBuild = await new Builder().forBrowser(Env.nmBrowser)
		toBuild.setChromeOptions(chromeOptions)
		if (Env.nmChromeServiceArgument) {
			const chromeService = new ChromeServiceBuilder(Env.nmChromeServiceArgument)
			toBuild.setChromeService(chromeService)
		}
		return toBuild
	}
}

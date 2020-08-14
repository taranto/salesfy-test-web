import { Webdriver } from "./setup/Webdriver"
import { Env } from "./Env"
import { By, until, WebElement } from 'selenium-webdriver'

async function querySelector(nmSelector: string) : Promise<WebElement> {
	const webElCond = until.elementLocated(By.css(nmSelector))
	const webEl = await Webdriver.driver.wait(webElCond, Env.msAwait1)
	const webElCond2 = until.elementIsVisible(webEl)
	const webEl2 = await Webdriver.driver.wait(webElCond2, Env.msAwait1)
	return webEl2
}

async function getElementById(idElement: string) : Promise<WebElement> {
	const webElCond = until.elementLocated(By.id(idElement))
	const webEl = await Webdriver.driver.wait(webElCond, Env.msAwait1)
	const webElCond2 = until.elementIsVisible(webEl)
	const webEl2 = await Webdriver.driver.wait(webElCond2, Env.msAwait1)
	return webEl2
}

async function getElementByXPath(xpath: string) : Promise<WebElement> {
	const webElCond = until.elementLocated(By.xpath(xpath))
	const webEl = await Webdriver.driver.wait(webElCond, Env.msAwait1)
	return webEl
}

async function getElementByCss(css: string) : Promise<WebElement> {
	const webElCond = until.elementLocated(By.css(css))
	const webEl = await Webdriver.driver.wait(webElCond, Env.msAwait1)
	return webEl
}

async function isElementVisible(xpath: string) : Promise<boolean> {
	try {
		const webEl = await getElementByXPath(xpath)
		return true
	} catch(e) {}
	return false
}

async function isElementByCssVisible(css: string) : Promise<boolean> {
	const webEl = await getElementByCss(css)
	const isVisible =  webEl !== undefined
	return isVisible
}

async function setInputValue(xpath: string, value: string) : Promise<void> {
	const webEl = await getElementByXPath(xpath)
	await webEl.clear()
	await webEl.sendKeys(value)
}

async function elementClick(xpath: string) : Promise<void> {
	const webEl = await getElementByXPath(xpath)
	await webEl.click()
}

async function elementFocus(xpath: string) : Promise<void> {
	const webEl = await getElementByXPath(xpath)
	await webEl.sendKeys("")
}

// async function isImagePresent(xpath: string) : Promise<boolean> {
// 	const webEl = await getElementByXPath(xpath)
// 	//TODO qual é esta variavel?
// 	const present : any = await Webdriver.driver.executeScript(
// 		'return (typeof arguments[0].naturalWidth!=\"undefined\" && arguments[0].naturalWidth>0)', webEl)
// 	const isPresent = await expect(present).toBe(true)
// 	return isPresent
// }

async function goTo(url: string) : Promise<void> {
	await Webdriver.driver.get(url)
}

function sleep(msSleep: number) : void { //TODO e se fosse Promise based?
	const msUnixTime = new Date().getTime()
	while (new Date().getTime() < msUnixTime + msSleep) { }
}

export {
	querySelector, getElementById, getElementByXPath, isElementVisible,
	setInputValue, elementClick,
	elementFocus, sleep, goTo, isElementByCssVisible, getElementByCss
}

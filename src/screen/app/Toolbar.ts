import { elementClick, setInputValue, sleep, getElementByXPath, isElementVisible } from "../../DomHelper"

const xpAddButton = '//*[@id="screen-toolbar"]/div[2]/button'
const xpInputSearchField = '//*[@id="slide"]/div[1]/div[1]/input'
const xpSearchButton = '//*[@id="screen-toolbar"]/div[2]/div/button'
const xpSaveButton = '//*[@id="screen-toolbar"]/div[3]/button'
const xpClearSearchButton = '//*[@id="slide"]/button'
const xpGroupAddButton = '//*[@id="root"]/div[1]/div/main/div/div[2]/div/div[1]/div/div[3]/div/div/button'

export default class Toolbar {
	public static async pressAddButton() : Promise<void> {
		await elementClick(xpAddButton)
	}

	public static async pressSaveButton() : Promise<void> {
		await elementClick(xpSaveButton)
	}

	public static async pressSearchButton() : Promise<void> {
		await elementClick(xpSearchButton)
	}

	public static async pressClearSearchButton() : Promise<void> {
		await elementClick(xpClearSearchButton)
	}

	public static async setDsSearch(dsSearch: string) : Promise<void> {
		const isSearchButtonVisible = await isElementVisible(xpSearchButton)
		if (isSearchButtonVisible)
			await Toolbar.pressSearchButton()
		await sleep(200)
		await setInputValue(xpInputSearchField, dsSearch)
	}
}

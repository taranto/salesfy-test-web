import { elementClick, setInputValue, sleep, getElementByXPath, isElementVisible } from "../../DomHelper"
import Toolbar from "../app/Toolbar"

const xpGroupAddButton = '//*[@id="root"]/div[1]/div/main/div/div[2]/div/div[1]/div/div[3]/div/div/button'
const xpGroupClearSearchButton = '//*[@id="root"]/div[1]/div/main/div/div[2]/div/div[1]/div/div[2]/div/div[2]/button'
const xpGroupSearchButton = '//*[@id="root"]/div[1]/div/main/div/div[2]/div/div[1]/div/div[2]/div/input'

export default class GroupToolbar extends Toolbar {
	public static async pressAddButton() : Promise<void> {
		await elementClick(xpGroupAddButton)
	}

	public static async pressSaveButton() : Promise<void> {

	}

	public static async pressSearchButton() : Promise<void> {

	}

	public static async pressClearSearchButton() : Promise<void> {
		await elementClick(xpGroupClearSearchButton)
	}

	public static async setDsSearch(dsSearch: string) : Promise<void> {
		await setInputValue(xpGroupSearchButton, dsSearch)
	}
}

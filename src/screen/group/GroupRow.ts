import { elementClick, setInputValue, getElementByXPath } from "../../DomHelper"
import { WebElement } from "selenium-webdriver"

const xpRelNmGroupInput = `/td/div/div/input`
const xpRelNmGroup =  `/td[2]/div/p/b`
const xpRelGroupOpen =  `/td[1]/button`
const xpRelGroupFavorite =  `/td[2]/div/p/button[2]`
const xpRelGroupEdit =  `/td[4]/div/button[1]`
const xpRelGroupDelete = `/td[4]/div/button[2]`
const xpRelNewUser = `/td[2]/div/p/button[1]`
const xpRelGroupDeleteConfirm = `/td/div/div/button[1]`
const xpRelGroupDeleteCancel = `/td/div/div/button[2]`
const xpRelGroupIsOpen = `/td[1]/button`

export default class GroupRow {

	public static async setNmGroup(xpBeforeRow: string, nmGroup : string) : Promise<void> {
		await setInputValue(xpBeforeRow + xpRelNmGroupInput, nmGroup)
	}

	public static async getNmValue(xpBeforeRow:string) : Promise<string> {
		const webEl = await getElementByXPath(xpBeforeRow+xpRelNmGroup)
		const dsText = await webEl.getText()
		return dsText
	}

	public static async isOpen(xpBeforeRow:string) : Promise<boolean> {
		const webEl = await getElementByXPath(xpBeforeRow+xpRelGroupIsOpen)
		const cssStyle = await webEl.getAttribute("style")
		const arCssStyleWord = cssStyle.split(" ")
		let isOpen = false
		for (let index = 0; index < arCssStyleWord.length; index++) {
			if (arCssStyleWord[index] == "transform:") {
				isOpen = arCssStyleWord[index+1] != "none;"
			}
		}
		return isOpen
	}

	public static async clickGroupOpen(xpBeforeRow: string) : Promise<void> {
		if (this.isOpen(xpBeforeRow)) {
			return
		}
		await elementClick(xpBeforeRow + xpRelGroupOpen)
	}

	public static async clickGroupClose(xpBeforeRow: string) : Promise<void> {
		if (!this.isOpen(xpBeforeRow)) {
			return
		}
		await elementClick(xpBeforeRow + xpRelGroupOpen)
	}

	public static async clickNewUser(xpBeforeRow: string) : Promise<void> {
		await elementClick(xpBeforeRow + xpRelNewUser)
	}

	public static async clickGroupFavorite(xpBeforeRow: string) : Promise<void> {
		await elementClick(xpBeforeRow + xpRelGroupFavorite)
	}

	public static async clickGroupEdit(xpBeforeRow: string) : Promise<void> {
		await elementClick(xpBeforeRow + xpRelGroupEdit)
	}

	public static async clickGroupDelete(xpBeforeRow: string) : Promise<void> {
		await elementClick(xpBeforeRow + xpRelGroupDelete)
	}

	public static async clickGroupDeleteConfirm(xpBeforeRow: string) : Promise<void> {
		await elementClick(xpBeforeRow + xpRelGroupDeleteConfirm)
	}

	public static async clickGroupDeleteCancel(xpBeforeRow: string) : Promise<void> {
		await elementClick(xpBeforeRow + xpRelGroupDeleteCancel)
	}
}

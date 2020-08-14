import { elementClick, setInputValue, getElementByXPath, elementFocus, sleep } from "../../DomHelper"
import { WebElement } from "selenium-webdriver"
import { Env } from "../../Env";

const xpRelChannelCard = "/div/div" //*[@id="channel-list"]/div/div/div[1]/div/div/ul[1]/li[1] ->/div/div<-
const xpRelChannelCardNm = xpRelChannelCard + "/div[2]/h3"
const xpRelChannelCardDs = xpRelChannelCard + "/div[2]/p"
const xpRelChannelCardEdit = xpRelChannelCard + "/div[3]/div/div/div/ul/li[1]"
const xpRelChannelCardMenu = xpRelChannelCard + '/div[3]/div/button'
const xpRelChannelCardDelete = xpRelChannelCard + '/div[3]/div/div/div/ul/li[4]'
const xpRelChannelCardDeleteConfirm = xpRelChannelCard + '/div[3]/div[2]/div/button[1]'
const xpRelChannelCardDeleteCancel = xpRelChannelCard + '/div[3]/div[2]/div/button[2]'

export class ChannelCard {

	public static async getNmValue(xpBeforeCard: string): Promise<string> {
		const webEl = await getElementByXPath(xpBeforeCard + xpRelChannelCardNm)
		const dsText = await webEl.getText()
		return dsText
	}

	public static async getDsValue(xpBeforeCard: string): Promise<string> {
		const webEl = await getElementByXPath(xpBeforeCard + xpRelChannelCardDs)
		const dsText = await webEl.getText()
		return dsText
	}

	public static async getElementByXPath(xpBeforeCard: string): Promise<WebElement> {
		const webEl = await getElementByXPath(xpBeforeCard + xpRelChannelCard)
		return webEl
	}

	public static async clickMenu(xpBeforeCard: string): Promise<void> {
		await elementClick(xpBeforeCard + xpRelChannelCardMenu)
	}

	public static async clickEdit(xpBeforeCard: string): Promise<void> {
		await elementClick(xpBeforeCard + xpRelChannelCardEdit)
	}

	public static async clickDelete(xpBeforeCard: string): Promise<void> {
		await elementClick(xpBeforeCard + xpRelChannelCardDelete)
	}

	public static async clickDeleteConfirm(xpBeforeCard: string): Promise<void> {
		await elementFocus(xpBeforeCard + xpRelChannelCardDeleteConfirm)
		await sleep(Env.msAwait1)
		await elementClick(xpBeforeCard + xpRelChannelCardDeleteConfirm)
	}

	public static async clickDeleteCancel(xpBeforeCard: string): Promise<void> {
		await elementFocus(xpBeforeCard + xpRelChannelCardDeleteCancel)
		await sleep(Env.msAwait1)
		await elementClick(xpBeforeCard + xpRelChannelCardDeleteCancel)
	}
}

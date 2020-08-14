import { elementClick, getElementByXPath, elementFocus, sleep} from "../../DomHelper"
import { WebElement } from "selenium-webdriver"
import { Env } from "../../Env";

const xpRelContentCard = "/div/div" //*[@id="root"]/div[1]/div/main/div[2]/div/div/div[1]/div/div/ul[1]/li[1] ->/div/div
const xpRelContentCardNm = xpRelContentCard + "/a/div[2]/h3"
const xpRelContentCardDs = xpRelContentCard + "/a/div[2]/p"
const xpRelContentCardMenu = xpRelContentCard + '/div/div[2]/button'
const xpRelContentCardDelete = xpRelContentCard + '/div/div[2]/div/div/ul/li[3]'
const xpRelContentCardDeleteConfirm = xpRelContentCard + '/div/div[3]/div/button[1]'
const xpRelContentCardDeleteCancel = xpRelContentCard + '/div/div[3]/div/button[2]'
const xpRelContentCardEdit = xpRelContentCard + '/div/div[2]/div/div/ul/li[1]'

export class ContentCard {

	public static async getNmValue(xpBeforeCard:string) : Promise<string> {
		const webEl = await getElementByXPath(xpBeforeCard+xpRelContentCardNm)
		const dsText = await webEl.getText()
		return dsText
	}

	public static async getDsValue(xpBeforeCard:string) : Promise<string> {
		const webEl = await getElementByXPath(xpBeforeCard+xpRelContentCardDs)
		const dsText = await webEl.getText()
		return dsText
	}

	public static async getElementByXPath(xpBeforeCard:string) : Promise<WebElement> {
		const webEl = await this.getElementByXPath(xpBeforeCard+xpRelContentCard)
		return webEl
	}

	public static async clickMenu(xpBeforeCard:string) : Promise<void> {
		await elementClick(xpBeforeCard+xpRelContentCardMenu)
	}

	public static async clickEdit(xpBeforeCard:string) : Promise<void> {
		await elementClick(xpBeforeCard+xpRelContentCardEdit)
	}

	public static async clickDelete(xpBeforeCard:string) : Promise<void> {
		await elementClick(xpBeforeCard+xpRelContentCardDelete)
	}

	public static async clickDeleteConfirm(xpBeforeCard:string) : Promise<void> {
		await elementFocus(xpBeforeCard+xpRelContentCardDeleteConfirm)
		await sleep(Env.msAwait1)
		await elementClick(xpBeforeCard+xpRelContentCardDeleteConfirm)
	}

	public static async clickDeleteCancel(xpBeforeCard:string) : Promise<void> {
		await elementFocus(xpBeforeCard+xpRelContentCardDeleteCancel)
		await sleep(Env.msAwait1)
		await elementClick(xpBeforeCard+xpRelContentCardDeleteCancel)
	}
}

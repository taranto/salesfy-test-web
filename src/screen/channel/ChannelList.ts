import { elementClick, setInputValue, getElementByXPath } from "../../DomHelper"
import { WebElement } from "selenium-webdriver"
import { ChannelCard } from './ChannelCard'

const xpChannelListBaseCard = (y: number, x?: number) => {
	if (x != undefined)
		return `//*[@id="channel-list"]/div/div/div[1]/div/div/ul[${y + 1}]/li[${x + 1}]`
	else
		return `//*[@id="channel-list"]/div/div/div[1]/div/div/ul[${y + 1}]/li`
}
const xpListEmpty = '//*[@id="channel-list"]/div'

export class ChannelList {
	public static async getNmValue(y: number, x: number): Promise<string> {
		const xpUntilCard = await xpChannelListBaseCard(y, x)
		const dsText = await ChannelCard.getNmValue(xpUntilCard)
		return dsText
	}

	public static async getDsValue(y: number, x: number): Promise<string> {
		const xpUntilCard = await xpChannelListBaseCard(y, x)
		const dsText = await ChannelCard.getDsValue(xpUntilCard)
		return dsText
	}

	public static async getElement(y: number, x: number): Promise<WebElement> {
		const xpUntilCard = await xpChannelListBaseCard(y, x)
		const webEl = await ChannelCard.getElementByXPath(xpUntilCard)
		return webEl
	}

	public static async clickMenu(y: number, x: number): Promise<void> {
		const xpUntilCard = await xpChannelListBaseCard(y, x)
		await ChannelCard.clickMenu(xpUntilCard)
	}

	public static async clickEdit(y: number, x: number): Promise<void> {
		const xpUntilCard = await xpChannelListBaseCard(y, x)
		await ChannelCard.clickEdit(xpUntilCard)
	}

	public static async clickDelete(y: number, x: number): Promise<void> {
		const xpUntilCard = await xpChannelListBaseCard(y, x)
		await ChannelCard.clickDelete(xpUntilCard)
	}

	public static async clickDeleteConfirm(y: number, x: number): Promise<void> {
		const xpUntilCard = await xpChannelListBaseCard(y, x)
		await ChannelCard.clickDeleteConfirm(xpUntilCard)
	}

	public static async clickDeleteCancel(y: number, x: number): Promise<void> {
		const xpUntilCard = await xpChannelListBaseCard(y, x)
		await ChannelCard.clickDeleteCancel(xpUntilCard)
	}

	public static async isListEmpty(): Promise<boolean> {
		try {
			const webEl = await getElementByXPath(xpListEmpty)
			const isListEmptyLabelPresent = webEl != undefined
			return isListEmptyLabelPresent
		} catch (e) {}
		return false
	}
}

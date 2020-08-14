import { elementClick, setInputValue, getElementByXPath } from "../../DomHelper"
import { WebElement } from "selenium-webdriver"
import { ContentCard } from './ContentCard'

const xpContentListUntilCard = (y: number, x?: number) => {
	if (x != undefined)
		return `//*[@id="root"]/div[1]/div/main/div[2]/div/div/div[1]/div/div/ul[${y + 1}]/li[${x + 1}]`
	else
		return `//*[@id="root"]/div[1]/div/main/div[2]/div/div/div[1]/div/div/ul[${y + 1}]/li`
}
const xpListEmpty = '//*[@id="root"]/div[1]/div/main/div[2]/div'
const xpQuickAddCard = '//*[@id="root"]/div[1]/div/main/div[2]/div/div/div[1]/div/div/ul[1]/li[1]/div/div/div/div[2]/button'

export default class ContentList {
	public static async getListElementNmValue(y: number, x: number): Promise<string> {
		const xpUntilCard = await xpContentListUntilCard(y, x)
		const dsText = await ContentCard.getNmValue(xpUntilCard)
		return dsText
	}

	public static async getListElementDsValue(y: number, x: number): Promise<string> {
		const xpUntilCard = await xpContentListUntilCard(y, x)
		const dsText = await ContentCard.getDsValue(xpUntilCard)
		return dsText
	}

	public static async getListElement(y: number, x: number): Promise<WebElement> {
		const xpUntilCard = await xpContentListUntilCard(y, x)
		const webEl = await ContentCard.getElementByXPath(xpUntilCard)
		return webEl
	}

	public static async isListElementThere(y: number, x: number): Promise<boolean> {
		try {
			const webEl = await ContentList.getListElement(0, 1)
			return webEl != undefined
		} catch (e) { }
		return true
	}

	public static async clickMenu(y: number, x: number): Promise<void> {
		const xpUntilCard = await xpContentListUntilCard(y, x)
		await ContentCard.clickMenu(xpUntilCard)
	}

	public static async clickEdit(y: number, x: number): Promise<void> {
		const xpUntilCard = await xpContentListUntilCard(y, x)
		await ContentCard.clickEdit(xpUntilCard)
	}

	public static async clickDelete(y: number, x: number): Promise<void> {
		const xpUntilCard = await xpContentListUntilCard(y, x)
		await ContentCard.clickDelete(xpUntilCard)
	}

	public static async clickDeleteConfirm(y: number, x: number): Promise<void> {
		const xpUntilCard = await xpContentListUntilCard(y, x)
		await ContentCard.clickDeleteConfirm(xpUntilCard)
	}

	public static async clickDeleteCancel(y: number, x: number): Promise<void> {
		const xpUntilCard = await xpContentListUntilCard(y, x)
		await ContentCard.clickDeleteCancel(xpUntilCard)
	}

	public static async getQuickAddCard(): Promise<WebElement> {
		const webEl = await ContentCard.getElementByXPath(xpQuickAddCard)
		return webEl
	}

	public static async isListEmpty(): Promise<boolean> {
		try {
			const webEl = await getElementByXPath(xpListEmpty)
			const isListEmptyLabelPresent = webEl != undefined
			return isListEmptyLabelPresent
		} catch (e) { }
		const isListElementThere = await ContentList.isListElementThere(0, 1)
		try {
			const webElQuickAddCard = await getElementByXPath(xpQuickAddCard)
			return webElQuickAddCard != undefined && !isListElementThere
		} catch (e) { }
		return isListElementThere
	}
}

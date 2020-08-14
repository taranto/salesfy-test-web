import { setInputValue, getElementByXPath } from "../../DomHelper"
import GroupRow from './GroupRow'

const xpListRowBaseIdx = (nrRow:number) => `//*[@id="root"]/div[1]/div/main/div/div[2]/div/div[2]/div/div/table/tbody/tr[${nrRow+1}]`
const xpListEmpty = '//*[@id="root"]/div[1]/div/main/div/div[2]/div/div[2]/div/div/table/tbody/tr/td'

export default class GroupList {

	public static async setNmGroup(nrRow : number, nmGroup : string) : Promise<void> {
		const xpListRowBase = await xpListRowBaseIdx(nrRow)
		const xpNmNewGroupInput = await GroupRow.setNmGroup(xpListRowBase, nmGroup)
	}

	public static async getNmValue(nrRow : number) : Promise<string> {
		const xpListRowBase = await xpListRowBaseIdx(nrRow)
		const dsText = await GroupRow.getNmValue(xpListRowBase)
		return dsText
	}

	public static async isOpen(nrRow : number) : Promise<boolean> {
		const xpListRowBase = await xpListRowBaseIdx(nrRow)
		const isOpen = await GroupRow.isOpen(xpListRowBase)
		return isOpen
	}

	public static async clickGroupOpen(nrRow : number) : Promise<void> {
		if (this.isOpen(nrRow)) {
			return
		}
		const xpListRowBase = await xpListRowBaseIdx(nrRow)
		await GroupRow.clickGroupOpen(xpListRowBase)
	}

	public static async clickGroupClose(nrRow : number) : Promise<void> {
		if (!this.isOpen(nrRow)) {
			return
		}
		const xpListRowBase = await xpListRowBaseIdx(nrRow)
		await GroupRow.clickGroupClose(xpListRowBase)
	}

	public static async clickNewUser(nrRow : number) : Promise<void> {
		const xpListRowBase = await xpListRowBaseIdx(nrRow)
		await GroupRow.clickNewUser(xpListRowBase)
	}

	public static async clickGroupFavorite(nrRow : number) : Promise<void> {
		const xpListRowBase = await xpListRowBaseIdx(nrRow)
		await GroupRow.clickGroupFavorite(xpListRowBase)
	}

	public static async clickGroupEdit(nrRow : number) : Promise<void> {
		const xpListRowBase = await xpListRowBaseIdx(nrRow)
		await GroupRow.clickGroupEdit(xpListRowBase)
	}

	public static async clickGroupDelete(nrRow : number) : Promise<void> {
		const xpListRowBase = await xpListRowBaseIdx(nrRow)
		await GroupRow.clickGroupDelete(xpListRowBase)
	}

	public static async clickGroupDeleteConfirm(nrRow : number) : Promise<void> {
		const xpListRowBase = await xpListRowBaseIdx(nrRow)
		await GroupRow.clickGroupDeleteConfirm(xpListRowBase)
	}

	public static async clickGroupDeleteCancel(nrRow : number) : Promise<void> {
		const xpListRowBase = await xpListRowBaseIdx(nrRow)
		await GroupRow.clickGroupDeleteCancel(xpListRowBase)
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

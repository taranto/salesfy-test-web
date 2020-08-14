import { getElementByXPath, elementClick, setInputValue } from "../../DomHelper"

const xpNmUserGroupInput = `/td[2]/div/div/input`
const xpNmUserGroup = `/td[2]/div/div[2]/p[1]/b`
const xpEmUserGroup = `/td[2]/div/div[2]/p[2]`
const xpIsAdminUserGroupButton = `/td[3]/div/button`
const xpIsAdminUserGroupLabel = `/td[3]/div/button/span[1]`
const xpIsMemberUserGroupLabel = `/td[3]/div/button/span`
const xpUserGroupDelete = `/td[4]/div/button`
const xpUserGroupDeleteConfirm = `/td/div/div/button[1]`
const xpUserGroupDeleteCancel = `/td/div/div/button[2]`



export default class UserGroupLine {

	public static async getNmValue(xpBeforeRow:string) : Promise<string> {
		const webEl = await getElementByXPath(xpBeforeRow+xpNmUserGroup)
		const dsText = await webEl.getText()
		return dsText
	}

	public static async getEmValue(xpBeforeRow:string) : Promise<string> {
		const webEl = await getElementByXPath(xpBeforeRow+xpEmUserGroup)
		const dsText = await webEl.getText()
		return dsText
	}

	public static async isAdmin(xpBeforeRow:string) : Promise<boolean> {
		const webEl = await getElementByXPath(xpBeforeRow+xpIsAdminUserGroupLabel)
		const dsText = await webEl.getText()
		return dsText == "Admin"
	}

	public static async isMember(xpBeforeRow:string) : Promise<boolean> {
		const webEl = await getElementByXPath(xpBeforeRow+xpIsMemberUserGroupLabel)
		const dsText = await webEl.getText()
		return dsText == "Membro"
	}

	public static async setEmUserGroup(xpBeforeRow: string, emUserGroup : string) : Promise<void> {
		await setInputValue(xpBeforeRow + xpNmUserGroupInput, emUserGroup)
	}

	public static async clickIsAdminButton(xpBeforeRow: string) : Promise<void> {
		await elementClick(xpBeforeRow + xpIsAdminUserGroupButton)
	}

	public static async clickUserGroupDelete(xpBeforeRow: string) : Promise<void> {
		await elementClick(xpBeforeRow + xpUserGroupDelete)
	}

	public static async clickUserGroupDeleteConfirm(xpBeforeRow: string) : Promise<void> {
		await elementClick(xpBeforeRow + xpUserGroupDeleteConfirm)
	}

	public static async clickUserGroupDeleteCancel(xpBeforeRow: string) : Promise<void> {
		await elementClick(xpBeforeRow + xpUserGroupDeleteCancel)
	}
}

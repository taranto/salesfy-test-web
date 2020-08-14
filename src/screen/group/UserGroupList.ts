import UserGroupRow from './UserGroupRow'

const xpListRowBaseIdx = (nrRow:number) => `//*[@id="root"]/div[1]/div/main/div/div[2]/div/div[2]/div/div/table/tbody/tr[${nrRow+1}]`

export default class UserGroupList {

	public static async getNmValue(nrRow : number) : Promise<string> {
		const xpListRowBase = await xpListRowBaseIdx(nrRow)
		const dsText = await UserGroupRow.getNmValue(xpListRowBase)
		return dsText
	}

	public static async isAdmin(nrRow : number) : Promise<boolean> {
		const xpListRowBase = await xpListRowBaseIdx(nrRow)
		const isAdmin = await UserGroupRow.isAdmin(xpListRowBase)
		return isAdmin
	}

	public static async isMember(nrRow : number) : Promise<boolean> {
		const xpListRowBase = await xpListRowBaseIdx(nrRow)
		const isMember = await UserGroupRow.isMember(xpListRowBase)
		return isMember
	}

	public static async getEmValue(nrRow : number) : Promise<string> {
		const xpListRowBase = await xpListRowBaseIdx(nrRow)
		const dsText = await UserGroupRow.getEmValue(xpListRowBase)
		return dsText
	}

	public static async setEmUserGroup(nrRow : number, emUser : string) : Promise<void> {
		const xpListRowBase = await xpListRowBaseIdx(nrRow)
		const xpNmNewGroupInput = await UserGroupRow.setEmUserGroup(xpListRowBase, emUser)
	}

	public static async clickIsAdminButton(nrRow : number) : Promise<void> {
		const xpListRowBase = await xpListRowBaseIdx(nrRow)
		await UserGroupRow.clickIsAdminButton(xpListRowBase)
	}

	public static async clickUserGroupDelete(nrRow : number) : Promise<void> {
		const xpListRowBase = await xpListRowBaseIdx(nrRow)
		await UserGroupRow.clickUserGroupDelete(xpListRowBase)
	}

	public static async clickUserGroupDeleteConfirm(nrRow : number) : Promise<void> {
		const xpListRowBase = await xpListRowBaseIdx(nrRow)
		await UserGroupRow.clickUserGroupDeleteConfirm(xpListRowBase)
	}

	public static async clickUserGroupDeleteCancel(nrRow : number) : Promise<void> {
		const xpListRowBase = await xpListRowBaseIdx(nrRow)
		await UserGroupRow.clickUserGroupDeleteCancel(xpListRowBase)
	}
}

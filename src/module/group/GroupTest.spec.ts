import { AbstractTest } from '../AbstractTest.spec'
import { StringUtil } from 'salesfy-shared'
import Menu from '../../screen/app/Menu'
import GroupToolbar from '../../screen/group/GroupToolbar'
import GroupList from '../../screen/group/GroupList'
import UserGroupList from '../../screen/group/UserGroupList'
import UserGroupOption from '../../screen/group/UserGroupOption'
import { Key } from 'selenium-webdriver'
import { sleep } from '../../DomHelper'
import { Env } from '../../Env'
import Toast from '../../screen/app/Toast'

export default class GroupTest extends AbstractTest {

	public test(): void {
		describe('group & user group', () => {
			beforeAll(() => {
				this.joParamMain = {
					nmGroup: StringUtil.random(),
				}
			})

			describe('group', () => {
				this.testGroup()
			})

			describe('user group', () => {
				this.testUserGroup()
			})
		})
	}

	public testGroup(): void {
		it("add group", async () => {
			await Menu.openGroups()
			sleep(Env.msAwait1)
			const nmGroupToClearList = StringUtil.random()
			await GroupToolbar.setDsSearch(nmGroupToClearList)
			sleep(Env.msAwait1)
			await GroupToolbar.pressAddButton()
			await GroupList.setNmGroup(0, this.joParamMain.nmGroup)
			await GroupList.setNmGroup(0, Key.ENTER)
			await GroupToolbar.setDsSearch('')
			sleep(Env.msAwait1)
			await GroupToolbar.setDsSearch(this.joParamMain.nmGroup)
			sleep(Env.msAwait1)
			const isSuccess = await Toast.isSuccess()
			expect(isSuccess).toBe(true)
			const nmGroupFirstPosition = await GroupList.getNmValue(0)
			expect(nmGroupFirstPosition).toBe(this.joParamMain.nmGroup)
		})

		it("search group", async () => {
			await Menu.openGroups()
			sleep(Env.msAwait1)
			const nmGroupToClearList = StringUtil.random()
			await GroupToolbar.setDsSearch(nmGroupToClearList)
			sleep(Env.msAwait1)
			const isListEmpty = await GroupList.isListEmpty()
			expect(isListEmpty).toBe(true)
			await GroupToolbar.setDsSearch(this.joParamMain.nmGroup)
			sleep(Env.msAwait1)
			const nmGroupFirstPosition = await GroupList.getNmValue(0)
			expect(nmGroupFirstPosition).toBe(this.joParamMain.nmGroup)
		})

		it("edit group", async () => {
			await Menu.openGroups()
			sleep(Env.msAwait1)
			await GroupToolbar.setDsSearch(this.joParamMain.nmGroup)
			sleep(Env.msAwait1)
			await GroupList.clickGroupEdit(0)
			this.joParamMain.nmGroup2 = StringUtil.random()
			await GroupList.setNmGroup(0, this.joParamMain.nmGroup2)
			await GroupList.setNmGroup(0, Key.ENTER)
			await GroupToolbar.setDsSearch(this.joParamMain.nmGroup)
			sleep(Env.msAwait1)
			const isListEmpty = await GroupList.isListEmpty()
			expect(isListEmpty).toBe(true)
			await GroupToolbar.setDsSearch(this.joParamMain.nmGroup2)
			sleep(Env.msAwait1)
			const nmGroupFirstPosition = await GroupList.getNmValue(0)
			expect(nmGroupFirstPosition).toBe(this.joParamMain.nmGroup2)
		})

		it("delete group", async () => {
			await Menu.openGroups()
			sleep(Env.msAwait1)
			await GroupToolbar.setDsSearch(this.joParamMain.nmGroup2)
			sleep(Env.msAwait1)
			await GroupList.clickGroupDelete(0)
			await GroupList.clickGroupDeleteCancel(0)
			await GroupList.clickGroupDelete(0)
			await GroupList.clickGroupDeleteConfirm(0)
			await GroupToolbar.setDsSearch(this.joParamMain.nmGroup2)
			sleep(Env.msAwait1)
			const isListEmpty = await GroupList.isListEmpty()
			expect(isListEmpty).toBe(true)
		})
	}

	public testUserGroup(): void {
		it("add user group", async () => {
			await Menu.openGroups()
			sleep(Env.msAwait1)
			const nmGroupToClearList = StringUtil.random()
			await GroupToolbar.setDsSearch(nmGroupToClearList)
			sleep(Env.msAwait1)
			this.joParamMain.nmGroup3 = StringUtil.random()
			await GroupToolbar.pressAddButton()
			await GroupList.setNmGroup(0, this.joParamMain.nmGroup3)
			await GroupList.setNmGroup(0, Key.ENTER)
			await GroupToolbar.setDsSearch(this.joParamMain.nmGroup3)
			sleep(Env.msAwait1)
			await GroupList.clickNewUser(0)
			this.joParamMain.nmUserPartner = StringUtil.random()
			this.joParamMain.emUserPartner = this.joParamMain.nmUserPartner + "@hatchers.com.br"
			await UserGroupList.setEmUserGroup(2, this.joParamMain.emUserPartner)
			await UserGroupOption.clickOptionButton(0)
			sleep(Env.msAwait1)
			const emUserGroup1 = await UserGroupList.getEmValue(1)
			const emUserGroup2 = await UserGroupList.getEmValue(2)
			const isPartnerSorted1st = this.joParamMain.emUserPartner == emUserGroup1
			const isPartnerSorted2nd = this.joParamMain.emUserPartner == emUserGroup2
			if (isPartnerSorted1st)
				expect(emUserGroup2).toBe(Env.joUserLogin.emUser)
			if (isPartnerSorted2nd)
				expect(emUserGroup1).toBe(Env.joUserLogin.emUser)
			else
				throw Error("Wrong sort of user group in group")
		})

		it("search user group", async () => {
			await Menu.openGroups()
			sleep(Env.msAwait1)
			await GroupToolbar.setDsSearch(this.joParamMain.nmUserPartner)
			sleep(Env.msAwait1)
			const nmGroup = await GroupList.getNmValue(0)
			expect(nmGroup).toBe(this.joParamMain.nmGroup3)
			await GroupList.clickGroupOpen(0)
			const emUserGroup = await UserGroupList.getEmValue(1)
			expect(emUserGroup).toBe(this.joParamMain.emUserPartner)
		})

		//TODO : bug - estado de membero não pode ser alterado
		it("edit user group", async () => {
			await Menu.openGroups()
			sleep(Env.msAwait1)
			await GroupToolbar.setDsSearch(this.joParamMain.nmUserPartner)
			sleep(Env.msAwait1)
			const nmGroup = await GroupList.getNmValue(0)
			expect(nmGroup).toBe(this.joParamMain.nmGroup3)
			await GroupList.clickGroupOpen(0)
			const emUserGroup = await UserGroupList.getEmValue(1)
			const nrRowPartner = 1
			const isMember = await UserGroupList.isMember(nrRowPartner)
			expect(isMember).toBe(true)
			await UserGroupList.clickIsAdminButton(nrRowPartner)
			sleep(Env.msAwait1)
			const isAdmin = await UserGroupList.isAdmin(nrRowPartner)
			expect(isAdmin).toBe(true)
		})

		it("remove user group", async () => {
			await Menu.openGroups()
			sleep(Env.msAwait1)
			await GroupToolbar.setDsSearch(this.joParamMain.nmUserPartner)
			sleep(Env.msAwait1)
			const nmGroup = await GroupList.getNmValue(0)
			expect(nmGroup).toBe(this.joParamMain.nmGroup3)
			await GroupList.clickGroupOpen(0)
			const emUserGroup = await UserGroupList.getEmValue(1)
			const nrRowPartner = 1
			await UserGroupList.clickUserGroupDelete(nrRowPartner)
			await UserGroupList.clickUserGroupDeleteCancel(nrRowPartner)
			await UserGroupList.clickUserGroupDelete(nrRowPartner)
			await UserGroupList.clickUserGroupDeleteConfirm(nrRowPartner)
			const isListEmpty = await GroupList.isListEmpty()
			expect(isListEmpty).toBe(true)
		})
	}
}

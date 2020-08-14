import Menu from '../../screen/app/Menu'
import Toolbar from '../../screen/app/Toolbar'
import ContentForm from '../../screen/content/ContentForm'
import Login from '../../screen/app/Login'
import Modal from '../../screen/app/Modal'
import { sleep } from '../../DomHelper'
import { StringUtil } from 'salesfy-shared'
import { AbstractTest } from '../AbstractTest.spec'
import Toast from '../../screen/app/Toast'
import Home from '../../screen/app/Home'
import { Env } from '../../Env'
import ContentList from '../../screen/content/ContentList'

export default class ContentTest extends AbstractTest {
	public test(): void {
		describe('content', () => {
			this.joParamMain = {
				nmContent: StringUtil.random(),
				dsContent: StringUtil.random()
			}

			this.testContent()
		})
	}

	public testContent(): void {
		it("add content", async () => {
			await Menu.openMyContent()
			await Toolbar.pressAddButton()
			await ContentForm.setNmContent(this.joParamMain.nmContent)
			await ContentForm.setDsContent(this.joParamMain.dsContent)
			await Toolbar.pressSaveButton()
			await sleep(Env.msAwait1)
			const isSuccess = await Toast.isSuccess()
			expect(isSuccess).toBe(true)
		})

		it("search content", async () => {
			await Menu.openMyContent()
			await Toolbar.setDsSearch(this.joParamMain.nmContent)
			await sleep(Env.msAwait1)
			const nmValue = await ContentList.getListElementNmValue(0, 1)
			expect(nmValue).toEqual(this.joParamMain.nmContent)
			const dsValue = await ContentList.getListElementDsValue(0, 1)
			expect(dsValue).toEqual(this.joParamMain.dsContent)
			const nmContentToClearList = StringUtil.random()
			await Toolbar.setDsSearch(nmContentToClearList)
			const isListEmpty = await ContentList.isListEmpty()
			expect(isListEmpty).toBe(true)
		})

		it("edit content", async () => {
			await Menu.openMyContent()
			await Toolbar.setDsSearch(this.joParamMain.nmContent)
			await sleep(Env.msAwait1)
			await ContentList.clickMenu(0, 1)
			await ContentList.clickEdit(0, 1)
			await sleep(Env.msAwait1)
			this.joParamMain.nmContent2 = StringUtil.random()
			this.joParamMain.dsContent2 = StringUtil.random()
			await ContentForm.setNmContent(this.joParamMain.nmContent2)
			await ContentForm.setDsContent(this.joParamMain.dsContent2)
			await Toolbar.pressSaveButton()
			await sleep(Env.msAwait1)
			const isSuccess = await Toast.isSuccess()
			expect(isSuccess).toBe(true)
			await Menu.openMyContent()
			await Toolbar.setDsSearch(this.joParamMain.nmContent2)
			const nmValue = await ContentList.getListElementNmValue(0, 1)
			expect(nmValue).toEqual(this.joParamMain.nmContent2)
			const dsValue = await ContentList.getListElementDsValue(0, 1)
			expect(dsValue).toEqual(this.joParamMain.dsContent2)
		})

		it("delete content", async () => {
			await Menu.openMyContent()
			await Toolbar.setDsSearch(this.joParamMain.nmContent2)
			await sleep(Env.msAwait1)
			await ContentList.clickMenu(0, 1)
			await ContentList.clickDelete(0, 1)
			await ContentList.clickDeleteCancel(0, 1)
			await ContentList.clickMenu(0, 1)
			await ContentList.clickDelete(0, 1)
			await ContentList.clickDeleteConfirm(0, 1)
			const isSuccess = await Toast.isSuccess()
			expect(isSuccess).toBe(true)
			await Toolbar.setDsSearch(this.joParamMain.nmContent2)
			const isEmpty = await ContentList.isListEmpty()
			expect(isEmpty).toBe(true)
		})
	}
}

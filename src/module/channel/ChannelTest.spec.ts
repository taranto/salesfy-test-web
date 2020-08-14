import Menu from '../../screen/app/Menu'
import Toolbar from '../../screen/app/Toolbar'
import ChannelForm from '../../screen/channel/ChannelForm'
import Modal from '../../screen/app/Modal'
import { StringUtil } from 'salesfy-shared'
import { ChannelList } from '../../screen/channel/ChannelList'
import Toast from '../../screen/app/Toast'
import { sleep } from '../../DomHelper'
import { AbstractTest } from '../AbstractTest.spec'
import { Env } from '../../Env'

export default class ChannelTest extends AbstractTest {

	public test(): void {
		describe('channel', () => {
			beforeAll(()=>{
				this.joParamMain = {
					nmChannel: StringUtil.random(),
					dsChannel: StringUtil.random()
				}
			})

			this.testChannel()
		})
	}

	public testChannel(): void {
		it("add channel", async () => {
			await Menu.openPlaybook()
			await Toolbar.pressAddButton()
			await ChannelForm.setNmChannel(this.joParamMain.nmChannel)
			await ChannelForm.setDsChannel(this.joParamMain.dsChannel)
			// await Channel.setGroup(this.joParamMain.dsChannel)
			await Modal.pressSaveButton()
			const isSuccess = await Toast.isSuccess()
			expect(isSuccess).toBe(true)
		})

		it("search channel", async () => {
			await Menu.openPlaybook()
			await Toolbar.setDsSearch(this.joParamMain.nmChannel)
			await sleep(Env.msAwait1)
			const nmValue = await ChannelList.getNmValue(0, 0)
			expect(nmValue).toEqual(this.joParamMain.nmChannel)
			const dsValue = await ChannelList.getDsValue(0, 0)
			expect(dsValue).toEqual(this.joParamMain.dsChannel)
			const nmChannelToClearList = StringUtil.random()
			await Toolbar.setDsSearch(nmChannelToClearList)
			const isListEmpty = await ChannelList.isListEmpty()
			expect(isListEmpty).toBe(true)
		})

		it("edit channel", async () => {
			await Menu.openPlaybook()
			await Toolbar.setDsSearch(this.joParamMain.nmChannel)
			await sleep(Env.msAwait1)
			await ChannelList.clickMenu(0, 0)
			await ChannelList.clickEdit(0, 0)
			await sleep(Env.msAwait1)
			this.joParamMain.nmChannel2 = StringUtil.random()
			this.joParamMain.dsChannel2 = StringUtil.random()
			await ChannelForm.setNmChannel(this.joParamMain.nmChannel2)
			await ChannelForm.setDsChannel(this.joParamMain.dsChannel2)
			await Modal.pressSaveButton()
			const isSuccess = await Toast.isSuccess()
			expect(isSuccess).toBe(true)
			// await ChannelForm.clickClose()
			await Toolbar.setDsSearch(this.joParamMain.dsChannel2)
			await sleep(Env.msAwait1)
			const nmValue = await ChannelList.getNmValue(0, 0)
			expect(nmValue).toEqual(this.joParamMain.nmChannel2)
			const dsValue = await ChannelList.getDsValue(0, 0)
			expect(dsValue).toEqual(this.joParamMain.dsChannel2)
		})

		it("delete channel", async () => {
			await Menu.openPlaybook()
			await Toolbar.setDsSearch(this.joParamMain.nmChannel2)
			await sleep(Env.msAwait1)
			await ChannelList.clickMenu(0, 0)
			await ChannelList.clickDelete(0, 0)
			await ChannelList.clickDeleteCancel(0, 0)
			await ChannelList.clickMenu(0, 0)
			await ChannelList.clickDelete(0, 0)
			await ChannelList.clickDeleteConfirm(0, 0)
			const isSuccess = await Toast.isSuccess()
			expect(isSuccess).toBe(true)
			await sleep(Env.msAwait1)
			await Toolbar.setDsSearch(this.joParamMain.nmChannel2)
			await sleep(Env.msAwait1)
			const isListEmpty = await ChannelList.isListEmpty()
			expect(isListEmpty).toBe(true)
		})
	}
}

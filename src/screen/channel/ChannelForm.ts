import { elementClick, setInputValue } from "../../DomHelper"

const xpNmChannelDisabledField = '//*[@id="channel-details"]/div/div/div[2]/div[1]/div[2]/p/a/input'
const xpNmChannelField = '//*[@id="channel-details"]/div/div/div[2]/div[1]/div[2]/p/input'
const xpDsChannelDisabledField = '//*[@id="channel-details"]/div/div/div[2]/div[2]/div[2]/p/a'
const xpDsChannelField = '//*[@id="channel-details"]/div/div/div[2]/div[2]/div[2]/p/textarea'
const xpGroupDisabledField = '//*[@id="channel-details"]/div/div/div[2]/div[3]/div[2]/p/a'
const xpGroupField = '//*[@id="channel-details"]/div/div/div[2]/div[3]/div[2]/p/div/div[1]'
const xpCloseButton = '//*[@id="channel-modal"]/div[1]/button'

export default class ChannelForm {
	public static async setNmChannel(nmChannel: string) : Promise<void> {
		await elementClick(xpNmChannelDisabledField)
		await setInputValue(xpNmChannelField, nmChannel)
	}

	public static async setDsChannel(dsChannel: string) : Promise<void> {
		await elementClick(xpDsChannelDisabledField)
		await setInputValue(xpDsChannelField, dsChannel)
	}

	public static async setGroup(nmGroup: string) : Promise<void> {
		await elementClick(xpGroupDisabledField)
		await setInputValue(xpGroupField, nmGroup)
	}

	public static async clickClose() : Promise<void> {
		await elementClick(xpCloseButton)
	}
}

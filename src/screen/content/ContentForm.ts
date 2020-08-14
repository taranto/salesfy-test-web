import { elementClick, setInputValue } from "../../DomHelper"

const nmChannelDisabledField = '//*[@id="channel-details"]/div/div/div[2]/div[1]/div[2]/p/a/input'
const nmChannelField = '//*[@id="channel-details"]/div/div/div[2]/div[1]/div[2]/p/input'

const nmContentDisabledField = '//*[@id="root"]/div[1]/div/main/div[2]/div/div/div[2]/div[3]/div[2]/p/a/input'
const nmContentField =         '//*[@id="root"]/div[1]/div/main/div[2]/div/div/div[2]/div[3]/div[2]/p/input'

const dsContentDisabledField = '//*[@id="root"]/div[1]/div/main/div[2]/div/div/div[2]/div[4]/div[2]/p/a'
const dsContentField = 	'//*[@id="root"]/div[1]/div/main/div[2]/div/div/div[2]/div[4]/div[2]/p/textarea'

const contentContentDisabledField = '//*[@id="content-details"]/div/div/div[2]/div[3]/div[2]/p/a'
const contentContentField = '//*[@id="content-details"]/div/div/div[2]/div[3]/div[2]/p/div/div[1]'

export default class ContentForm {
	public static async setNmContent(nmContent: string) : Promise<void> {
		await elementClick(nmContentDisabledField)
		await setInputValue(nmContentField, nmContent)
	}

	public static async setDsContent(dsContent: string) : Promise<void> {
		await elementClick(dsContentDisabledField)
		await setInputValue(dsContentField, dsContent)
	}

	public static async setGroup(nmChannel: string) : Promise<void> {
		await elementClick(contentContentDisabledField)
		await setInputValue(contentContentField, nmChannel)
	}
}

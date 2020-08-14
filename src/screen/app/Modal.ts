import { elementClick, setInputValue } from "../../DomHelper"

const saveButton = '//*[@id="channel-modal"]/div[2]/div[2]/button'

export default class Modal {
	public static async pressSaveButton() : Promise<void> {
		await elementClick(saveButton)
	}
}

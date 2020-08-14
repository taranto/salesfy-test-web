import { elementClick, setInputValue, isElementByCssVisible } from "../../DomHelper"

const successSelector = "#toast-container > div > div > div.Toastify__toast--success > div.Toastify__toast-body"

export default class Toast {
	public static async isSuccess() : Promise<boolean> {
		const isVisible = await isElementByCssVisible(successSelector)
		return isVisible
	}
}

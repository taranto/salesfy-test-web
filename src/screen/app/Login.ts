import { elementClick, setInputValue } from "../../DomHelper"
import { Env } from "../../Env"

const emUserField = '//*[@id="root"]/div[1]/div[2]/div/div[1]/div[1]/input'
const pwUserField = '//*[@id="root"]/div[1]/div[2]/div/div[1]/div[2]/input'
const buttonLogin = '//*[@id="root"]/div[1]/div[2]/div/div[2]/button'
const toolbarLogo = '//*[@id="root"]/div[1]/header/div/h6/img'

export default class Login {
	public static async doLogin() : Promise<void> {
		await setInputValue(emUserField, Env.joUserLogin.emUser)
		await setInputValue(pwUserField, Env.joUserLogin.unPasswordKey)
		await elementClick(buttonLogin)
		// await isImagePresent(toolbarLogo);
	}
}

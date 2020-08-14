import { goTo } from "../../DomHelper"
import { Env } from "../../Env"

export default class Home {
	public static async goRoot() : Promise<void> {
		await goTo(Env.lkRoot)
	}
}

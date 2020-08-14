import { SConst } from "salesfy-shared"

export class Env {

	public static msAwait5: number = SConst.MILI_SEC * 5
	public static msAwait1: number = SConst.MILI_SEC
	public static msTimeoutInterval: number = SConst.MILI_MIN
	public static lkRoot = 'localhost:8080'
	public static nmBrowser: string = "chrome" //firefox
	public static arNmChromeOptionArgument: string[] = ["no-sandbox", "window-size=1200,1024", "window-position=2550,350"]
	//"start-maximized", "incognito"
	public static arNmFirefoxOptionArgument: string[] = [""]
	public static nmChromeServiceArgument: string = ""
	public static nmFirefoxServiceArgument: string = ""
	public static joUserLogin = {
		emUser: "r2gs722p@hatchers.com.br",
		unPasswordKey: "12345678"
	}
	public static joUserPartner = {
		emUser: "asdasd@hatchers.com.br"
	}
	public static lkGoogleSearch = "https://www.google.com/search?q="
}

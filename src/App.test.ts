import { Webdriver } from "./setup/Webdriver"
import ChannelTest from './module/channel/ChannelTest.spec'
import ContentTest from './module/content/ContentTest.spec'
import Home from "./screen/app/Home"
import Login from './screen/app/Login'
import { Env } from "./Env"
import GroupTest from './module/group/GroupTest.spec'
import QuickTest from './module/QuickTest.spec'

jasmine.DEFAULT_TIMEOUT_INTERVAL = Env.msTimeoutInterval

describe("Salesfy Software Testing", () => {

	beforeAll(async () => {
		await Webdriver.init()
		await Home.goRoot()
		await Login.doLogin()
	})

	// const quickTest = new QuickTest()
	// quickTest.test()
	const channelTest = new ChannelTest()
	channelTest.test()
	const contentTest = new ContentTest()
	contentTest.test()
	const groupTest = new GroupTest()
	groupTest.test()

	afterAll(async () => {
		if (Webdriver.driver)
			Webdriver.driver.quit()
	})
})

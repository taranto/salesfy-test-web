import { getElementByXPath, setInputValue, elementClick } from "../../DomHelper"
import Login from '../../screen/app/Login'
import { AbstractTest } from "../AbstractTest.spec"

const loginLogo = '//*[@id="root"]/div[1]/div[1]/div/img'
const toolbarLogo = '//*[@id="root"]/div[1]/header/div/h6/img'

export default class LoginTest extends AbstractTest {
	public test() {
	}
}

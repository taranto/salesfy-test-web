import { elementClick, getElementByXPath } from "../../DomHelper";

const xpUserGroupComboOptionButton = (nrRowOption: number) => `//*[@id="react-autowhatever-1--item-${nrRowOption}"]`
const xpUserGroupComboOptionEm = (nrRowOption: number) => `//*[@id="react-autowhatever-1--item-${nrRowOption}"]/div/div[2]/p[2]`
const xpUserGroupComboOptionNm = (nrRowOption: number) => `//*[@id="react-autowhatever-1--item-${nrRowOption}"]/div/div[2]/p[1]/b`

export default class UserGroupOption {

	public static async clickOptionButton(nrRowOption: number): Promise<void> {
		const xpUserGroupComboOption = await xpUserGroupComboOptionButton(nrRowOption)
		await elementClick(xpUserGroupComboOption)
	}

	public static async getNmValue(nrRowOption: number): Promise<string> {
		const xpUserGroupComboOptionValue = xpUserGroupComboOptionNm(nrRowOption)
		const webEl = await getElementByXPath(xpUserGroupComboOptionValue)
		const dsText = await webEl.getText()
		return dsText
	}

	public static async getEmValue(nrRowOption: number): Promise<string> {
		const xpUserGroupComboOptionValue = xpUserGroupComboOptionEm(nrRowOption)
		const webEl = await getElementByXPath(xpUserGroupComboOptionValue)
		const dsText = await webEl.getText()
		return dsText
	}

}

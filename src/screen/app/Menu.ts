import { elementClick, goTo, isElementVisible } from "../../DomHelper"
import { Env } from "../../Env"

const xpImageSalesfy = '//*[@id="menu-button"]/span[1]/img'
const xpMenuButton = '//*[@id="menu-button"]'
const xpPlaybookMenuButtonOpen = '//*[@id="menu-Playbook"]'
const xpPlaybookMenuButtonClosed = '//*[@id="home-menu"]/div/ul/div[4]'
const xpLearningCenterMenuButtonOpen = '//*[@id="menu-Learning Center"]'
const xpLearningCenterMenuButtonClosed = '//*[@id="menu-Learning Center"]/div'
const xpGroupsMenuButtonOpen = '//*[@id="menu-Equipes"]'
const xpGroupsMenuButtonClosed = '//*[@id="menu-Equipes"]/div'
const xpFavoritesMenuButtonOpen = '//*[@id="menu-Favoritos"]'
const xpFavoritesMenuButtonClosed = '//*[@id="menu-Favoritos"]/div'
const xpMyContentMenuButtonOpen = '//*[@id="menu-Meus conteúdos"]'
const xpMyContentMenuButtonClosed = '//*[@id="menu-Meus conteúdos"]/div'
const xpUserNameMenu = '//*[@id="home-menu"]/div/div[1]/p[1]'

export default class Menu {
	public static async goRoot() : Promise<void> {
		await goTo(Env.lkRoot)
	}
	public static async showMenu() : Promise<void> {
		if (Menu.isOpen())
			await elementClick(xpMenuButton)
	}

	public static async hideMenu() : Promise<void> {
		if (Menu.isOpen())
			await elementClick(xpMenuButton)
	}

	public static async openPlaybook() : Promise<void> {
		if (Menu.isOpen())
			await elementClick(xpPlaybookMenuButtonOpen)
		else
			await elementClick(xpPlaybookMenuButtonClosed)
	}

	public static async openLearningCenter() : Promise<void> {
		if (Menu.isOpen())
			await elementClick(xpLearningCenterMenuButtonOpen)
		else
			await elementClick(xpLearningCenterMenuButtonClosed)
	}

	public static async openGroups() : Promise<void> {
		if (Menu.isOpen())
			await elementClick(xpGroupsMenuButtonOpen)
		else
			await elementClick(xpGroupsMenuButtonClosed)
	}

	public static async openFavorites() : Promise<void> {
		if (Menu.isOpen())
		await elementClick(xpFavoritesMenuButtonOpen)
	else
		await elementClick(xpFavoritesMenuButtonClosed)
	}

	public static async openMyContent() : Promise<void> {
		if (Menu.isOpen())
		await elementClick(xpMyContentMenuButtonOpen)
	else
		await elementClick(xpMyContentMenuButtonClosed)
	}

	public static async isOpen() : Promise<boolean> {
		const isUserNameVisible = await isElementVisible(xpImageSalesfy)
		return isUserNameVisible
	}
}

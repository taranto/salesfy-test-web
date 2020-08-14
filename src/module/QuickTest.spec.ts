import {AbstractTest} from './AbstractTest.spec'
import { StringUtil } from 'salesfy-shared'
import { sleep } from '../DomHelper'
import { Env } from '../Env'
import Menu from '../screen/app/Menu'
import GroupList from '../screen/group/GroupList'

export default class QuickTest extends AbstractTest {

	public test(): void {
		describe('Quick test describe', () => {
			beforeAll(() => {
				this.joParamMain = {
					nmTest: StringUtil.random(),
				}
			})

			it("Quick test it", async ()=>{
				await Menu.openGroups()
				sleep(Env.msAwait1)
				await GroupList.isOpen(0)
				await GroupList.clickGroupOpen(0)
				await GroupList.isOpen(0)
				const a = 1
			})
		})
	}

}

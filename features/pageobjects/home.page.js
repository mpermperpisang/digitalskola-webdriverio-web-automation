import { $, expect } from '@wdio/globals'
import Page from './page.js';

class HomePage extends Page {
  // NOTE: element collection
  get fieldSearch() { return $('.oxd-input--active'); }
  get sidenavAdmin() { return $('//*[text()="Admin"]'); }
  get sidenavPIM() { return $('//*[text()="PIM"]'); }
  get sidenavLeave() { return $('//*[text()="Leave"]'); }
  get profilePicture() { return $('.oxd-userdropdown-tab') }
  get menuLogout() { return $('//*[text()="Logout"]'); }

  async validateHomePage() {
    await expect(this.fieldSearch).toBeDisplayed();
    await expect(this.sidenavAdmin).toBeDisplayed();
    await expect(this.sidenavPIM).toBeDisplayed();
    await expect(this.sidenavLeave).toBeDisplayed();
  }

  async clickAdminMenu() {
    await (this.menuAdmin).click();
  }

  async clickLogoutMenu() {
    await (this.profilePicture).click();
    await (this.menuLogout).click();
  }

  open () {
    return super.open('/web/index.php/dashboard/index');
  }
}

export default new HomePage();

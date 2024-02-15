import { $, expect } from '@wdio/globals'
import Page from './page.js';

const sidenav = (menu) => $(`//*[text()="${menu}"]`);

class HomePage extends Page {
  // NOTE: element collection
  get fieldSearch() { return $('.oxd-input--active'); }
  get userAdmin() { return $('//*[@class="oxd-userdropdown-name" and text()="M R  Ganesh"]') }
  get profilePicture() { return $('.oxd-userdropdown-tab') }
  get menuLogout() { return $('//*[text()="Logout"]'); }

  async clickMenu(menu) {
    await (sidenav(menu)).click();
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

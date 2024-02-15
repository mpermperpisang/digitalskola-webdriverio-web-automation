import { $, expect } from '@wdio/globals'
import Page from './page.js';

class AdminPage extends Page {
  // NOTE: element collection
  get headerAdmin() { return $('//h6[text()="Admin" or text()="User Management"]'); }

  async validateAdminPage() {
    await expect(this.headerAdmin).toBeDisplayed();
  }

  open () {
    return super.open('/web/index.php/admin/viewSystemUsers');
  }
}

export default new AdminPage();

import { $, expect } from '@wdio/globals'
import Page from './page.js';

class PIMPage extends Page {
  // NOTE: element collection
  get headerPIM() { return $('//h6[text()="PIM"]'); }

  async validatePage() {
    await expect(this.headerPIM).toBeDisplayed();
  }

  open () {
    return super.open('/web/index.php/pim/viewEmployeeList');
  }
}

export default new PIMPage();

import { $ } from '@wdio/globals'
import Page from './page.js';

class LoginPage extends Page {
    // NOTE: element collection
  get inputUsername() { return $('[name=username]'); }
  get inputPassword() { return $('[name=password]'); }
  get btnLogin() { return $('.orangehrm-login-button'); }

  async login(user) {
    await this.inputUsername.waitForDisplayed({ timeout: 2500 });
    await this.inputUsername.setValue(user);
    await this.inputPassword.setValue(process.env.PASSWORD);
    await this.btnLogin.click();
  }

  open () {
    return super.open('/web/index.php/auth/login');
  }
}

export default new LoginPage();

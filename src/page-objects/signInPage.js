class signInPage {
  constructor(page) {
    this.page = page;
  }

  async enterEmail(email) {
    await this.page.waitForSelector('#ap_email');
    await this.page.fill('#ap_email', email);
    await this.page.click('#continue');
  }

  async enterPassword(password) {
    await this.page.waitForSelector('#ap_password');
    await this.page.fill('#ap_password', password);
    await this.page.click('#signInSubmit');
  }
}

module.exports = signInPage;

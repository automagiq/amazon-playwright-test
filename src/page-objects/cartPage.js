class cartPage {
  constructor(page) {
    this.page = page;
  }

  async clickCheckout() {
    await this.page.waitForSelector('#sc-buy-box-ptc-button');
    await this.page.click('#sc-buy-box-ptc-button');
  }
}

module.exports = cartPage;
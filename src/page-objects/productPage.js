class productPage {
  constructor(page) {
    this.page = page;
  }

  async clickAddToCart() {
    await this.page.waitForSelector('#add-to-cart-button');
    await this.page.click('#add-to-cart-button');
  }

  async clickProceedToCheckout() {
    await this.page.waitForSelector('#hlb-ptc-btn-native');
    await this.page.click('#hlb-ptc-btn-native');
  }

  async getProductTitle() {
    await this.page.waitForSelector('span.a-size-medium.a-color-base.a-text-normal');
    return await this.page.$eval('span.a-size-medium.a-color-base.a-text-normal', el => el.textContent.trim());
  }
}

module.exports = productPage;
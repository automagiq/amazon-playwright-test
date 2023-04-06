const { chromium } = require('playwright');
const ProductPage = require('../page-objects/productPage'); 
const CartPage = require('../page-objects/cartPage');
const SignInPage = require('../page-objects/signInPage');

describe('Amazon website', () => {
  let browser;
  let context;
  let page;
  let productPage;
  let cartPage;
  let signInPage;

  // Launch browser and create new pages before each test
  
  beforeEach(async () => {
    browser = await chromium.launch({ headless: false });
    context = await browser.newContext();
    page = await context.newPage();
    
  // Increase the viewport size to 1920x1080 pixels
  await page.setViewportSize({ width: 1920, height: 1080 });

    productPage = new ProductPage(page);
    cartPage = new CartPage(page);
    signInPage = new SignInPage(page);
  });

  // Close browser after each test
 afterEach(async () => {
  try {
    await browser.close();
  } catch (error) {
    console.error('Error closing browser:', error);
  }
});

  // Test case: search for a product, add to cart, and proceed to checkout
  test('should be able to search for a product, add to cart, and proceed to checkout', async () => {
    // Navigate to Amazon website
    await page.goto('https://www.amazon.com/');

    // Search for a product
    await page.fill('#twotabsearchtextbox', 'PlayStation 5');
    await page.click('input[type="submit"]');

    // Select a product
    const productTitle = await productPage.getProductTitle();
    await productPage.clickAddToCart();

    // Proceed to checkout
    await productPage.clickProceedToCheckout();
    await cartPage.clickCheckout();

    // Sign in to Amazon account
    await signInPage.enterEmail('example@gmail.com');
    await signInPage.enterPassword('password');

    // Verify checkout information
    await page.waitForSelector('#placeYourOrder');
    await page.click('#placeYourOrder');

    // Wait for order confirmation page
    await page.waitForSelector('.a-alert-heading');
  }, 20000);
});


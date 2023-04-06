# Playwright JS Test for Amazon Product Search

This project contains a test script written in Playwright JS that searches for a product on the Amazon website.

## Purpose

The purpose of this test is to demonstrate how Playwright JS can be used to automate web testing tasks, such as product searches. The script performs the following steps:

1. Launches a Chromium browser.
2. Navigates to the Amazon website.
3. Enters a search query for a specific product (in this case, a PlayStation 5).
4. Verifies that the search results page has loaded.
5. Clicks on the first product in the search results.
6. Adds the product to the shopping cart.
7. Verifies that the product has been added to the cart.
8. Proceeds to checkout and signs in to the user's Amazon account.
9. Verifies that the checkout page has loaded.

## Usage

To run the test script, ensure that Playwright JS is installed and run the following command:

Note that the test script has been configured to run in headless mode by default. To run the test script in non-headless mode (i.e., with a visible browser window), edit the configuration in `jest-playwright.config.js`.

## Troubleshooting

If the script fails to execute or produces unexpected results, try the following:

- Check that the search query and product details in the script are accurate.
- Ensure that the Amazon website is accessible and functioning properly.
- Verify that the browser and operating system being used are compatible with Playwright JS.
- Check the error messages and logs generated by the script for clues on what may be causing the issue.


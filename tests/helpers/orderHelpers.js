/**
 * Helper functions for order-related E2E tests
 */

/**
 * Fill customer details in the order form
 * @param {import('@playwright/test').Page} page - Playwright page object
 * @param {Object} customerData - Customer information
 */
export async function fillCustomerDetails(page, customerData) {
  await page.fill('input[name="firstName"]', customerData.firstName);
  await page.fill('input[name="lastName"]', customerData.lastName);
  await page.fill('input[name="email"]', customerData.email);
  await page.fill('input[name="phone"]', customerData.phone);
}

/**
 * Fill delivery details in the order form
 * @param {import('@playwright/test').Page} page - Playwright page object
 * @param {Object} deliveryData - Delivery information
 */
export async function fillDeliveryDetails(page, deliveryData) {
  await page.fill('input[name="address"]', deliveryData.address);
  await page.fill('input[name="city"]', deliveryData.city);
  await page.fill('input[name="state"]', deliveryData.state);
  await page.fill('input[name="zipCode"]', deliveryData.zipCode);
  await page.fill('input[name="deliveryDate"]', deliveryData.date);
  await page.selectOption('select[name="deliveryTime"]', deliveryData.time);
}

/**
 * Fill payment details in the order form
 * @param {import('@playwright/test').Page} page - Playwright page object
 * @param {Object} paymentData - Payment information
 */
export async function fillPaymentDetails(page, paymentData) {
  await page.fill('input[name="cardNumber"]', paymentData.cardNumber);
  await page.fill('input[name="expiryDate"]', paymentData.expiryDate);
  await page.fill('input[name="cvv"]', paymentData.cvv);
  await page.fill('input[name="cardholderName"]', paymentData.cardholderName);
}

/**
 * Select a recipe by name
 * @param {import('@playwright/test').Page} page - Playwright page object
 * @param {string} recipeName - Name of the recipe to select
 */
export async function selectRecipe(page, recipeName) {
  await page.locator(`text=${recipeName}`).click();
}

/**
 * Set order quantity
 * @param {import('@playwright/test').Page} page - Playwright page object
 * @param {number} quantity - Quantity to set
 */
export async function setQuantity(page, quantity) {
  await page.selectOption('select[name="quantity"]', quantity.toString());
}

/**
 * Submit the order form
 * @param {import('@playwright/test').Page} page - Playwright page object
 */
export async function submitOrder(page) {
  await page.click('button[type="submit"]');
}

/**
 * Wait for order success and verify
 * @param {import('@playwright/test').Page} page - Playwright page object
 */
export async function waitForOrderSuccess(page) {
  await page.waitForSelector('text=Order Placed Successfully!');
  await page.waitForSelector('text=Thank you for your order');
}

/**
 * Complete a full order flow
 * @param {import('@playwright/test').Page} page - Playwright page object
 * @param {Object} orderData - Complete order data
 */
export async function completeOrderFlow(page, orderData) {
  // Select recipe and quantity
  await selectRecipe(page, orderData.recipeName);
  await setQuantity(page, orderData.quantity);
  
  // Fill all form sections
  await fillCustomerDetails(page, orderData.customer);
  await fillDeliveryDetails(page, orderData.delivery);
  
  if (orderData.payment) {
    await fillPaymentDetails(page, orderData.payment);
  }
  
  // Submit order
  await submitOrder(page);
  
  // Wait for success
  await waitForOrderSuccess(page);
}

/**
 * Get tomorrow's date in YYYY-MM-DD format
 * @returns {string} Tomorrow's date
 */
export function getTomorrowDate() {
  const tomorrow = new Date();
  tomorrow.setDate(tomorrow.getDate() + 1);
  return tomorrow.toISOString().split('T')[0];
}

/**
 * Test data factory for creating order data
 * @param {Object} overrides - Data overrides
 * @returns {Object} Complete order data
 */
export function createOrderData(overrides = {}) {
  const defaultData = {
    recipeName: 'Butter Chicken Masala',
    quantity: 1,
    customer: {
      firstName: 'John',
      lastName: 'Doe',
      email: 'john.doe@example.com',
      phone: '555-123-4567'
    },
    delivery: {
      address: '123 Main Street',
      city: 'New York',
      state: 'NY',
      zipCode: '10001',
      date: getTomorrowDate(),
      time: '14:00-16:00'
    },
    payment: {
      cardNumber: '4111111111111111',
      expiryDate: '12/25',
      cvv: '123',
      cardholderName: 'John Doe'
    }
  };
  
  return { ...defaultData, ...overrides };
} 
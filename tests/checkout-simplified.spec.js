const { test, expect } = require('@playwright/test');
const { 
  completeOrderFlow, 
  createOrderData, 
  selectRecipe, 
  setQuantity,
  fillCustomerDetails,
  fillDeliveryDetails,
  submitOrder,
  waitForOrderSuccess
} = require('./helpers/orderHelpers');

test.describe('Simplified Checkout Flow', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/order');
  });

  test('should complete happy path checkout with helper functions', async ({ page }) => {
    const orderData = createOrderData({
      recipeName: 'Butter Chicken Masala',
      quantity: 2
    });

    await completeOrderFlow(page, orderData);
    
    // Verify we can return to home
    await page.click('text=Return to Home');
    await expect(page).toHaveURL('/');
  });

  test('should handle cash on delivery with helper functions', async ({ page }) => {
    const orderData = createOrderData({
      recipeName: 'Chicken Biryani',
      payment: null // No payment data for cash on delivery
    });

    // Select recipe and quantity
    await selectRecipe(page, orderData.recipeName);
    await setQuantity(page, orderData.quantity);
    
    // Fill customer and delivery details
    await fillCustomerDetails(page, orderData.customer);
    await fillDeliveryDetails(page, orderData.delivery);
    
    // Select cash on delivery
    await page.click('input[value="cash"]');
    
    // Verify card fields are hidden
    await expect(page.locator('input[name="cardNumber"]')).not.toBeVisible();
    
    // Submit and verify success
    await submitOrder(page);
    await waitForOrderSuccess(page);
  });

  test('should validate form with missing required fields', async ({ page }) => {
    // Try to submit without filling anything
    await submitOrder(page);
    
    // Should show validation errors
    await expect(page.locator('text=Please select a recipe')).toBeVisible();
  });

  test('should test different recipes', async ({ page }) => {
    const recipes = [
      'Butter Chicken Masala',
      'Chicken Biryani', 
      'Dal Makhani',
      'Garlic Naan'
    ];

    for (const recipeName of recipes) {
      const orderData = createOrderData({ recipeName });
      
      await completeOrderFlow(page, orderData);
      
      // Return to order page for next test
      await page.click('text=Return to Home');
      await page.goto('/order');
    }
  });
}); 
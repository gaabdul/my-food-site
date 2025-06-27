const { test, expect } = require('@playwright/test');

/**
 * Test data for checkout flow
 */
const testData = {
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
    date: new Date(Date.now() + 24 * 60 * 60 * 1000).toISOString().split('T')[0], // Tomorrow
    time: '14:00-16:00'
  },
  payment: {
    cardNumber: '4111111111111111',
    expiryDate: '12/25',
    cvv: '123',
    cardholderName: 'John Doe'
  }
};

test.describe('Checkout Flow', () => {
  test.beforeEach(async ({ page }) => {
    // Navigate to the order page
    await page.goto('/order');
  });

  test('should display order page with recipe selection', async ({ page }) => {
    // Check page title
    await expect(page.locator('h1')).toContainText('Spice & Soul');
    
    // Check order form title
    await expect(page.locator('h2')).toContainText('Place Your Order');
    
    // Verify recipe cards are displayed
    const recipeCards = page.locator('[class*="border-2 rounded-lg"]');
    await expect(recipeCards).toHaveCount(4);
    
    // Check specific recipes are present
    await expect(page.locator('text=Butter Chicken Masala')).toBeVisible();
    await expect(page.locator('text=Chicken Biryani')).toBeVisible();
    await expect(page.locator('text=Dal Makhani')).toBeVisible();
    await expect(page.locator('text=Garlic Naan')).toBeVisible();
  });

  test('should allow recipe selection and quantity change', async ({ page }) => {
    // Select a recipe
    await page.locator('text=Butter Chicken Masala').click();
    
    // Verify recipe is selected (should have red border)
    const selectedRecipe = page.locator('[class*="border-red-500 bg-red-50"]');
    await expect(selectedRecipe).toBeVisible();
    
    // Change quantity
    await page.selectOption('select[name="quantity"]', '3');
    
    // Verify order summary appears
    await expect(page.locator('text=Order Summary')).toBeVisible();
    await expect(page.locator('text=Butter Chicken Masala x 3')).toBeVisible();
    
    // Check total calculation (24.99 * 3 + 5.99 delivery)
    await expect(page.locator('text=$80.96')).toBeVisible();
  });

  test('should validate required fields', async ({ page }) => {
    // Try to submit without filling required fields
    await page.click('button[type="submit"]');
    
    // Should show validation errors
    await expect(page.locator('text=Please select a recipe')).toBeVisible();
  });

  test('should complete happy path checkout flow', async ({ page }) => {
    // Step 1: Select recipe and quantity
    await page.locator('text=Butter Chicken Masala').click();
    await page.selectOption('select[name="quantity"]', '2');
    
    // Step 2: Fill customer details
    await page.fill('input[name="firstName"]', testData.customer.firstName);
    await page.fill('input[name="lastName"]', testData.customer.lastName);
    await page.fill('input[name="email"]', testData.customer.email);
    await page.fill('input[name="phone"]', testData.customer.phone);
    
    // Step 3: Fill delivery details
    await page.fill('input[name="address"]', testData.delivery.address);
    await page.fill('input[name="city"]', testData.delivery.city);
    await page.fill('input[name="state"]', testData.delivery.state);
    await page.fill('input[name="zipCode"]', testData.delivery.zipCode);
    await page.fill('input[name="deliveryDate"]', testData.delivery.date);
    await page.selectOption('select[name="deliveryTime"]', testData.delivery.time);
    
    // Step 4: Fill payment details
    await page.fill('input[name="cardNumber"]', testData.payment.cardNumber);
    await page.fill('input[name="expiryDate"]', testData.payment.expiryDate);
    await page.fill('input[name="cvv"]', testData.payment.cvv);
    await page.fill('input[name="cardholderName"]', testData.payment.cardholderName);
    
    // Step 5: Submit order
    await page.click('button[type="submit"]');
    
    // Step 6: Verify success state
    await expect(page.locator('text=Order Placed Successfully!')).toBeVisible();
    await expect(page.locator('text=Thank you for your order')).toBeVisible();
    
    // Step 7: Return to home
    await page.click('text=Return to Home');
    await expect(page).toHaveURL('/');
  });

  test('should handle cash on delivery payment method', async ({ page }) => {
    // Select recipe
    await page.locator('text=Chicken Biryani').click();
    
    // Fill basic details
    await page.fill('input[name="firstName"]', testData.customer.firstName);
    await page.fill('input[name="lastName"]', testData.customer.lastName);
    await page.fill('input[name="email"]', testData.customer.email);
    await page.fill('input[name="phone"]', testData.customer.phone);
    await page.fill('input[name="address"]', testData.delivery.address);
    await page.fill('input[name="city"]', testData.delivery.city);
    await page.fill('input[name="state"]', testData.delivery.state);
    await page.fill('input[name="zipCode"]', testData.delivery.zipCode);
    await page.fill('input[name="deliveryDate"]', testData.delivery.date);
    await page.selectOption('select[name="deliveryTime"]', testData.delivery.time);
    
    // Select cash on delivery
    await page.click('input[value="cash"]');
    
    // Verify card fields are hidden
    await expect(page.locator('input[name="cardNumber"]')).not.toBeVisible();
    await expect(page.locator('input[name="expiryDate"]')).not.toBeVisible();
    await expect(page.locator('input[name="cvv"]')).not.toBeVisible();
    await expect(page.locator('input[name="cardholderName"]')).not.toBeVisible();
    
    // Submit order
    await page.click('button[type="submit"]');
    
    // Verify success
    await expect(page.locator('text=Order Placed Successfully!')).toBeVisible();
  });

  test('should validate email format', async ({ page }) => {
    // Select recipe
    await page.locator('text=Dal Makhani').click();
    
    // Fill form with invalid email
    await page.fill('input[name="firstName"]', testData.customer.firstName);
    await page.fill('input[name="lastName"]', testData.customer.lastName);
    await page.fill('input[name="email"]', 'invalid-email');
    await page.fill('input[name="phone"]', testData.customer.phone);
    await page.fill('input[name="address"]', testData.delivery.address);
    await page.fill('input[name="city"]', testData.delivery.city);
    await page.fill('input[name="state"]', testData.delivery.state);
    await page.fill('input[name="zipCode"]', testData.delivery.zipCode);
    await page.fill('input[name="deliveryDate"]', testData.delivery.date);
    await page.selectOption('select[name="deliveryTime"]', testData.delivery.time);
    
    // Submit and check validation
    await page.click('button[type="submit"]');
    await expect(page.locator('text=Please enter a valid email address')).toBeVisible();
  });

  test('should handle special instructions', async ({ page }) => {
    // Select recipe
    await page.locator('text=Garlic Naan').click();
    
    // Add special instructions
    await page.fill('textarea[name="specialInstructions"]', 'Extra garlic please!');
    
    // Fill required fields
    await page.fill('input[name="firstName"]', testData.customer.firstName);
    await page.fill('input[name="lastName"]', testData.customer.lastName);
    await page.fill('input[name="email"]', testData.customer.email);
    await page.fill('input[name="phone"]', testData.customer.phone);
    await page.fill('input[name="address"]', testData.delivery.address);
    await page.fill('input[name="city"]', testData.delivery.city);
    await page.fill('input[name="state"]', testData.delivery.state);
    await page.fill('input[name="zipCode"]', testData.delivery.zipCode);
    await page.fill('input[name="deliveryDate"]', testData.delivery.date);
    await page.selectOption('select[name="deliveryTime"]', testData.delivery.time);
    
    // Submit order
    await page.click('button[type="submit"]');
    
    // Verify success
    await expect(page.locator('text=Order Placed Successfully!')).toBeVisible();
  });

  test('should navigate back to home page', async ({ page }) => {
    // Click back button
    await page.click('text=← Back to Home');
    
    // Verify navigation to home page
    await expect(page).toHaveURL('/');
    await expect(page.locator('h1')).toContainText('Spice & Soul');
  });

  test('should be responsive on mobile viewport', async ({ page }) => {
    // Set mobile viewport
    await page.setViewportSize({ width: 375, height: 667 });
    
    // Verify page loads correctly
    await expect(page.locator('h1')).toContainText('Spice & Soul');
    await expect(page.locator('h2')).toContainText('Place Your Order');
    
    // Check recipe cards stack vertically on mobile
    const recipeCards = page.locator('[class*="border-2 rounded-lg"]');
    await expect(recipeCards).toHaveCount(4);
    
    // Verify form fields are properly sized for mobile
    await expect(page.locator('input[name="firstName"]')).toBeVisible();
    await expect(page.locator('input[name="lastName"]')).toBeVisible();
  });
}); 
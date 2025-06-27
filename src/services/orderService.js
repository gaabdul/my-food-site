/**
 * @typedef {Object} Recipe
 * @property {string} id - Unique identifier for the recipe
 * @property {string} name - Display name of the recipe
 * @property {number} price - Price in USD
 * @property {string} description - Recipe description
 * @property {string} image - Image path for the recipe
 * @property {string} prepTime - Preparation time
 * @property {string} difficulty - Difficulty level (Easy, Medium, Hard)
 */

/**
 * @typedef {Object} OrderFormData
 * @property {string} selectedRecipe - Selected recipe ID
 * @property {number} quantity - Quantity ordered
 * @property {string} specialInstructions - Special instructions for the order
 * @property {string} firstName - Customer's first name
 * @property {string} lastName - Customer's last name
 * @property {string} email - Customer's email address
 * @property {string} phone - Customer's phone number
 * @property {string} address - Delivery address
 * @property {string} city - Delivery city
 * @property {string} state - Delivery state
 * @property {string} zipCode - Delivery ZIP code
 * @property {string} deliveryDate - Preferred delivery date
 * @property {string} deliveryTime - Preferred delivery time
 * @property {string} paymentMethod - Payment method (card or cash)
 * @property {string} cardNumber - Credit card number
 * @property {string} expiryDate - Card expiry date
 * @property {string} cvv - Card CVV
 * @property {string} cardholderName - Cardholder name
 */

/**
 * @typedef {Object} OrderSummary
 * @property {number} subtotal - Subtotal before delivery fee
 * @property {number} deliveryFee - Delivery fee
 * @property {number} total - Total amount including delivery fee
 * @property {Recipe} recipe - Selected recipe details
 * @property {number} quantity - Quantity ordered
 */

/**
 * Available recipes for ordering
 * @type {Recipe[]}
 */
export const RECIPES = [
  {
    id: "butter-chicken",
    name: "Butter Chicken Masala",
    price: 24.99,
    description: "Creamy, aromatic dish with tender chicken in rich tomato-based gravy",
    image: "/butter-chicken.jpg",
    prepTime: "30 min",
    difficulty: "Medium"
  },
  {
    id: "biryani",
    name: "Chicken Biryani",
    price: 28.99,
    description: "Fragrant rice dish with tender chicken and aromatic spices",
    image: "/biryani.jpg",
    prepTime: "45 min",
    difficulty: "Hard"
  },
  {
    id: "dal-makhani",
    name: "Dal Makhani",
    price: 18.99,
    description: "Creamy black lentils slow-cooked with spices and butter",
    image: "/dal-makhani.jpg",
    prepTime: "25 min",
    difficulty: "Easy"
  },
  {
    id: "naan",
    name: "Garlic Naan",
    price: 8.99,
    description: "Soft, fluffy bread brushed with garlic butter",
    image: "/naan.jpg",
    prepTime: "15 min",
    difficulty: "Easy"
  }
];

/**
 * Default delivery fee
 * @type {number}
 */
export const DELIVERY_FEE = 5.99;

/**
 * Get a recipe by its ID
 * @param {string} recipeId - The recipe ID to find
 * @returns {Recipe|undefined} The recipe object or undefined if not found
 */
export function getRecipeById(recipeId) {
  return RECIPES.find(recipe => recipe.id === recipeId);
}

/**
 * Calculate the subtotal for a recipe and quantity
 * @param {string} recipeId - The recipe ID
 * @param {number} quantity - The quantity ordered
 * @returns {number} The subtotal amount
 */
export function calculateSubtotal(recipeId, quantity) {
  const recipe = getRecipeById(recipeId);
  return recipe ? recipe.price * quantity : 0;
}

/**
 * Calculate the total order amount including delivery fee
 * @param {string} recipeId - The recipe ID
 * @param {number} quantity - The quantity ordered
 * @returns {number} The total amount including delivery fee
 */
export function calculateTotal(recipeId, quantity) {
  const subtotal = calculateSubtotal(recipeId, quantity);
  return subtotal + DELIVERY_FEE;
}

/**
 * Generate an order summary object
 * @param {string} recipeId - The recipe ID
 * @param {number} quantity - The quantity ordered
 * @returns {OrderSummary} The order summary object
 */
export function generateOrderSummary(recipeId, quantity) {
  const recipe = getRecipeById(recipeId);
  const subtotal = calculateSubtotal(recipeId, quantity);
  
  return {
    subtotal,
    deliveryFee: DELIVERY_FEE,
    total: subtotal + DELIVERY_FEE,
    recipe,
    quantity
  };
}

/**
 * Validate order form data
 * @param {OrderFormData} formData - The form data to validate
 * @returns {Object} Validation result with isValid boolean and errors array
 */
export function validateOrderForm(formData) {
  const errors = [];

  // Recipe validation
  if (!formData.selectedRecipe) {
    errors.push("Please select a recipe");
  }

  // Quantity validation
  if (formData.quantity < 1 || formData.quantity > 10) {
    errors.push("Quantity must be between 1 and 10");
  }

  // Customer details validation
  if (!formData.firstName.trim()) {
    errors.push("First name is required");
  }
  if (!formData.lastName.trim()) {
    errors.push("Last name is required");
  }
  if (!formData.email.trim()) {
    errors.push("Email is required");
  } else if (!isValidEmail(formData.email)) {
    errors.push("Please enter a valid email address");
  }
  if (!formData.phone.trim()) {
    errors.push("Phone number is required");
  }

  // Delivery details validation
  if (!formData.address.trim()) {
    errors.push("Delivery address is required");
  }
  if (!formData.city.trim()) {
    errors.push("City is required");
  }
  if (!formData.state.trim()) {
    errors.push("State is required");
  }
  if (!formData.zipCode.trim()) {
    errors.push("ZIP code is required");
  }
  if (!formData.deliveryDate) {
    errors.push("Delivery date is required");
  }
  if (!formData.deliveryTime) {
    errors.push("Delivery time is required");
  }

  // Payment validation
  if (formData.paymentMethod === "card") {
    if (!formData.cardNumber.trim()) {
      errors.push("Card number is required");
    }
    if (!formData.expiryDate.trim()) {
      errors.push("Expiry date is required");
    }
    if (!formData.cvv.trim()) {
      errors.push("CVV is required");
    }
    if (!formData.cardholderName.trim()) {
      errors.push("Cardholder name is required");
    }
  }

  return {
    isValid: errors.length === 0,
    errors
  };
}

/**
 * Validate email format
 * @param {string} email - Email address to validate
 * @returns {boolean} True if email is valid, false otherwise
 */
function isValidEmail(email) {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}

/**
 * Create initial form data object
 * @returns {OrderFormData} Initial form data with default values
 */
export function createInitialFormData() {
  return {
    selectedRecipe: "",
    quantity: 1,
    specialInstructions: "",
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    address: "",
    city: "",
    state: "",
    zipCode: "",
    deliveryDate: "",
    deliveryTime: "",
    paymentMethod: "card",
    cardNumber: "",
    expiryDate: "",
    cvv: "",
    cardholderName: "",
  };
}

/**
 * Simulate order submission to API
 * @param {OrderFormData} orderData - The order data to submit
 * @returns {Promise<Object>} Promise that resolves with order confirmation
 */
export async function submitOrder(orderData) {
  // Simulate API delay
  await new Promise(resolve => setTimeout(resolve, 2000));
  
  // Generate order ID
  const orderId = `ORD-${Date.now()}-${Math.random().toString(36).substr(2, 9)}`;
  
  return {
    success: true,
    orderId,
    message: "Order placed successfully",
    timestamp: new Date().toISOString()
  };
}

/**
 * Get available delivery time slots
 * @returns {string[]} Array of available delivery time slots
 */
export function getDeliveryTimeSlots() {
  return [
    "10:00-12:00",
    "12:00-14:00", 
    "14:00-16:00",
    "16:00-18:00",
    "18:00-20:00"
  ];
}

/**
 * Get quantity options for order form
 * @param {number} maxQuantity - Maximum quantity allowed (default: 10)
 * @returns {number[]} Array of quantity options
 */
export function getQuantityOptions(maxQuantity = 10) {
  return Array.from({ length: maxQuantity }, (_, i) => i + 1);
} 
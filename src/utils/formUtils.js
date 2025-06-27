/**
 * Update form data by field name and value
 * @param {Object} currentFormData - Current form data object
 * @param {string} fieldName - Name of the field to update
 * @param {any} value - New value for the field
 * @returns {Object} Updated form data object
 */
export function updateFormField(currentFormData, fieldName, value) {
  return {
    ...currentFormData,
    [fieldName]: value
  };
}

/**
 * Update form data from an event object
 * @param {Object} currentFormData - Current form data object
 * @param {Event} event - Form event object
 * @returns {Object} Updated form data object
 */
export function updateFormFromEvent(currentFormData, event) {
  const { name, value } = event.target;
  return updateFormField(currentFormData, name, value);
}

/**
 * Reset form data to initial state
 * @param {Object} initialFormData - Initial form data object
 * @returns {Object} Reset form data object
 */
export function resetFormData(initialFormData) {
  return { ...initialFormData };
}

/**
 * Check if form is valid for submission
 * @param {Object} formData - Form data to validate
 * @param {Array} requiredFields - Array of required field names
 * @returns {boolean} True if form is valid, false otherwise
 */
export function isFormValid(formData, requiredFields) {
  return requiredFields.every(field => {
    const value = formData[field];
    return value && value.toString().trim() !== '';
  });
}

/**
 * Format currency value
 * @param {number} amount - Amount to format
 * @param {string} currency - Currency code (default: 'USD')
 * @returns {string} Formatted currency string
 */
export function formatCurrency(amount, currency = 'USD') {
  return new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: currency
  }).format(amount);
}

/**
 * Format date for input field
 * @param {Date} date - Date to format
 * @returns {string} Formatted date string (YYYY-MM-DD)
 */
export function formatDateForInput(date) {
  return date.toISOString().split('T')[0];
}

/**
 * Get minimum date for delivery (tomorrow)
 * @returns {string} Minimum date string for delivery
 */
export function getMinDeliveryDate() {
  const tomorrow = new Date();
  tomorrow.setDate(tomorrow.getDate() + 1);
  return formatDateForInput(tomorrow);
} 
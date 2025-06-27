# Spice & Soul - Food Ordering Site

A modern Next.js application for ordering authentic Indian cuisine with a clean, responsive design.

## Features

- **Recipe Selection**: Browse and select from a curated menu of Indian dishes
- **Order Management**: Complete checkout process with customer details and delivery information
- **Payment Integration**: Support for credit card and cash on delivery
- **Responsive Design**: Mobile-first design using Tailwind CSS
- **Form Validation**: Comprehensive client-side validation with error handling
- **E2E Testing**: Complete test coverage with Playwright

## Tech Stack

- **Framework**: Next.js 15.3.4
- **Styling**: Tailwind CSS v4
- **Language**: JavaScript (ES6+)
- **Package Manager**: npm
- **Testing**: Playwright

## Project Structure

```
src/
├── app/                    # Next.js app directory
│   ├── order/             # Order page
│   ├── globals.css        # Global styles
│   ├── layout.js          # Root layout
│   └── page.js            # Home page
├── components/            # Reusable components
│   └── Button.js          # Button component with variants
├── services/              # Business logic services
│   └── orderService.js    # Order management functions
└── utils/                 # Utility functions
    └── formUtils.js       # Form handling utilities
tests/
├── checkout.spec.js       # Comprehensive E2E tests
├── checkout-simplified.spec.js # Simplified tests using helpers
└── helpers/
    └── orderHelpers.js    # Test helper functions
```

## Getting Started

### Prerequisites

- Node.js 18+ 
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd my-food-site
```

2. Install dependencies:
```bash
npm install
```

3. Install Playwright browsers:
```bash
npx playwright install
```

4. Run the development server:
```bash
npm run dev
```

5. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Architecture

### Order Service (`src/services/orderService.js`)

The order service has been refactored into small, pure functions with comprehensive JSDoc documentation:

- **Data Management**: Recipe data, delivery options, and form validation
- **Business Logic**: Price calculations, order summaries, and validation rules
- **API Simulation**: Mock order submission with realistic delays

Key functions:
- `getRecipeById(recipeId)` - Retrieve recipe by ID
- `calculateSubtotal(recipeId, quantity)` - Calculate order subtotal
- `validateOrderForm(formData)` - Comprehensive form validation
- `submitOrder(orderData)` - Simulate order submission
- `generateOrderSummary(recipeId, quantity)` - Generate order summary

### Form Utilities (`src/utils/formUtils.js`)

Pure utility functions for form handling:

- `updateFormFromEvent(currentFormData, event)` - Update form from DOM events
- `formatCurrency(amount, currency)` - Format currency values
- `getMinDeliveryDate()` - Get minimum delivery date (tomorrow)

### Button Component (`src/components/Button.js`)

A reusable Button component with Tailwind CSS styling:

**Variants:**
- `primary` - Red background (default)
- `secondary` - Gray background
- `outline` - Bordered style
- `ghost` - Minimal styling

**Sizes:**
- `sm` - Small
- `md` - Medium (default)
- `lg` - Large

**Usage:**
```jsx
import Button from '@/components/Button';

<Button variant="primary" size="lg" onClick={handleClick}>
  Place Order
</Button>
```

## Tailwind CSS Setup

This project uses Tailwind CSS v4 with the following configuration:

- **PostCSS Plugin**: `@tailwindcss/postcss`
- **Configuration**: `postcss.config.mjs`
- **Global Styles**: `src/app/globals.css`

The design system includes:
- Custom color palette (red primary, gray secondary)
- Responsive breakpoints
- Focus states and transitions
- Form styling utilities

## Testing

### E2E Testing with Playwright

The application includes comprehensive E2E tests covering the complete checkout flow:

**Test Coverage:**
- Happy path checkout flow
- Form validation scenarios
- Payment method switching (card vs cash)
- Mobile responsiveness
- Error handling

**Test Files:**
- `tests/checkout.spec.js` - Comprehensive test scenarios
- `tests/checkout-simplified.spec.js` - Simplified tests using helpers
- `tests/helpers/orderHelpers.js` - Reusable test utilities

**Available Test Commands:**
```bash
npm test                    # Run all tests
npm run test:ui            # Run tests with UI mode
npm run test:headed        # Run tests in headed mode
npm run test:debug         # Run tests in debug mode
```

**Test Scenarios:**
1. **Recipe Selection**: Verify all recipes are displayed and selectable
2. **Quantity Changes**: Test quantity updates and price calculations
3. **Form Validation**: Test required field validation and error messages
4. **Happy Path**: Complete order flow with all valid data
5. **Payment Methods**: Test both credit card and cash on delivery
6. **Mobile Responsiveness**: Verify mobile viewport functionality
7. **Navigation**: Test back button and home page navigation

**Test Helpers:**
- `fillCustomerDetails()` - Fill customer information
- `fillDeliveryDetails()` - Fill delivery information
- `fillPaymentDetails()` - Fill payment information
- `completeOrderFlow()` - Complete entire order process
- `createOrderData()` - Generate test data with defaults

## Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint
- `npm test` - Run E2E tests
- `npm run test:ui` - Run tests with UI mode

## Development

### Code Style

- JSDoc documentation for all functions
- Pure functions for business logic
- Component composition over inheritance
- Mobile-first responsive design
- Comprehensive E2E test coverage

### Testing Strategy

The application follows a comprehensive testing strategy:

1. **Unit Testing**: Pure functions in services and utilities
2. **Component Testing**: React component behavior
3. **Integration Testing**: Service interactions
4. **E2E Testing**: Complete user workflows
5. **Visual Testing**: Responsive design verification

## Deployment

This is a [Next.js](https://nextjs.org) project that can be deployed on:

- [Vercel](https://vercel.com) (recommended)
- Any platform supporting Node.js

For deployment instructions, see the [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying).

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes with proper JSDoc documentation
4. Add tests for new functionality
5. Test thoroughly (unit, integration, and E2E)
6. Submit a pull request

## License

This project is licensed under the MIT License.

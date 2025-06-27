# Taste Pakistan at Home - Food Delivery Site

A modern Next.js application for ordering authentic Pakistani cuisine with a clean, responsive design and full e-commerce functionality.

## Features

- **Modern Landing Page**: Hero section with "Taste Pakistan at Home" messaging
- **Food Story Section**: Personal story of Sidra & Abdul, the founders
- **How It Works**: Three-step process explanation
- **Menu Page**: Responsive grid of authentic Pakistani dishes
- **Cart System**: Slide-over drawer on desktop, bottom sheet on mobile
- **Quantity Picker**: Baymard-recommended cart UX with +/- controls
- **Checkout Flow**: Complete order form with customer details
- **Backend Integration**: Supabase for order management
- **Responsive Design**: Mobile-first design using Tailwind CSS

## Tech Stack

- **Framework**: Next.js 15.3.4
- **Styling**: Tailwind CSS v4
- **Language**: JavaScript (ES6+)
- **Backend**: Supabase (PostgreSQL)
- **Package Manager**: npm

## Project Structure

```
src/
├── pages/                  # Next.js pages directory
│   ├── index.js           # Landing page
│   ├── menu.js            # Menu page
│   └── api/
│       └── checkout.js    # Checkout API route
├── components/            # Reusable components
│   ├── DishCard.js        # Menu item card with quantity picker
│   ├── CartDrawer.js      # Cart drawer/sheet component
│   └── CheckoutForm.js    # Checkout form component
├── lib/                   # Library configurations
│   └── supabase.js        # Supabase client setup
├── app/                   # Next.js app directory (legacy)
│   ├── globals.css        # Global styles
│   ├── layout.js          # Root layout
│   └── page.js            # Legacy home page
public/                    # Static assets
```

## Getting Started

### Prerequisites

- Node.js 18+ 
- npm or yarn
- Supabase account

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd pakistani-food-delivery
```

2. Install dependencies:
```bash
npm install
```

3. Set up environment variables:
Create a `.env.local` file with your Supabase credentials:
```env
NEXT_PUBLIC_SUPABASE_URL=your_supabase_url
NEXT_PUBLIC_SUPABASE_ANON_KEY=your_supabase_anon_key
```

4. Set up Supabase database:
Create a table called `orders` with the following structure:
```sql
CREATE TABLE orders (
  id SERIAL PRIMARY KEY,
  items JSONB NOT NULL,
  customer_name TEXT NOT NULL,
  customer_phone TEXT NOT NULL,
  customer_address TEXT NOT NULL,
  customer_email TEXT,
  subtotal DECIMAL(10,2) NOT NULL,
  delivery_fee DECIMAL(10,2) NOT NULL,
  total DECIMAL(10,2) NOT NULL,
  status TEXT DEFAULT 'pending',
  created_at TIMESTAMP DEFAULT NOW()
);
```

5. Run the development server:
```bash
npm run dev
```

6. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Architecture

### Pages

#### Landing Page (`src/pages/index.js`)
- **Hero Section**: Full-screen with "Taste Pakistan at Home" messaging
- **Food Story**: Two-column layout with Sidra & Abdul's story
- **How It Works**: Three-step process with icons and descriptions
- **Cart Integration**: "Order Now" button opens cart drawer

#### Menu Page (`src/pages/menu.js`)
- **Responsive Grid**: Dish cards in responsive layout
- **Cart Management**: Add items, update quantities, checkout
- **Order Success**: Modal confirmation after successful order

### Components

#### DishCard (`src/components/DishCard.js`)
- **Quantity Picker**: Morphs from "Add +" to "- qty +" controls
- **Visual Feedback**: Animation when adding items
- **Price Display**: Clear pricing with currency formatting

#### CartDrawer (`src/components/CartDrawer.js`)
- **Responsive Design**: Slide-over on desktop, bottom sheet on mobile
- **Quantity Controls**: +/- buttons for each item
- **Checkout Integration**: Seamless transition to checkout form

#### CheckoutForm (`src/components/CheckoutForm.js`)
- **Customer Details**: Name, email, phone, address collection
- **Order Summary**: Itemized list with totals
- **Form Validation**: Required field validation
- **API Integration**: Submits to `/api/checkout`

### Backend

#### Supabase Integration (`src/lib/supabase.js`)
- **Client Setup**: Configured with environment variables
- **Error Handling**: Proper error handling for missing credentials

#### Checkout API (`src/pages/api/checkout.js`)
- **Order Processing**: Validates and stores orders in Supabase
- **Data Validation**: Ensures required fields are present
- **Error Handling**: Comprehensive error responses

## Design System

### Colors
- **Primary**: Orange (`orange-600`) - Represents warmth and spice
- **Secondary**: Red (`red-600`) - Traditional Pakistani colors
- **Neutral**: Gray scale for text and backgrounds

### Typography
- **Headings**: Bold, large text for impact
- **Body**: Readable, medium-sized text
- **Prose**: Tailwind prose classes for content sections

### Components
- **Cards**: Rounded corners, subtle shadows
- **Buttons**: Orange primary, gray secondary
- **Forms**: Clean inputs with orange focus states

## User Experience

### Cart UX (Following Baymard Research)
1. **Add Button**: Clear "Add +" button on dish cards
2. **Quantity Picker**: Morphs to "- qty +" after adding
3. **Visual Feedback**: Animation and color changes
4. **Easy Removal**: Zero quantity removes from cart

### Mobile-First Design
- **Touch Targets**: Minimum 44px for all interactive elements
- **Bottom Sheet**: Cart slides up from bottom on mobile
- **Responsive Grid**: Adapts from 1 to 4 columns based on screen size

### Checkout Flow
1. **Cart Review**: See all items and quantities
2. **Customer Info**: Simple form with required fields
3. **Order Summary**: Clear breakdown of costs
4. **Confirmation**: Success modal with order ID

## Deployment

### Environment Setup
1. **Vercel**: Recommended deployment platform
2. **Environment Variables**: Add Supabase credentials in Vercel dashboard
3. **Database**: Ensure Supabase table is created

### Environment Variables
```env
NEXT_PUBLIC_SUPABASE_URL=your_supabase_url
NEXT_PUBLIC_SUPABASE_ANON_KEY=your_supabase_anon_key
```

## Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint

## Future Enhancements

### Stripe Integration
- Replace basic checkout with Stripe Checkout
- Secure payment processing
- Webhook handling for order confirmation

### Additional Features
- **User Accounts**: Customer registration and login
- **Order History**: View past orders
- **Delivery Tracking**: Real-time delivery status
- **Reviews**: Customer ratings and reviews
- **Loyalty Program**: Points and rewards system

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes with proper documentation
4. Test thoroughly
5. Submit a pull request

## License

This project is licensed under the MIT License.

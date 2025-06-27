# Troubleshooting Guide

If your page looks weird, here are the most common issues and solutions:

## 1. Missing Dependencies
Make sure you have all required dependencies installed:
```bash
npm install
```

## 2. Tailwind CSS Not Loading
The most common issue is that Tailwind CSS isn't loading properly. Check:

- ✅ `src/app/globals.css` exists with `@tailwind` directives
- ✅ `src/pages/_app.js` imports the globals.css file
- ✅ `postcss.config.mjs` is configured correctly
- ✅ `package.json` has Tailwind CSS dependencies

## 3. Layout Issues Fixed

### Hero Section
- ✅ Fixed background gradient to be more vibrant
- ✅ Added proper overlay for better text readability
- ✅ Improved button styling with borders

### Global Styles
- ✅ Created proper `_app.js` file
- ✅ Added `_document.js` for HTML structure
- ✅ Fixed CSS imports and viewport settings

### Menu Page
- ✅ Made header sticky for better navigation
- ✅ Improved hover states and transitions

## 4. Common Issues

### Text Not Visible
If text appears white on white background:
- Check that Tailwind CSS is loading
- Ensure proper contrast ratios
- Verify z-index layering

### Layout Breaking
If layout looks broken:
- Check browser console for errors
- Ensure all components are properly imported
- Verify responsive breakpoints

### Styling Not Applied
If Tailwind classes aren't working:
- Restart the development server
- Clear browser cache
- Check for CSS conflicts

## 5. Development Server

Start the development server:
```bash
npm run dev
```

Then open http://localhost:3000 in your browser.

## 6. File Structure

Ensure your file structure looks like this:
```
src/
├── pages/
│   ├── _app.js          # Global app wrapper
│   ├── _document.js     # HTML document structure
│   ├── index.js         # Landing page
│   ├── menu.js          # Menu page
│   └── api/
│       └── checkout.js  # API route
├── components/
│   ├── DishCard.js
│   ├── CartDrawer.js
│   └── CheckoutForm.js
├── lib/
│   └── supabase.js
└── app/
    └── globals.css      # Tailwind CSS imports
```

## 7. Environment Variables

Create a `.env.local` file for Supabase:
```env
NEXT_PUBLIC_SUPABASE_URL=your_supabase_url
NEXT_PUBLIC_SUPABASE_ANON_KEY=your_supabase_anon_key
```

## 8. Still Having Issues?

1. Check the browser console for JavaScript errors
2. Verify all imports are correct
3. Ensure Node.js and npm are installed
4. Try clearing the `.next` folder and restarting
5. Check that all file paths are correct 
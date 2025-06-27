import Image from "next/image";

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <div className="flex items-center">
              <h1 className="text-3xl font-bold text-gray-900">Spice & Soul</h1>
            </div>
            <nav className="hidden md:flex space-x-8">
              <a href="#" className="text-gray-700 hover:text-gray-900 font-medium">Recipes</a>
              <a href="#" className="text-gray-700 hover:text-gray-900 font-medium">Cooking</a>
              <a href="#" className="text-gray-700 hover:text-gray-900 font-medium">Restaurants</a>
              <a href="#" className="text-gray-700 hover:text-gray-900 font-medium">Food News</a>
            </nav>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative bg-gray-50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Discover the Art of Indian Cuisine
            </h2>
            <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
              From traditional family recipes to modern fusion dishes, explore the rich flavors and vibrant culture of Indian cooking.
            </p>
            <div className="flex justify-center space-x-4">
              <button className="bg-red-600 text-white px-8 py-3 rounded-md font-medium hover:bg-red-700 transition-colors">
                Browse Recipes
              </button>
              <button className="border border-gray-300 text-gray-700 px-8 py-3 rounded-md font-medium hover:bg-gray-50 transition-colors">
                Learn More
              </button>
              <a href="/order" className="bg-green-600 text-white px-8 py-3 rounded-md font-medium hover:bg-green-700 transition-colors">
                Order Now
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Content */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Featured Recipe */}
            <article className="bg-white rounded-lg shadow-md overflow-hidden">
              <div className="h-48 bg-gray-200 flex items-center justify-center">
                <span className="text-gray-500">Recipe Image</span>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  Butter Chicken Masala
                </h3>
                <p className="text-gray-600 mb-4">
                  A creamy, aromatic dish that's perfect for any occasion. This classic recipe brings together tender chicken and rich tomato-based gravy.
                </p>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-500">30 min • Medium</span>
                  <a href="#" className="text-red-600 hover:text-red-700 font-medium">View Recipe →</a>
                </div>
              </div>
            </article>

            {/* Cooking Tips */}
            <article className="bg-white rounded-lg shadow-md overflow-hidden">
              <div className="h-48 bg-gray-200 flex items-center justify-center">
                <span className="text-gray-500">Cooking Tips Image</span>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  Essential Spice Guide
                </h3>
                <p className="text-gray-600 mb-4">
                  Master the fundamentals of Indian spices and learn how to create authentic flavors in your own kitchen.
                </p>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-500">5 min read</span>
                  <a href="#" className="text-red-600 hover:text-red-700 font-medium">Read More →</a>
                </div>
              </div>
            </article>

            {/* Restaurant Review */}
            <article className="bg-white rounded-lg shadow-md overflow-hidden">
              <div className="h-48 bg-gray-200 flex items-center justify-center">
                <span className="text-gray-500">Restaurant Image</span>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  Best Indian Restaurants 2024
                </h3>
                <p className="text-gray-600 mb-4">
                  Our curated list of the most authentic and innovative Indian restaurants across the country.
                </p>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-500">Updated weekly</span>
                  <a href="#" className="text-red-600 hover:text-red-700 font-medium">Explore →</a>
                </div>
              </div>
            </article>
          </div>
        </div>
      </section>

      {/* Newsletter Signup */}
      <section className="bg-gray-50 py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h3 className="text-2xl font-bold text-gray-900 mb-4">
            Stay Updated with New Recipes
          </h3>
          <p className="text-gray-600 mb-8">
            Get weekly recipe inspiration and cooking tips delivered to your inbox.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <input
              type="email"
              placeholder="Enter your email address"
              className="px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent flex-1 max-w-md"
            />
            <button className="bg-red-600 text-white px-8 py-3 rounded-md font-medium hover:bg-red-700 transition-colors">
              Subscribe
            </button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <h4 className="text-lg font-semibold mb-4">Spice & Soul</h4>
              <p className="text-gray-400">
                Bringing the authentic flavors of India to your kitchen.
              </p>
            </div>
            <div>
              <h5 className="font-semibold mb-4">Recipes</h5>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-white">Main Dishes</a></li>
                <li><a href="#" className="hover:text-white">Appetizers</a></li>
                <li><a href="#" className="hover:text-white">Desserts</a></li>
                <li><a href="#" className="hover:text-white">Beverages</a></li>
              </ul>
            </div>
            <div>
              <h5 className="font-semibold mb-4">Learn</h5>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-white">Cooking Tips</a></li>
                <li><a href="#" className="hover:text-white">Spice Guide</a></li>
                <li><a href="#" className="hover:text-white">Techniques</a></li>
                <li><a href="#" className="hover:text-white">Video Tutorials</a></li>
              </ul>
            </div>
            <div>
              <h5 className="font-semibold mb-4">Connect</h5>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-white">About Us</a></li>
                <li><a href="#" className="hover:text-white">Contact</a></li>
                <li><a href="#" className="hover:text-white">Privacy Policy</a></li>
                <li><a href="#" className="hover:text-white">Terms of Service</a></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2024 Spice & Soul. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

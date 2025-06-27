import { useState } from 'react';

export default function DishCard({ dish, onAddToCart, onUpdateQuantity, cartQuantity = 0 }) {
  const [isAdding, setIsAdding] = useState(false);

  const handleAddToCart = () => {
    setIsAdding(true);
    onAddToCart(dish);
    // Reset animation after a short delay
    setTimeout(() => setIsAdding(false), 200);
  };

  const handleQuantityChange = (newQuantity) => {
    if (newQuantity === 0) {
      onUpdateQuantity(dish.id, 0);
    } else {
      onUpdateQuantity(dish.id, newQuantity);
    }
  };

  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-200">
      {/* Image */}
      <div className="aspect-square bg-gradient-to-br from-orange-100 to-red-100 flex items-center justify-center">
        <div className="text-center text-gray-600">
          <div className="text-4xl mb-2">🍽️</div>
          <p className="text-sm">{dish.name}</p>
        </div>
      </div>
      
      {/* Content */}
      <div className="p-4">
        <h3 className="font-semibold text-gray-900 mb-2">{dish.name}</h3>
        <p className="text-sm text-gray-600 mb-3 line-clamp-2">{dish.description}</p>
        
        <div className="flex items-center justify-between">
          <span className="text-lg font-bold text-orange-600">${dish.price}</span>
          
          {/* Quantity Picker */}
          {cartQuantity > 0 ? (
            <div className="flex items-center space-x-2">
              <button
                onClick={() => handleQuantityChange(cartQuantity - 1)}
                className="w-8 h-8 rounded-full bg-orange-100 text-orange-600 flex items-center justify-center hover:bg-orange-200 transition-colors"
              >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 12H4" />
                </svg>
              </button>
              <span className="w-8 text-center font-semibold text-gray-900">{cartQuantity}</span>
              <button
                onClick={() => handleQuantityChange(cartQuantity + 1)}
                className="w-8 h-8 rounded-full bg-orange-100 text-orange-600 flex items-center justify-center hover:bg-orange-200 transition-colors"
              >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
                </svg>
              </button>
            </div>
          ) : (
            <button
              onClick={handleAddToCart}
              className={`px-4 py-2 rounded-lg font-semibold transition-all duration-200 ${
                isAdding 
                  ? 'bg-green-500 text-white scale-95' 
                  : 'bg-orange-600 text-white hover:bg-orange-700 hover:scale-105'
              }`}
            >
              {isAdding ? 'Added!' : 'Add +'}
            </button>
          )}
        </div>
      </div>
    </div>
  );
} 
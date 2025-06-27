import { useState } from 'react';
import CheckoutForm from './CheckoutForm';

export default function CartDrawer({ isOpen, onClose, cart, onUpdateQuantity, onCheckout }) {
  const [isCheckingOut, setIsCheckingOut] = useState(false);
  const [showCheckoutForm, setShowCheckoutForm] = useState(false);

  const calculateSubtotal = () => {
    return cart.reduce((total, item) => total + (item.price * item.quantity), 0);
  };

  const handleCheckout = async () => {
    setShowCheckoutForm(true);
  };

  const handleCheckoutSuccess = (result) => {
    setShowCheckoutForm(false);
    onCheckout(result);
    onClose();
  };

  const handleCheckoutCancel = () => {
    setShowCheckoutForm(false);
  };

  const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);

  if (showCheckoutForm) {
    return (
      <div className="fixed inset-0 z-50 overflow-hidden">
        <div className="absolute inset-0 bg-black bg-opacity-50" onClick={handleCheckoutCancel}></div>
        <div className="absolute inset-0 flex items-center justify-center p-4">
          <CheckoutForm
            cart={cart}
            onClose={handleCheckoutCancel}
            onSuccess={handleCheckoutSuccess}
          />
        </div>
      </div>
    );
  }

  return (
    <>
      {/* Mobile Bottom Sheet */}
      <div className={`fixed inset-0 z-50 lg:hidden ${isOpen ? 'block' : 'hidden'}`}>
        <div className="absolute inset-0 bg-black bg-opacity-50" onClick={onClose}></div>
        <div className="absolute bottom-0 left-0 right-0 bg-white rounded-t-2xl shadow-xl">
          <div className="p-4">
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-lg font-semibold text-gray-900">Your Cart ({totalItems})</h2>
              <button onClick={onClose} className="p-2">
                <svg className="w-6 h-6 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
            
            <div className="max-h-96 overflow-y-auto">
              {cart.length === 0 ? (
                <p className="text-gray-500 text-center py-8">Your cart is empty</p>
              ) : (
                <div className="space-y-4">
                  {cart.map((item) => (
                    <div key={item.id} className="flex items-center space-x-3">
                      <div className="flex-1">
                        <h3 className="font-medium text-gray-900">{item.name}</h3>
                        <p className="text-sm text-gray-500">${item.price}</p>
                      </div>
                      <div className="flex items-center space-x-2">
                        <button
                          onClick={() => onUpdateQuantity(item.id, item.quantity - 1)}
                          className="w-8 h-8 rounded-full bg-orange-100 text-orange-600 flex items-center justify-center"
                        >
                          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 12H4" />
                          </svg>
                        </button>
                        <span className="w-8 text-center font-semibold">{item.quantity}</span>
                        <button
                          onClick={() => onUpdateQuantity(item.id, item.quantity + 1)}
                          className="w-8 h-8 rounded-full bg-orange-100 text-orange-600 flex items-center justify-center"
                        >
                          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
                          </svg>
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>
            
            <div className="border-t border-gray-200 pt-4 mt-4">
              <div className="flex justify-between text-base font-medium text-gray-900 mb-2">
                <p>Subtotal</p>
                <p>${calculateSubtotal().toFixed(2)}</p>
              </div>
              <button
                onClick={handleCheckout}
                disabled={cart.length === 0 || isCheckingOut}
                className="w-full bg-orange-600 text-white py-3 px-4 rounded-lg font-semibold disabled:bg-gray-300 disabled:cursor-not-allowed"
              >
                {isCheckingOut ? 'Processing...' : 'Checkout'}
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Desktop Slide-over */}
      <div className={`fixed inset-0 z-50 hidden lg:block ${isOpen ? 'block' : 'hidden'}`}>
        <div className="absolute inset-0 bg-black bg-opacity-50" onClick={onClose}></div>
        <div className="absolute inset-y-0 right-0 max-w-full flex">
          <div className="relative w-screen max-w-md">
            <div className="h-full flex flex-col bg-white shadow-xl">
              <div className="flex-1 py-6 overflow-y-auto px-4 sm:px-6">
                <div className="flex items-start justify-between">
                  <h2 className="text-lg font-medium text-gray-900">Your Cart ({totalItems})</h2>
                  <button
                    onClick={onClose}
                    className="ml-3 h-7 flex items-center"
                  >
                    <svg className="h-6 w-6 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                    </svg>
                  </button>
                </div>
                
                <div className="mt-8">
                  {cart.length === 0 ? (
                    <p className="text-gray-500 text-center py-8">Your cart is empty</p>
                  ) : (
                    <div className="flow-root">
                      <ul className="-my-6 divide-y divide-gray-200">
                        {cart.map((item) => (
                          <li key={item.id} className="py-6 flex">
                            <div className="flex-1 ml-4">
                              <div className="flex justify-between text-base font-medium text-gray-900">
                                <h3>{item.name}</h3>
                                <p className="ml-4">${(item.price * item.quantity).toFixed(2)}</p>
                              </div>
                              <p className="mt-1 text-sm text-gray-500">${item.price} each</p>
                              <div className="flex items-center space-x-2 mt-2">
                                <button
                                  onClick={() => onUpdateQuantity(item.id, item.quantity - 1)}
                                  className="w-8 h-8 rounded-full bg-orange-100 text-orange-600 flex items-center justify-center hover:bg-orange-200"
                                >
                                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 12H4" />
                                  </svg>
                                </button>
                                <span className="w-8 text-center font-semibold">{item.quantity}</span>
                                <button
                                  onClick={() => onUpdateQuantity(item.id, item.quantity + 1)}
                                  className="w-8 h-8 rounded-full bg-orange-100 text-orange-600 flex items-center justify-center hover:bg-orange-200"
                                >
                                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
                                  </svg>
                                </button>
                              </div>
                            </div>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                </div>
              </div>
              
              <div className="border-t border-gray-200 py-6 px-4 sm:px-6">
                <div className="flex justify-between text-base font-medium text-gray-900">
                  <p>Subtotal</p>
                  <p>${calculateSubtotal().toFixed(2)}</p>
                </div>
                <p className="mt-0.5 text-sm text-gray-500">Shipping and taxes calculated at checkout.</p>
                <div className="mt-6">
                  <button
                    onClick={handleCheckout}
                    disabled={cart.length === 0 || isCheckingOut}
                    className="w-full bg-orange-600 border border-transparent rounded-md py-3 px-8 flex items-center justify-center text-base font-medium text-white hover:bg-orange-700 disabled:bg-gray-300 disabled:cursor-not-allowed"
                  >
                    {isCheckingOut ? 'Processing...' : 'Checkout'}
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
} 
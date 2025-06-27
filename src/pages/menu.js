import Head from 'next/head';
import { useState } from 'react';
import Link from 'next/link';

const dishes = [
  {
    id: 1,
    name: 'Chicken Biryani',
    description: 'Fragrant basmati rice cooked with tender chicken, aromatic spices, and caramelized onions',
    price: 18.99,
    image: '/api/placeholder/400/300',
    category: 'Main Course'
  },
  {
    id: 2,
    name: 'Butter Chicken',
    description: 'Creamy tomato-based curry with tender chicken pieces, served with naan bread',
    price: 16.99,
    image: '/api/placeholder/400/300',
    category: 'Main Course'
  },
  {
    id: 3,
    name: 'Vegetable Samosa',
    description: 'Crispy pastry filled with spiced potatoes, peas, and aromatic spices',
    price: 8.99,
    image: '/api/placeholder/400/300',
    category: 'Appetizer'
  },
  {
    id: 4,
    name: 'Naan Bread',
    description: 'Soft, fluffy flatbread baked in a tandoor oven',
    price: 3.99,
    image: '/api/placeholder/400/300',
    category: 'Bread'
  },
  {
    id: 5,
    name: 'Mango Lassi',
    description: 'Refreshing yogurt-based drink with sweet mango and cardamom',
    price: 4.99,
    image: '/api/placeholder/400/300',
    category: 'Beverage'
  },
  {
    id: 6,
    name: 'Gulab Jamun',
    description: 'Sweet, spongy milk-solid balls soaked in rose-flavored sugar syrup',
    price: 6.99,
    image: '/api/placeholder/400/300',
    category: 'Dessert'
  }
];

export default function Menu() {
  const [cart, setCart] = useState([]);
  const [isCartOpen, setIsCartOpen] = useState(false);

  const addToCart = (dish) => {
    setCart(prevCart => {
      const existingItem = prevCart.find(item => item.id === dish.id);
      if (existingItem) {
        return prevCart.map(item =>
          item.id === dish.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      }
      return [...prevCart, { ...dish, quantity: 1 }];
    });
  };

  const removeFromCart = (dishId) => {
    setCart(prevCart => prevCart.filter(item => item.id !== dishId));
  };

  const updateQuantity = (dishId, quantity) => {
    if (quantity <= 0) {
      removeFromCart(dishId);
      return;
    }
    setCart(prevCart =>
      prevCart.map(item =>
        item.id === dishId ? { ...item, quantity } : item
      )
    );
  };

  const getTotalPrice = () => {
    return cart.reduce((total, item) => total + (item.price * item.quantity), 0);
  };

  const getTotalItems = () => {
    return cart.reduce((total, item) => total + item.quantity, 0);
  };

  return (
    <div style={{ fontFamily: 'system-ui, -apple-system, sans-serif' }}>
      <Head>
        <title>Menu - Taste Pakistan at Home</title>
        <meta name="description" content="Browse our authentic Pakistani menu featuring biryani, curries, breads, and more." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>

      {/* Header */}
      <header style={{
        backgroundColor: 'white',
        borderBottom: '1px solid #e5e7eb',
        position: 'sticky',
        top: 0,
        zIndex: 40
      }}>
        <div style={{
          maxWidth: '1200px',
          margin: '0 auto',
          padding: '16px 20px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between'
        }}>
          <Link href="/" style={{
            fontSize: '24px',
            fontWeight: 'bold',
            color: '#f97316',
            textDecoration: 'none'
          }}>
            Taste Pakistan
          </Link>
          
          <button
            onClick={() => setIsCartOpen(true)}
            style={{
              position: 'relative',
              backgroundColor: '#f97316',
              color: 'white',
              border: 'none',
              borderRadius: '8px',
              padding: '12px 20px',
              fontSize: '16px',
              fontWeight: '600',
              cursor: 'pointer',
              display: 'flex',
              alignItems: 'center',
              gap: '8px'
            }}
          >
            <svg style={{ width: '20px', height: '20px' }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4m0 0L7 13m0 0l-2.5 5M7 13l2.5 5m6-5v6a2 2 0 01-2 2H9a2 2 0 01-2-2v-6m8 0V9a2 2 0 00-2-2H9a2 2 0 00-2 2v4.01" />
            </svg>
            Cart
            {getTotalItems() > 0 && (
              <span style={{
                backgroundColor: 'white',
                color: '#f97316',
                borderRadius: '50%',
                width: '20px',
                height: '20px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontSize: '12px',
                fontWeight: 'bold'
              }}>
                {getTotalItems()}
              </span>
            )}
          </button>
        </div>
      </header>

      {/* Main Content */}
      <main style={{ padding: '40px 20px' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          {/* Page Header */}
          <div style={{ textAlign: 'center', marginBottom: '48px' }}>
            <h1 style={{
              fontSize: '3rem',
              fontWeight: 'bold',
              color: '#111827',
              marginBottom: '16px'
            }}>
              Our Menu
            </h1>
            <p style={{
              fontSize: '1.25rem',
              color: '#6b7280',
              maxWidth: '600px',
              margin: '0 auto'
            }}>
              Authentic Pakistani dishes made with love and traditional recipes
            </p>
          </div>

          {/* Menu Grid */}
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fill, minmax(350px, 1fr))',
            gap: '32px'
          }}>
            {dishes.map((dish) => (
              <div key={dish.id} style={{
                backgroundColor: 'white',
                borderRadius: '16px',
                overflow: 'hidden',
                boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
                transition: 'transform 0.2s ease, box-shadow 0.2s ease'
              }}
              onMouseEnter={(e) => {
                e.target.style.transform = 'translateY(-4px)';
                e.target.style.boxShadow = '0 10px 25px rgba(0, 0, 0, 0.15)';
              }}
              onMouseLeave={(e) => {
                e.target.style.transform = 'translateY(0)';
                e.target.style.boxShadow = '0 4px 6px rgba(0, 0, 0, 0.1)';
              }}
              >
                {/* Dish Image */}
                <div style={{
                  height: '200px',
                  backgroundColor: '#f3f4f6',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: '#9ca3af'
                }}>
                  <div style={{ textAlign: 'center' }}>
                    <div style={{ fontSize: '48px', marginBottom: '8px' }}>🍽️</div>
                    <p style={{ fontSize: '14px' }}>{dish.name}</p>
                  </div>
                </div>

                {/* Dish Info */}
                <div style={{ padding: '24px' }}>
                  <div style={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'flex-start',
                    marginBottom: '12px'
                  }}>
                    <h3 style={{
                      fontSize: '1.25rem',
                      fontWeight: '600',
                      color: '#111827',
                      margin: 0
                    }}>
                      {dish.name}
                    </h3>
                    <span style={{
                      fontSize: '1.125rem',
                      fontWeight: '600',
                      color: '#f97316'
                    }}>
                      ${dish.price}
                    </span>
                  </div>
                  
                  <p style={{
                    color: '#6b7280',
                    lineHeight: 1.5,
                    marginBottom: '20px',
                    fontSize: '14px'
                  }}>
                    {dish.description}
                  </p>

                  <div style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between'
                  }}>
                    <span style={{
                      backgroundColor: '#fef3c7',
                      color: '#92400e',
                      padding: '4px 12px',
                      borderRadius: '16px',
                      fontSize: '12px',
                      fontWeight: '500'
                    }}>
                      {dish.category}
                    </span>
                    
                    <button
                      onClick={() => addToCart(dish)}
                      style={{
                        backgroundColor: '#f97316',
                        color: 'white',
                        border: 'none',
                        borderRadius: '8px',
                        padding: '8px 16px',
                        fontSize: '14px',
                        fontWeight: '600',
                        cursor: 'pointer',
                        transition: 'background-color 0.2s ease'
                      }}
                      onMouseEnter={(e) => e.target.style.backgroundColor = '#ea580c'}
                      onMouseLeave={(e) => e.target.style.backgroundColor = '#f97316'}
                    >
                      Add to Cart
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </main>

      {/* Cart Drawer */}
      {isCartOpen && (
        <div style={{
          position: 'fixed',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          zIndex: 50,
          overflow: 'hidden'
        }}>
          <div 
            style={{
              position: 'absolute',
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
              backgroundColor: 'rgba(0, 0, 0, 0.5)'
            }}
            onClick={() => setIsCartOpen(false)}
          ></div>
          <div style={{
            position: 'absolute',
            top: 0,
            right: 0,
            bottom: 0,
            width: '400px',
            maxWidth: '100vw',
            backgroundColor: 'white',
            boxShadow: '-10px 0 25px rgba(0, 0, 0, 0.1)',
            display: 'flex',
            flexDirection: 'column'
          }}>
            <div style={{
              flex: 1,
              padding: '24px',
              overflowY: 'auto'
            }}>
              <div style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                marginBottom: '32px'
              }}>
                <h2 style={{
                  fontSize: '1.125rem',
                  fontWeight: '500',
                  color: '#111827'
                }}>Your Cart</h2>
                <button
                  onClick={() => setIsCartOpen(false)}
                  style={{
                    background: 'none',
                    border: 'none',
                    cursor: 'pointer',
                    padding: '8px'
                  }}
                >
                  <svg style={{ width: '24px', height: '24px', color: '#9ca3af' }} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>
              
              {cart.length === 0 ? (
                <div style={{ textAlign: 'center', padding: '32px 0' }}>
                  <p style={{ color: '#6b7280' }}>Your cart is empty</p>
                </div>
              ) : (
                <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
                  {cart.map((item) => (
                    <div key={item.id} style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: '12px',
                      padding: '16px',
                      backgroundColor: '#f9fafb',
                      borderRadius: '8px'
                    }}>
                      <div style={{ flex: 1 }}>
                        <h3 style={{
                          fontSize: '16px',
                          fontWeight: '600',
                          color: '#111827',
                          margin: '0 0 4px 0'
                        }}>
                          {item.name}
                        </h3>
                        <p style={{
                          fontSize: '14px',
                          color: '#6b7280',
                          margin: 0
                        }}>
                          ${item.price}
                        </p>
                      </div>
                      
                      <div style={{
                        display: 'flex',
                        alignItems: 'center',
                        gap: '8px'
                      }}>
                        <button
                          onClick={() => updateQuantity(item.id, item.quantity - 1)}
                          style={{
                            backgroundColor: '#e5e7eb',
                            border: 'none',
                            borderRadius: '4px',
                            width: '32px',
                            height: '32px',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            cursor: 'pointer',
                            fontSize: '18px',
                            fontWeight: 'bold'
                          }}
                        >
                          -
                        </button>
                        <span style={{
                          fontSize: '16px',
                          fontWeight: '600',
                          minWidth: '24px',
                          textAlign: 'center'
                        }}>
                          {item.quantity}
                        </span>
                        <button
                          onClick={() => updateQuantity(item.id, item.quantity + 1)}
                          style={{
                            backgroundColor: '#e5e7eb',
                            border: 'none',
                            borderRadius: '4px',
                            width: '32px',
                            height: '32px',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            cursor: 'pointer',
                            fontSize: '18px',
                            fontWeight: 'bold'
                          }}
                        >
                          +
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>
            
            <div style={{
              borderTop: '1px solid #e5e7eb',
              padding: '24px'
            }}>
              <div style={{
                display: 'flex',
                justifyContent: 'space-between',
                fontSize: '1rem',
                fontWeight: '500',
                color: '#111827',
                marginBottom: '8px'
              }}>
                <p>Subtotal</p>
                <p>${getTotalPrice().toFixed(2)}</p>
              </div>
              <p style={{
                fontSize: '0.875rem',
                color: '#6b7280',
                marginBottom: '24px'
              }}>Shipping and taxes calculated at checkout.</p>
              <button
                style={{
                  width: '100%',
                  backgroundColor: '#f97316',
                  color: 'white',
                  border: 'none',
                  borderRadius: '6px',
                  padding: '12px 32px',
                  fontSize: '1rem',
                  fontWeight: '500',
                  cursor: 'pointer',
                  transition: 'background-color 0.2s ease'
                }}
                onMouseEnter={(e) => e.target.style.backgroundColor = '#ea580c'}
                onMouseLeave={(e) => e.target.style.backgroundColor = '#f97316'}
              >
                Checkout
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
} 
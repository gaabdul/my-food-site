import Head from 'next/head';
import Link from 'next/link';
import { useState } from 'react';

export default function Home() {
  const [isCartOpen, setIsCartOpen] = useState(false);

  return (
    <div style={{ fontFamily: 'system-ui, -apple-system, sans-serif' }}>
      <Head>
        <title>Taste Pakistan at Home - Authentic Pakistani Food Delivery</title>
        <meta name="description" content="Order authentic Pakistani dishes made with love by Sidra & Abdul. Fresh, homemade food delivered to your door." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {/* Hero Section */}
      <section style={{
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        background: 'linear-gradient(135deg, #f97316 0%, #dc2626 50%, #ea580c 100%)',
        position: 'relative',
        color: 'white',
        textAlign: 'center',
        padding: '20px'
      }}>
        {/* Background Overlay */}
        <div style={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          backgroundColor: 'rgba(0, 0, 0, 0.4)'
        }}></div>
        
        <div style={{ position: 'relative', zIndex: 10, maxWidth: '800px' }}>
          <h1 style={{
            fontSize: 'clamp(2.5rem, 8vw, 4rem)',
            fontWeight: 'bold',
            marginBottom: '24px',
            lineHeight: 1.2
          }}>
            Taste Pakistan at Home
          </h1>
          <p style={{
            fontSize: 'clamp(1.1rem, 4vw, 1.5rem)',
            marginBottom: '32px',
            opacity: 0.9,
            maxWidth: '600px',
            margin: '0 auto 32px auto'
          }}>
            Authentic Pakistani dishes made with love, delivered fresh to your doorstep
          </p>
          <div style={{
            display: 'flex',
            flexDirection: 'column',
            gap: '16px',
            alignItems: 'center'
          }}>
            <Link 
              href="/menu" 
              style={{
                backgroundColor: 'white',
                color: '#f97316',
                padding: '16px 32px',
                borderRadius: '8px',
                fontWeight: '600',
                fontSize: '18px',
                textDecoration: 'none',
                boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
                transition: 'all 0.2s ease',
                border: '2px solid white'
              }}
              onMouseEnter={(e) => {
                e.target.style.backgroundColor = '#f3f4f6';
                e.target.style.transform = 'translateY(-2px)';
              }}
              onMouseLeave={(e) => {
                e.target.style.backgroundColor = 'white';
                e.target.style.transform = 'translateY(0)';
              }}
            >
              Browse Dishes
            </Link>
            <button 
              onClick={() => setIsCartOpen(true)}
              style={{
                backgroundColor: '#f97316',
                color: 'white',
                padding: '16px 32px',
                borderRadius: '8px',
                fontWeight: '600',
                fontSize: '18px',
                border: '2px solid white',
                cursor: 'pointer',
                boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
                transition: 'all 0.2s ease'
              }}
              onMouseEnter={(e) => {
                e.target.style.backgroundColor = '#ea580c';
                e.target.style.transform = 'translateY(-2px)';
              }}
              onMouseLeave={(e) => {
                e.target.style.backgroundColor = '#f97316';
                e.target.style.transform = 'translateY(0)';
              }}
            >
              Order Now
            </button>
          </div>
        </div>
      </section>

      {/* Food Story Section */}
      <section style={{
        padding: '80px 20px',
        backgroundColor: 'white'
      }}>
        <div style={{
          maxWidth: '1200px',
          margin: '0 auto'
        }}>
          <div style={{
            display: 'grid',
            gridTemplateColumns: '1fr 1fr',
            gap: '48px',
            alignItems: 'center'
          }}>
            {/* Photo */}
            <div style={{
              aspectRatio: '1',
              background: 'linear-gradient(135deg, #fed7aa 0%, #fecaca 100%)',
              borderRadius: '16px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              boxShadow: '0 10px 25px rgba(0, 0, 0, 0.1)'
            }}>
              <div style={{ textAlign: 'center', color: '#6b7280' }}>
                <div style={{ fontSize: '64px', marginBottom: '16px' }}>👨‍🍳👩‍🍳</div>
                <p style={{ fontSize: '18px', fontWeight: '600' }}>Sidra & Abdul</p>
              </div>
            </div>
            
            {/* Text */}
            <div>
              <h2 style={{
                fontSize: '2.5rem',
                fontWeight: 'bold',
                color: '#111827',
                marginBottom: '24px'
              }}>
                Our Food Story
              </h2>
              <p style={{
                fontSize: '1.25rem',
                color: '#6b7280',
                lineHeight: 1.6,
                marginBottom: '32px'
              }}>
                We're Sidra & Abdul, Pakistani food lovers who believe the best way to make friends is to feed them.
              </p>
              <p style={{
                color: '#6b7280',
                lineHeight: 1.6,
                marginBottom: '32px',
                fontSize: '1rem'
              }}>
                Growing up in Pakistan, we learned that food is more than just sustenance—it's a way to bring people together, share stories, and create memories. Every dish we make is crafted with the same love and care that our mothers and grandmothers put into their cooking.
              </p>
              <Link 
                href="/menu"
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  backgroundColor: '#f97316',
                  color: 'white',
                  padding: '12px 24px',
                  borderRadius: '8px',
                  fontWeight: '600',
                  textDecoration: 'none',
                  boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
                  transition: 'all 0.2s ease'
                }}
                onMouseEnter={(e) => {
                  e.target.style.backgroundColor = '#ea580c';
                  e.target.style.transform = 'translateY(-2px)';
                }}
                onMouseLeave={(e) => {
                  e.target.style.backgroundColor = '#f97316';
                  e.target.style.transform = 'translateY(0)';
                }}
              >
                See the Menu
                <svg style={{ marginLeft: '8px', width: '20px', height: '20px' }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section style={{
        padding: '80px 20px',
        backgroundColor: '#f9fafb'
      }}>
        <div style={{
          maxWidth: '1200px',
          margin: '0 auto'
        }}>
          <div style={{ textAlign: 'center', marginBottom: '64px' }}>
            <h2 style={{
              fontSize: '2.5rem',
              fontWeight: 'bold',
              color: '#111827',
              marginBottom: '16px'
            }}>
              How It Works
            </h2>
            <p style={{
              fontSize: '1.25rem',
              color: '#6b7280',
              maxWidth: '600px',
              margin: '0 auto'
            }}>
              Getting authentic Pakistani food to your table is simple
            </p>
          </div>
          
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
            gap: '32px'
          }}>
            {/* Step 1 */}
            <div style={{ textAlign: 'center' }}>
              <div style={{
                width: '64px',
                height: '64px',
                backgroundColor: '#fed7aa',
                borderRadius: '50%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                margin: '0 auto 24px auto',
                boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)'
              }}>
                <svg style={{ width: '32px', height: '32px', color: '#f97316' }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v10a2 2 0 002 2h8a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                </svg>
              </div>
              <h3 style={{
                fontSize: '1.25rem',
                fontWeight: '600',
                color: '#111827',
                marginBottom: '12px'
              }}>Pick Dishes</h3>
              <p style={{ color: '#6b7280', lineHeight: 1.6 }}>
                Choose from our carefully curated menu of authentic Pakistani favorites
              </p>
            </div>
            
            {/* Step 2 */}
            <div style={{ textAlign: 'center' }}>
              <div style={{
                width: '64px',
                height: '64px',
                backgroundColor: '#fed7aa',
                borderRadius: '50%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                margin: '0 auto 24px auto',
                boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)'
              }}>
                <svg style={{ width: '32px', height: '32px', color: '#f97316' }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 style={{
                fontSize: '1.25rem',
                fontWeight: '600',
                color: '#111827',
                marginBottom: '12px'
              }}>Schedule Delivery</h3>
              <p style={{ color: '#6b7280', lineHeight: 1.6 }}>
                Select your preferred delivery time and we'll bring it fresh to you
              </p>
            </div>
            
            {/* Step 3 */}
            <div style={{ textAlign: 'center' }}>
              <div style={{
                width: '64px',
                height: '64px',
                backgroundColor: '#fed7aa',
                borderRadius: '50%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                margin: '0 auto 24px auto',
                boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)'
              }}>
                <svg style={{ width: '32px', height: '32px', color: '#f97316' }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.828 14.828a4 4 0 01-5.656 0M9 10h1m4 0h1m-6 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 style={{
                fontSize: '1.25rem',
                fontWeight: '600',
                color: '#111827',
                marginBottom: '12px'
              }}>Enjoy</h3>
              <p style={{ color: '#6b7280', lineHeight: 1.6 }}>
                Savor the authentic flavors of Pakistan in the comfort of your home
              </p>
            </div>
          </div>
        </div>
      </section>

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
              
              <div style={{ textAlign: 'center', padding: '32px 0' }}>
                <p style={{ color: '#6b7280' }}>Your cart is empty</p>
              </div>
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
                <p>$0.00</p>
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
import { supabase } from '../../lib/supabase';

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  try {
    const { cart, customer } = req.body;

    // Validate required fields
    if (!cart || !Array.isArray(cart) || cart.length === 0) {
      return res.status(400).json({ error: 'Cart is required and must not be empty' });
    }

    if (!customer || !customer.name || !customer.phone || !customer.address) {
      return res.status(400).json({ error: 'Customer information is required' });
    }

    // Calculate total
    const subtotal = cart.reduce((total, item) => total + (item.price * item.quantity), 0);
    const deliveryFee = 5.99;
    const total = subtotal + deliveryFee;

    // Insert order into Supabase
    const { data, error } = await supabase
      .from('orders')
      .insert([
        {
          items: cart,
          customer_name: customer.name,
          customer_phone: customer.phone,
          customer_address: customer.address,
          customer_email: customer.email || null,
          subtotal: subtotal,
          delivery_fee: deliveryFee,
          total: total,
          status: 'pending'
        }
      ])
      .select();

    if (error) {
      console.error('Supabase error:', error);
      return res.status(500).json({ error: 'Failed to create order' });
    }

    return res.status(200).json({ 
      status: 'ok', 
      order_id: data[0].id,
      message: 'Order placed successfully' 
    });

  } catch (error) {
    console.error('Checkout error:', error);
    return res.status(500).json({ error: 'Internal server error' });
  }
} 
import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { CheckCircle, CreditCard, Truck, Shield, ArrowLeft, Package } from 'lucide-react';
import PaymentStatusChecker from './PaymentStatusChecker';

const Checkout = ({ onBack }) => {
  const [formData, setFormData] = useState({
    customer: {
      name: '',
      email: '',
      phone: '',
      address: {
        street: '',
        city: '',
        state: '',
        pincode: '',
        country: 'India'
      }
    },
    product: {
      quantity: 1,
      price: 0,
      discount: 0
    },
    payment: {
      method: 'razorpay'
    },
    notes: ''
  });

  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);
  const [orderSuccess, setOrderSuccess] = useState(false);
  const [orderDetails, setOrderDetails] = useState(null);
  const [lastOrderId, setLastOrderId] = useState(() => {
    // Try to get last order ID from localStorage (for abandoned payment recovery)
    return localStorage.getItem('lastOrderId') || null;
  });
  
  // Fetch product data from the backend
  useEffect(() => {
    const fetchProductData = async () => {
      try {
        const response = await fetch('http://localhost:5001/api/products/default');
        const data = await response.json();
        
        if (data.success && data.data) {
          setFormData(prev => ({
            ...prev,
            product: {
              ...prev.product,
              price: data.data.price,
              discount: data.data.discount
            }
          }));
        }
      } catch (error) {
        console.error('Error fetching product data:', error);
      }
    };
    
    fetchProductData();
  }, []);

  // Calculate totals
  const baseAmount = formData.product.price * formData.product.quantity;
  const discountAmount = (baseAmount * formData.product.discount) / 100;
  const totalAmount = baseAmount - discountAmount;

  // Form validation
  const validateForm = () => {
    const newErrors = {};

    if (!formData.customer.name.trim()) {
      newErrors.name = 'Name is required';
    } else if (formData.customer.name.length < 2) {
      newErrors.name = 'Name must be at least 2 characters';
    }

    if (!formData.customer.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.customer.email)) {
      newErrors.email = 'Email is invalid';
    }

    if (!formData.customer.phone.trim()) {
      newErrors.phone = 'Phone number is required';
    } else if (!/^[6-9]\d{9}$/.test(formData.customer.phone)) {
      newErrors.phone = 'Enter valid 10-digit phone number';
    }

    if (!formData.customer.address.street.trim()) {
      newErrors.street = 'Street address is required';
    }

    if (!formData.customer.address.city.trim()) {
      newErrors.city = 'City is required';
    }

    if (!formData.customer.address.state.trim()) {
      newErrors.state = 'State is required';
    }

    if (!formData.customer.address.pincode.trim()) {
      newErrors.pincode = 'Pincode is required';
    } else if (!/^[1-9][0-9]{5}$/.test(formData.customer.address.pincode)) {
      newErrors.pincode = 'Enter valid 6-digit pincode';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  // Handle input changes
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    
    if (name.includes('.')) {
      const [parent, child, grandchild] = name.split('.');
      setFormData(prev => ({
        ...prev,
        [parent]: {
          ...prev[parent],
          [child]: grandchild ? {
            ...prev[parent][child],
            [grandchild]: value
          } : value
        }
      }));
    } else {
      setFormData(prev => ({
        ...prev,
        [name]: value
      }));
    }

    // Clear error when user starts typing
    if (errors[name.split('.').pop()]) {
      setErrors(prev => ({
        ...prev,
        [name.split('.').pop()]: ''
      }));
    }
  };

  // Handle quantity change
  const handleQuantityChange = (delta) => {
    const newQuantity = Math.max(1, Math.min(10, formData.product.quantity + delta));
    setFormData(prev => ({
      ...prev,
      product: {
        ...prev.product,
        quantity: newQuantity
      }
    }));
  };

  // Create order
  const createOrder = async () => {
    try {
      const response = await fetch('http://localhost:5001/api/orders/create', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          ...formData,
          totalAmount
        })
      });

      const data = await response.json();
      
      if (!data.success) {
        throw new Error(data.message || 'Failed to create order');
      }

      // Store order ID in localStorage for abandoned payment recovery
      localStorage.setItem('lastOrderId', data.data.orderId);
      setLastOrderId(data.data.orderId);

      return data.data;
    } catch (error) {
      console.error('Order creation error:', error);
      throw error;
    }
  };

  // Load Razorpay script
  const loadRazorpayScript = () => {
    return new Promise((resolve) => {
      const script = document.createElement('script');
      script.src = 'https://checkout.razorpay.com/v1/checkout.js';
      script.onload = () => resolve(true);
      script.onerror = () => resolve(false);
      document.body.appendChild(script);
    });
  };

  // Handle Razorpay payment
  const handleRazorpayPayment = async (orderData) => {
    const isScriptLoaded = await loadRazorpayScript();
    
    if (!isScriptLoaded) {
      throw new Error('Razorpay SDK failed to load');
    }

    const options = {
      key: 'rzp_test_jDnJATlK3K3LmY', // Replace with your Razorpay key
      amount: totalAmount * 100, // Amount in paise
      currency: 'INR',
      name: 'Neelkanth Pharmacy',
      description: 'Neelkanth Palangtod Capsules',
      order_id: orderData.razorpayOrderId,
      handler: async (response) => {
        try {
          // Verify payment
          const verifyResponse = await fetch('http://localhost:5001/api/orders/verify-payment', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({
              orderId: orderData.orderId,
              razorpay_order_id: response.razorpay_order_id,
              razorpay_payment_id: response.razorpay_payment_id,
              razorpay_signature: response.razorpay_signature
            })
          });

          const verifyData = await verifyResponse.json();
          
          if (verifyData.success) {
            setOrderDetails({
              ...orderData,
              paymentId: response.razorpay_payment_id,
              status: 'confirmed'
            });
            setOrderSuccess(true);
          } else {
            throw new Error('Payment verification failed');
          }
        } catch (error) {
          console.error('Payment verification error:', error);
          alert('Payment verification failed. Please contact support.');
        } finally {
          setLoading(false);
        }
      },
      // Modal close event - this helps with abandoned payment tracking
      modal: {
        ondismiss: () => {
          setLoading(false);
          alert('Payment window closed. If you completed the payment, your order will be processed automatically.');
        }
      },
      prefill: {
        name: formData.customer.name,
        email: formData.customer.email,
        contact: formData.customer.phone
      },
      theme: {
        color: '#dc2626'
      }
    };

    const paymentObject = new window.Razorpay(options);
    paymentObject.open();
  };

  // Handle COD payment
  const handleCODPayment = async (orderData) => {
    setOrderDetails(orderData);
    setOrderSuccess(true);
    setLoading(false);
  };

  // Submit order
  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!validateForm()) {
      return;
    }

    setLoading(true);

    try {
      const orderData = await createOrder();

      if (formData.payment.method === 'razorpay') {
        await handleRazorpayPayment(orderData);
      } else {
        await handleCODPayment(orderData);
      }
    } catch (error) {
      console.error('Order submission error:', error);
      alert(error.message || 'Failed to process order. Please try again.');
      setLoading(false);
    }
  };

  // Handle successful payment status check
  const handlePaymentStatusSuccess = (orderData) => {
    setOrderDetails(orderData);
    setOrderSuccess(true);
    // Clear the stored order ID since it's now handled
    localStorage.removeItem('lastOrderId');
    setLastOrderId(null);
  };

  if (orderSuccess) {
    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        className="min-h-screen bg-gradient-to-br from-green-50 to-blue-50 flex items-center justify-center p-4"
      >
        <div className="bg-white rounded-2xl shadow-2xl p-8 max-w-md w-full text-center">
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.2 }}
            className="mb-6"
          >
            <CheckCircle className="w-20 h-20 text-green-500 mx-auto" />
          </motion.div>
          
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Order Confirmed!</h2>
          <p className="text-gray-600 mb-6">
            Thank you for your order. We'll send you a confirmation email shortly.
          </p>
          
          <div className="bg-gray-50 rounded-lg p-4 mb-6">
            <p className="text-sm font-semibold text-gray-700">Order ID</p>
            <p className="text-lg font-bold text-red-600">{orderDetails?.orderId}</p>
          </div>
          
          <button
            onClick={() => window.location.reload()}
            className="w-full bg-red-600 text-white py-3 rounded-lg font-semibold hover:bg-red-700 transition-colors"
          >
            Place Another Order
          </button>
        </div>
      </motion.div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 py-8 px-4 sm:px-6 lg:px-8">
      {/* Check for abandoned payments */}
      {lastOrderId && <PaymentStatusChecker orderId={lastOrderId} onSuccess={handlePaymentStatusSuccess} />}
      
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-2xl sm:text-3xl font-bold text-gray-900">Checkout</h1>
          <p className="text-gray-600">Complete your order for Neelkanth Palangtod Capsules</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Order Form */}
          <div className="lg:col-span-2">
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Personal Information */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="bg-white rounded-xl p-4 sm:p-6"
              >
                <h3 className="text-lg sm:text-xl font-semibold text-gray-900 mb-4 flex items-center gap-2">
                  <Package className="w-5 h-5 text-red-600" />
                  Personal Information
                </h3>
                
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      name="customer.name"
                      value={formData.customer.name}
                      onChange={handleInputChange}
                      className={`w-full px-3 sm:px-4 py-2 sm:py-3 border rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent ${
                        errors.name ? 'border-red-500' : 'border-gray-300'
                      }`}
                      placeholder="Enter your full name"
                    />
                    {errors.name && <p className="text-red-500 text-sm mt-1">{errors.name}</p>}
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Phone Number *
                    </label>
                    <input
                      type="tel"
                      name="customer.phone"
                      value={formData.customer.phone}
                      onChange={handleInputChange}
                      className={`w-full px-3 sm:px-4 py-2 sm:py-3 border rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent ${
                        errors.phone ? 'border-red-500' : 'border-gray-300'
                      }`}
                      placeholder="10-digit phone number"
                    />
                    {errors.phone && <p className="text-red-500 text-sm mt-1">{errors.phone}</p>}
                  </div>
                </div>
                
                <div className="mt-4">
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    name="customer.email"
                    value={formData.customer.email}
                    onChange={handleInputChange}
                    className={`w-full px-3 sm:px-4 py-2 sm:py-3 border rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent ${
                      errors.email ? 'border-red-500' : 'border-gray-300'
                    }`}
                    placeholder="your.email@example.com"
                  />
                  {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email}</p>}
                </div>
              </motion.div>

              {/* Shipping Address */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 }}
                className="bg-white rounded-xl p-4 sm:p-6"
              >
                <h3 className="text-lg sm:text-xl font-semibold text-gray-900 mb-4 flex items-center gap-2">
                  <Truck className="w-5 h-5 text-red-600" />
                  Shipping Address
                </h3>
                
                <div className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Street Address *
                    </label>
                    <textarea
                      name="customer.address.street"
                      value={formData.customer.address.street}
                      onChange={handleInputChange}
                      rows={3}
                      className={`w-full px-3 sm:px-4 py-2 sm:py-3 border rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent ${
                        errors.street ? 'border-red-500' : 'border-gray-300'
                      }`}
                      placeholder="Enter your complete address"
                    />
                    {errors.street && <p className="text-red-500 text-sm mt-1">{errors.street}</p>}
                  </div>
                  
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        City *
                      </label>
                      <input
                        type="text"
                        name="customer.address.city"
                        value={formData.customer.address.city}
                        onChange={handleInputChange}
                        className={`w-full px-3 sm:px-4 py-2 sm:py-3 border rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent ${
                          errors.city ? 'border-red-500' : 'border-gray-300'
                        }`}
                        placeholder="City"
                      />
                      {errors.city && <p className="text-red-500 text-sm mt-1">{errors.city}</p>}
                    </div>
                    
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        State *
                      </label>
                      <input
                        type="text"
                        name="customer.address.state"
                        value={formData.customer.address.state}
                        onChange={handleInputChange}
                        className={`w-full px-3 sm:px-4 py-2 sm:py-3 border rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent ${
                          errors.state ? 'border-red-500' : 'border-gray-300'
                        }`}
                        placeholder="State"
                      />
                      {errors.state && <p className="text-red-500 text-sm mt-1">{errors.state}</p>}
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Pincode *
                      </label>
                      <input
                        type="text"
                        name="customer.address.pincode"
                        value={formData.customer.address.pincode}
                        onChange={handleInputChange}
                        className={`w-full px-3 sm:px-4 py-2 sm:py-3 border rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent ${
                          errors.pincode ? 'border-red-500' : 'border-gray-300'
                        }`}
                        placeholder="6-digit pincode"
                      />
                      {errors.pincode && <p className="text-red-500 text-sm mt-1">{errors.pincode}</p>}
                    </div>
                    
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Country
                      </label>
                      <input
                        type="text"
                        value="India"
                        disabled
                        className="w-full px-3 sm:px-4 py-2 sm:py-3 border border-gray-300 rounded-lg bg-gray-50"
                      />
                    </div>
                  </div>
                </div>
              </motion.div>

              {/* Payment Method */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="bg-white rounded-xl p-4 sm:p-6"
              >
                <h3 className="text-lg sm:text-xl font-semibold text-gray-900 mb-4 flex items-center gap-2">
                  <CreditCard className="w-5 h-5 text-red-600" />
                  Payment Method
                </h3>
                
                <div className="space-y-3">
                  <label className="flex items-center p-3 sm:p-4 border rounded-lg cursor-pointer hover:bg-gray-50 transition-colors">
                    <input
                      type="radio"
                      name="payment.method"
                      value="razorpay"
                      checked={formData.payment.method === 'razorpay'}
                      onChange={handleInputChange}
                      className="w-4 h-4 text-red-600 focus:ring-red-500"
                    />
                    <div className="ml-3">
                      <p className="font-semibold text-gray-900">Online Payment</p>
                      <p className="text-sm text-gray-600">Pay securely with Razorpay (Cards, UPI, Net Banking)</p>
                    </div>
                  </label>
                  
                  <label className="flex items-center p-3 sm:p-4 border rounded-lg cursor-pointer hover:bg-gray-50 transition-colors">
                    <input
                      type="radio"
                      name="payment.method"
                      value="cod"
                      checked={formData.payment.method === 'cod'}
                      onChange={handleInputChange}
                      className="w-4 h-4 text-red-600 focus:ring-red-500"
                    />
                    <div className="ml-3">
                      <p className="font-semibold text-gray-900">Cash on Delivery</p>
                      <p className="text-sm text-gray-600">Pay when you receive the product</p>
                    </div>
                  </label>
                </div>
              </motion.div>

              {/* Additional Notes */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className="bg-white rounded-xl p-4 sm:p-6"
              >
                <h3 className="text-lg sm:text-xl font-semibold text-gray-900 mb-4">
                  Additional Notes (Optional)
                </h3>
                <textarea
                  name="notes"
                  value={formData.notes}
                  onChange={handleInputChange}
                  rows={3}
                  className="w-full px-3 sm:px-4 py-2 sm:py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent"
                  placeholder="Any special instructions or requests..."
                />
              </motion.div>
            </form>
          </div>

          {/* Order Summary */}
          <div className="lg:col-span-1">
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              className="bg-white rounded-xl p-4 sm:p-6 lg:sticky lg:top-8"
            >
              <h3 className="text-lg sm:text-xl font-semibold text-gray-900 mb-4">Order Summary</h3>
              
              {/* Product Details */}
              <div className="border-b border-gray-200 pb-4 mb-4">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-16 h-16 bg-red-100 rounded-lg flex items-center justify-center">
                    <Package className="w-8 h-8 text-red-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">Neelkanth Palangtod Capsules</h4>
                    <p className="text-sm text-gray-600">Ayurvedic Strength Enhancement</p>
                  </div>
                </div>
                
                {/* Quantity Selector */}
                <div className="flex items-center justify-between">
                  <span className="text-gray-700">Quantity:</span>
                  <div className="flex items-center gap-3">
                    <button
                      type="button"
                      onClick={() => handleQuantityChange(-1)}
                      className="w-8 h-8 rounded-full border border-gray-300 flex items-center justify-center hover:bg-gray-50"
                    >
                      -
                    </button>
                    <span className="font-semibold">{formData.product.quantity}</span>
                    <button
                      type="button"
                      onClick={() => handleQuantityChange(1)}
                      className="w-8 h-8 rounded-full border border-gray-300 flex items-center justify-center hover:bg-gray-50"
                    >
                      +
                    </button>
                  </div>
                </div>
              </div>

              {/* Price Breakdown */}
              <div className="space-y-3 mb-6">
                <div className="flex justify-between">
                  <span className="text-gray-700">Subtotal:</span>
                  <span className="font-semibold">₹{baseAmount}</span>
                </div>
                
                {formData.product.discount > 0 && (
                  <div className="flex justify-between text-green-600">
                    <span>Discount ({formData.product.discount}%):</span>
                    <span>-₹{discountAmount}</span>
                  </div>
                )}
                
                <div className="flex justify-between">
                  <span className="text-gray-700">Shipping:</span>
                  <span className="text-green-600 font-semibold">FREE</span>
                </div>
                
                <div className="border-t border-gray-200 pt-3">
                  <div className="flex justify-between text-lg font-bold">
                    <span>Total:</span>
                    <span className="text-red-600">₹{totalAmount}</span>
                  </div>
                </div>
              </div>

              {/* Security Features */}
              <div className="bg-green-50 rounded-lg p-4 mb-6">
                <div className="flex items-center gap-2 mb-2">
                  <Shield className="w-5 h-5 text-green-600" />
                  <span className="font-semibold text-green-800">Secure Checkout</span>
                </div>
                <ul className="text-sm text-green-700 space-y-1">
                  <li>✅ SSL Encrypted Payment</li>
                  <li>✅ 100% Money Back Guarantee</li>
                  <li>✅ Free & Fast Delivery</li>
                </ul>
              </div>

              {/* Place Order Button */}
              <button
                type="submit"
                onClick={handleSubmit}
                disabled={loading}
                className="w-full bg-red-600 text-white py-3 sm:py-4 rounded-lg font-bold text-base sm:text-lg hover:bg-red-700 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {loading ? (
                  <div className="flex items-center justify-center gap-2">
                    <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                    Processing...
                  </div>
                ) : (
                  `Place Order - ₹${totalAmount}`
                )}
              </button>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Checkout;
import { useState, useCallback } from 'react';
import BillingForm from '../components/BillingForm';
import OrderSummary from '../components/OrderSummary';
import type { BillingFormData } from '../schema/billingSchema';
import toast from 'react-hot-toast';

export interface OrderItems {
  name: string;
  price: number;
  quantity: number;
}

const Checkout = () => {
  const [billingData, setBillingData] = useState<BillingFormData>();
  const [orderItems, setOrderItems] = useState<OrderItems[]>([]);

  // Wrap setOrderItems in useCallback to prevent recreation on every render
  const handleSetOrderItems = useCallback((items: OrderItems[] | ((prev: OrderItems[]) => OrderItems[])) => {
    setOrderItems(items);
  }, []);

  const handleBillingSubmit = (data: BillingFormData) => {
    setBillingData(data);
    toast.success('Billing information saved!');
  };

  const handleSubmit = (orderInfo: OrderItems[], paymentMethod: string, discount?: number) => {
    if (!billingData) {
      toast.error("Please fill the billing form first");
      return;
    }

    // Calculate final totals
    const subtotal = orderInfo.reduce((sum, item) => sum + (item.price * item.quantity), 0);
    const finalTotal = discount ? subtotal - discount : subtotal;

    console.log("Order submitted:", {
      billingData,
      orderItems: orderInfo,
      paymentMethod,
      subtotal,
      discount: discount || 0,
      finalTotal
    });


    toast.success('Order placed successfully!');
  };

  return (
    <div className="w-full mt-32 sm:mt-16 lg:mt-32 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-16">
      <div className='mb-8'>
        <div className='flex items-center gap-3 mb-2'>
          <span className='w-4 h-10 bg-red-500 rounded'></span>
          <p className='text-red-500 font-semibold text-base'>Checkout</p>
        </div>
      </div>

      {/* Header */}
      <div className="mb-8">
        <h1 className="text-3xl sm:text-4xl font-medium">Billing Details</h1>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16">
        {/* Left Column - Billing Form */}
        <BillingForm onBillingSubmit={handleBillingSubmit} />

        {/* Right Column - Order Summary */}
        <OrderSummary
          handleSubmit={handleSubmit}
          setOrderItems={handleSetOrderItems}
        />
      </div>


    </div>
  );
};

export default Checkout;
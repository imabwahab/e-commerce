import { useState, useEffect } from 'react';
import credit_cards from '../assets/credit-cards.png';
import toast from 'react-hot-toast';
import type { OrderItems } from '../pages/Checkout';
import { useAppSelector } from '../hooks';

interface OrderSummaryProps {
  handleSubmit: (orderInfo: OrderItems[], paymentMethod: string, discount?: number) => void;
  setOrderItems: React.Dispatch<React.SetStateAction<OrderItems[]>>;
}

const OrderSummary: React.FC<OrderSummaryProps> = ({ handleSubmit, setOrderItems }) => {

  const { cartItems, products } = useAppSelector((state) => state.app)
  const cart = Object.entries(cartItems);

  const [couponCode, setCouponCode] = useState<string>('');
  const [isCouponApplied, setIsCouponApplied] = useState<boolean>(false);
  const [couponDiscount, setCouponDiscount] = useState<number>(0);
  const [paymentMethod, setPaymentMethod] = useState('bank');

  // Calculate total price
  const totalPrice = cart.reduce((total, [itemId, quantity]) => {
    const product = products.find((p) => p._id === itemId);
    return total + (product?.offerPrice || 0) * quantity;
  }, 0);

  // Update order items whenever cart changes
  useEffect(() => {
    const items: OrderItems[] = cart.map(([itemId, quantity]) => {
      const product = products.find((p) => p._id === itemId);
      return {
        name: product?.name || '',
        price: product?.offerPrice || 0,
        quantity: quantity
      };
    }).filter(item => item.name !== ''); // Remove any invalid items

    setOrderItems(items);
  }, [cartItems, products]);

  const handleCouponCode = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (couponCode.toLowerCase() === 'algotix15') {
      setIsCouponApplied(true);
      toast.success('Coupon code applied - 15% off!');
      const discount = Math.round((totalPrice * 15) / 100);
      setCouponDiscount(discount);
    } else if (couponCode.toLowerCase() === 'algotix7') {
      setIsCouponApplied(true);
      toast.success('Coupon code applied - 7% off!');
      const discount = Math.round((totalPrice * 7) / 100);
      setCouponDiscount(discount);
    } else {
      setIsCouponApplied(false);
      setCouponDiscount(0);
      toast.error('Invalid coupon code');
    }
  };

  const handlePlaceOrder = () => {
    const orderInfo: OrderItems[] = cart.map(([itemId, quantity]) => {
      const product = products.find((p) => p._id === itemId);
      return {
        name: product?.name || '',
        price: product?.offerPrice || 0,
        quantity: quantity
      };
    }).filter(item => item.name !== '');

    handleSubmit(orderInfo, paymentMethod, isCouponApplied ? couponDiscount : undefined);
  };

  return (
    <div className="space-y-6">
      {/* Cart Items */}
      <div className="space-y-4">
        {cart.map(([itemId, quantity]) => {
          const product = products.find((p) => p._id === itemId);
          if (!product) return null;

          return (
            <div key={itemId} className="flex items-center justify-between">
              <div className="flex items-center gap-4">
                <img
                  src={product.image[0]}
                  alt={product.name}
                  className='w-20 h-20 object-contain'
                />
                <div>
                  <span className="text-gray-800">{product.name}</span>
                  <span className="text-sm text-gray-500"> ({quantity})</span>
                </div>
              </div>

              <div>
                <span className="font-medium">${product.offerPrice * quantity}</span>
              </div>
            </div>
          );
        })}
      </div>

      {/* Price Summary */}
      <div className="space-y-4 pt-6 border-t-2 border-t-gray-400">
        <div className="flex justify-between">
          <span className="text-gray-600">Subtotal:</span>
          <span className="font-medium">${totalPrice}</span>
        </div>
        {isCouponApplied && (
          <div className="flex justify-between">
            <span className="text-gray-600">Coupon Discount:</span>
            <span className="font-medium text-green-600">-${couponDiscount}</span>
          </div>
        )}
        <div className="flex justify-between pb-4 border-b-2 border-b-gray-400">
          <span className="text-gray-600">Shipping:</span>
          <span className="font-medium text-green-600">Free</span>
        </div>
        <div className="flex justify-between">
          <span className="text-gray-600">Total:</span>
          <span className="font-bold text-lg">${isCouponApplied ? totalPrice - couponDiscount : totalPrice}</span>
        </div>
      </div>

      {/* Payment Method */}
      <div className="space-y-4 pt-6">
        <div className="flex items-center gap-3">
          <input
            type="radio"
            id="bank"
            name="payment"
            value="bank"
            checked={paymentMethod === 'bank'}
            onChange={(e) => setPaymentMethod(e.target.value)}
            className="w-4 h-4 text-red-500"
          />
          <label htmlFor="bank" className="text-gray-700">Bank</label>
          <div className="flex gap-2 ml-auto">
            <img src={credit_cards} alt="credit cards" className='w-40' />
          </div>
        </div>

        <div className="flex items-center gap-3">
          <input
            type="radio"
            id="cash"
            name="payment"
            value="cash"
            checked={paymentMethod === 'cash'}
            onChange={(e) => setPaymentMethod(e.target.value)}
            className="w-4 h-4 text-red-500"
          />
          <label htmlFor="cash" className="text-gray-700">Cash on delivery</label>
        </div>
      </div>

      {/* Coupon Code */}
      <form onSubmit={handleCouponCode} className="flex gap-4 pt-6">
        <input
          type="text"
          placeholder="Coupon Code"
          value={couponCode}
          onChange={(e) => setCouponCode(e.target.value)}
          className="flex-1 border border-gray-300 py-3 px-4 rounded focus:outline-none focus:ring-2 focus:ring-red-500"
        />
        <button
          type="submit"
          className="bg-red-500 text-white px-8 py-3 rounded hover:bg-red-600 transition-colors font-medium"
        >
          Apply Coupon
        </button>
      </form>

      {/* Place Order Button */}
      <button
        type="button"
        onClick={handlePlaceOrder}
        className="w-full bg-red-500 text-white py-4 rounded hover:bg-red-600 transition-colors font-medium text-lg mt-6"
      >
        Place Order
      </button>
    </div>
  );
};

export default OrderSummary;
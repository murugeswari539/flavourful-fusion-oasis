
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Separator } from '@/components/ui/separator';
import { ShoppingCart as ShoppingCartIcon, Plus, Minus, Trash2, X, CreditCard, Wallet } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

interface CartItem {
  id: string;
  name: string;
  price: number;
  quantity: number;
  isVeg: boolean;
  image: string;
}

interface ShoppingCartProps {
  isOpen: boolean;
  onClose: () => void;
  items: CartItem[];
  onUpdateQuantity: (id: string, quantity: number) => void;
  onRemoveItem: (id: string) => void;
  onCheckout: () => void;
}

const ShoppingCart: React.FC<ShoppingCartProps> = ({
  isOpen,
  onClose,
  items,
  onUpdateQuantity,
  onRemoveItem,
  onCheckout
}) => {
  const [isCheckingOut, setIsCheckingOut] = useState(false);
  const [paymentMethod, setPaymentMethod] = useState('card');
  const { toast } = useToast();

  const subtotal = items.reduce((sum, item) => sum + (item.price * item.quantity), 0);
  const deliveryFee = subtotal > 500 ? 0 : 50;
  const gst = Math.round(subtotal * 0.18);
  const total = subtotal + deliveryFee + gst;

  const handleCheckout = async () => {
    setIsCheckingOut(true);
    
    try {
      // Simulate payment processing
      await new Promise(resolve => setTimeout(resolve, 3000));
      
      toast({
        title: "🎉 Payment Successful!",
        description: `Your order of ₹${total} has been confirmed. You'll receive a confirmation SMS shortly.`,
        className: "bg-gradient-to-r from-emerald-50 to-green-50 border-emerald-200 text-emerald-800",
      });
      
      onCheckout();
    } catch (error) {
      toast({
        title: "❌ Payment Failed",
        description: "There was an issue processing your payment. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsCheckingOut(false);
    }
  };

  const handlePaymentMethodChange = (method: string) => {
    setPaymentMethod(method);
    toast({
      title: `💳 Payment Method Selected`,
      description: `${method === 'card' ? 'Credit/Debit Card' : method === 'upi' ? 'UPI Payment' : 'Cash on Delivery'} selected`,
      className: "bg-gradient-to-r from-blue-50 to-indigo-50 border-blue-200 text-blue-800",
    });
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 bg-black/50 backdrop-blur-sm">
      <div className="fixed right-0 top-0 h-full w-full max-w-md bg-white shadow-xl">
        <div className="flex flex-col h-full">
          {/* Header */}
          <div className="flex items-center justify-between p-6 border-b">
            <div className="flex items-center gap-2">
              <ShoppingCartIcon className="h-5 w-5 text-emerald-600" />
              <h2 className="text-xl font-semibold">Your Order</h2>
              <Badge variant="secondary" className="bg-emerald-100 text-emerald-800">{items.length}</Badge>
            </div>
            <Button variant="ghost" size="icon" onClick={onClose}>
              <X className="h-5 w-5" />
            </Button>
          </div>

          {/* Cart Items */}
          <div className="flex-1 overflow-y-auto p-6">
            {items.length === 0 ? (
              <div className="text-center py-12">
                <ShoppingCartIcon className="h-16 w-16 text-gray-300 mx-auto mb-4" />
                <p className="text-lg font-medium text-gray-500 mb-2">Your cart is empty</p>
                <p className="text-sm text-gray-400">Add some delicious items to get started</p>
              </div>
            ) : (
              <div className="space-y-4">
                {items.map((item) => (
                  <Card key={item.id} className="p-4 hover:shadow-md transition-shadow">
                    <div className="flex gap-4">
                      <img 
                        src={item.image} 
                        alt={item.name}
                        className="w-16 h-16 object-cover rounded-lg"
                      />
                      <div className="flex-1">
                        <div className="flex items-start justify-between mb-2">
                          <div>
                            <h3 className="font-medium text-sm">{item.name}</h3>
                            <Badge 
                              variant={item.isVeg ? "default" : "destructive"}
                              className={`text-xs ${item.isVeg ? "bg-green-100 text-green-800" : "bg-red-100 text-red-800"}`}
                            >
                              {item.isVeg ? "🟢 Veg" : "🔴 Non-Veg"}
                            </Badge>
                          </div>
                          <Button
                            variant="ghost"
                            size="icon"
                            className="h-6 w-6 text-gray-400 hover:text-red-500"
                            onClick={() => onRemoveItem(item.id)}
                          >
                            <Trash2 className="h-3 w-3" />
                          </Button>
                        </div>
                        
                        <div className="flex items-center justify-between">
                          <div className="flex items-center gap-2">
                            <Button
                              variant="outline"
                              size="icon"
                              className="h-6 w-6"
                              onClick={() => onUpdateQuantity(item.id, Math.max(0, item.quantity - 1))}
                            >
                              <Minus className="h-3 w-3" />
                            </Button>
                            <span className="text-sm font-medium w-8 text-center">{item.quantity}</span>
                            <Button
                              variant="outline"
                              size="icon"
                              className="h-6 w-6"
                              onClick={() => onUpdateQuantity(item.id, item.quantity + 1)}
                            >
                              <Plus className="h-3 w-3" />
                            </Button>
                          </div>
                          <span className="font-semibold text-emerald-600">
                            ₹{item.price * item.quantity}
                          </span>
                        </div>
                      </div>
                    </div>
                  </Card>
                ))}
              </div>
            )}
          </div>

          {/* Payment Options & Checkout */}
          {items.length > 0 && (
            <div className="border-t p-6 space-y-4">
              {/* Payment Method Selection */}
              <div className="space-y-3">
                <h3 className="font-medium text-sm">Payment Method</h3>
                <div className="grid grid-cols-3 gap-2">
                  <Button
                    variant={paymentMethod === 'card' ? 'default' : 'outline'}
                    size="sm"
                    className={paymentMethod === 'card' ? 'bg-emerald-500 hover:bg-emerald-600' : ''}
                    onClick={() => handlePaymentMethodChange('card')}
                  >
                    <CreditCard className="h-3 w-3 mr-1" />
                    Card
                  </Button>
                  <Button
                    variant={paymentMethod === 'upi' ? 'default' : 'outline'}
                    size="sm"
                    className={paymentMethod === 'upi' ? 'bg-emerald-500 hover:bg-emerald-600' : ''}
                    onClick={() => handlePaymentMethodChange('upi')}
                  >
                    <Wallet className="h-3 w-3 mr-1" />
                    UPI
                  </Button>
                  <Button
                    variant={paymentMethod === 'cod' ? 'default' : 'outline'}
                    size="sm"
                    className={paymentMethod === 'cod' ? 'bg-emerald-500 hover:bg-emerald-600' : ''}
                    onClick={() => handlePaymentMethodChange('cod')}
                  >
                    💰 COD
                  </Button>
                </div>
              </div>

              {/* Order Summary */}
              <div className="cart-total p-4 rounded-lg space-y-2">
                <div className="flex justify-between text-sm">
                  <span>Subtotal</span>
                  <span>₹{subtotal}</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span>Delivery Fee</span>
                  <span className={deliveryFee === 0 ? "text-green-600" : ""}>
                    {deliveryFee === 0 ? "FREE" : `₹${deliveryFee}`}
                  </span>
                </div>
                <div className="flex justify-between text-sm">
                  <span>GST (18%)</span>
                  <span>₹{gst}</span>
                </div>
                <Separator />
                <div className="flex justify-between font-semibold text-lg">
                  <span>Total</span>
                  <span className="text-emerald-600">₹{total}</span>
                </div>
              </div>

              {deliveryFee > 0 && (
                <p className="text-xs text-muted-foreground text-center bg-yellow-50 p-2 rounded">
                  💡 Add ₹{500 - subtotal} more for free delivery
                </p>
              )}

              <Button 
                className="w-full payment-btn text-white py-3 text-lg font-semibold"
                onClick={handleCheckout}
                disabled={isCheckingOut}
              >
                {isCheckingOut ? (
                  <div className="flex items-center space-x-2">
                    <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                    <span>Processing Payment...</span>
                  </div>
                ) : (
                  `Pay ₹${total} • ${paymentMethod === 'card' ? 'Card' : paymentMethod === 'upi' ? 'UPI' : 'COD'}`
                )}
              </Button>

              <p className="text-xs text-center text-muted-foreground">
                🚚 Estimated delivery time: 30-45 minutes
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ShoppingCart;

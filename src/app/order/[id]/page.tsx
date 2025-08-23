import OrderAddressForm from "@/components/order/OrderAddressForm";
import OrderNote from "@/components/order/OrderNote";
import OrderPaymentForm from "@/components/order/OrderPaymentForm";

const OrderPage = () => {
  return (
    <div>
      <OrderAddressForm />
      <OrderPaymentForm />
      <OrderNote />
    </div>
  );
};

export default OrderPage;

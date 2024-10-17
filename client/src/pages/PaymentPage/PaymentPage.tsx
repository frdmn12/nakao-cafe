import PaymentInfo from "./components/PaymentInfo";
import OrderItemsList from "./components/OrderItemsList";

const PaymentPage = () => {
  return (
    <div className="p-8">
      <h1 className="font-bold text-4xl mb-2 mt-8">Checkout</h1>
      <section className="flex justify-center gap-2">
        <OrderItemsList />
        <PaymentInfo />
      </section>
    </div>
  );
};

export default PaymentPage;

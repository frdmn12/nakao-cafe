const CartInfo = ({ handleCheckOut }) => {
  return (
    <section className="flex justify-around items-start mt-5">
      <div className="">
        <input
          type="text"
          placeholder="Enter Promo Code"
          className="p-2 border-2 border-gray-300 rounded-xl"
        />
        <h1 className="font-reguler text-lg mt-3">
          Get Some Promo code from{" "}
          <span className="underline underline-offset-1 text-blue-500">
            {""}Gift Voucher
          </span>{" "}
        </h1>
      </div>
      <div>
        <div className="flex justify-between gap-40 mb-8">
          <h1 className="font-medium text-lg">Sub Total</h1>
          <p className="font-reguler text-lg">Rp. 45.000</p>
        </div>
        <div className="flex justify-between gap-40 mb-8">
          <h1 className="font-medium text-lg">Shopping + tax</h1>
          <p className="font-reguler text-lg">Rp. 45.000</p>
        </div>
        <div className="flex justify-between gap-40 mb-8">
          <h1 className="font-medium text-lg">Discount</h1>
          <p className="font-regulertext-lg">-Rp. 45.000</p>
        </div>
        <div className="flex justify-between gap-40 mb-5 py-3 border-t-2 border-b-2 border-black">
          <h1 className="font-bold text-lg">Grand Total</h1>
          <p className="font-reguler text-lg">Rp. 45.000</p>
        </div>
        <button
          className="px-5 py-3 bg-[#3F72AF] font-bold text-white rounded-2xl"
          onClick={() => handleCheckOut()}
        >
          Checkout
        </button>
      </div>
    </section>
  );
};

export default CartInfo;

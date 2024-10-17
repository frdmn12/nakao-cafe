import { useState } from "react";

const PaymentInfo = () => {
  const [selectedPaymentMethod, setSelectedPaymentMethod] = useState("");
  const paymentMethods = [
    { value: "bank_transfer", label: "Transfer Bank" },
    { value: "credit_card", label: "Kartu Kredit" },
    { value: "e_wallet", label: "E-Wallet (OVO, DANA, GoPay)" },
  ];
  const handleChangePaymentMethod = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setSelectedPaymentMethod(event.target.value);
  };

  return (
    <section className="bg-accent text-white px-10 py-2 flex flex-col rounded-xl gap-10 justify-start">
      <h1 className="font-bold text-2xl mb-2 text-gray-200">Payment Info</h1>
      <div>
        <h1 className="font-reguler text-lg mb-2 ">Payment Method</h1>
        {paymentMethods.map((method) => (
          <label key={method.value} className="flex items-center">
            <input
              type="radio"
              value={method.value}
              checked={
                selectedPaymentMethod
                  ? selectedPaymentMethod === method.value
                  : method.value === "bank_transfer"
              }
              onChange={handleChangePaymentMethod}
              className="form-radio h-4 w-4 text-blue-600 focus:ring-blue-500"
            />
            <span className="ml-2 ">{method.label}</span>
          </label>
        ))}
      </div>
      <div>
        <h1 className="font-reguler text-md my-2">Email</h1>
        <p className="font-light text-sm">
          {" "}
          Kami akan mengirimkan bukti pengiriman pada email tertera
        </p>
        <input
          type="email"
          placeholder="Input Email"
          className="p-1 border-1 text-black  border-gray-300 rounded-md"
        />
      </div>
      <div>
        <button className="bg-[#3F72AF] text-white font-bold px-10 py-2 rounded-xl">
          Pay
        </button>
      </div>
    </section>
  );
};

export default PaymentInfo;

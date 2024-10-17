import { useState } from "react";
import DataTableBase from "../../components/ui/DataTableBase";
import  {  TableRow } from "react-data-table-component";
import { listCartProduct } from "../../utils";
import { useNavigate } from "react-router-dom";

const CartPage = () => {
  const [selectedRows, setSelectedRows] = useState([]);
  const navigate = useNavigate();
  
  const columns = [
    {
      name: "Product Details",
      selector: (row ) => (
        <div className="flex">
          <img src={row.image} alt={row.name} className="w-20" />
          <div className="text-left flex flex-col justify-center">
            <p className="font-bold text-lg">{row.name}</p>
            <p>Price : {row.price}</p>
          </div>
        </div>
      ),
      sortable: false,
    },
    {
      name: "Quantity",
      selector: (row) => row.quantity,
      sortable: false
    },
    {
      name: "Total Price",
      selector: (row) => row.price * row.quantity,
    },
  ];



  const handleCheckOut = () => {
    console.log("Checkout with selected products: ", selectedRows);
    navigate("/payment");
  };

  return (
    <div className="mb-2  p-2">
      <h1 className="font-bold text-4xl mb-2 mt-8 text-center">My Cart</h1>
      <div className="m-9 mt-0 rounded-xl shadow-lg">
        <DataTableBase 
        columns={columns} 
        data={listCartProduct} 
        title="Cart" 
        onSelectedRowsChange={setSelectedRows} 
        isSelectableRows={true}
        />
      </div>
      <div className="flex justify-around items-start mt-5">
        <div className="">
          <input
            type="text"
            placeholder="Enter Promo Code"
            className="p-2 border-2 border-gray-300 rounded-xl"
          />
          <h1 className="font-reguler text-lg mt-3">Get Some Promo code from <span className="underline underline-offset-1 text-blue-500">{""}Gift Voucher</span> </h1>
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
          <button className="px-5 py-3 bg-[#3F72AF] font-bold text-white rounded-2xl" onClick={() => handleCheckOut()}>
            Checkout
          </button>
        </div>
      </div>
    </div>
  );
};

export default CartPage;

import { useState } from "react";
import DataTableBase from "../../components/ui/DataTableBase";
import { TableRow } from "react-data-table-component";
import { listCartProduct } from "../../utils";
import { useNavigate } from "react-router-dom";
import CartItemsList from "./components/CartItemsList";
import CartInfo from "./components/CartInfo";

const CartPage = () => {
  const [selectedRows, setSelectedRows] = useState([]);
  const navigate = useNavigate();

  const handleCheckOut = () => {
    console.log("Checkout with selected products: ", selectedRows);
    navigate("/payment");
  };

  return (
    <div className="mb-2  p-2">
      <h1 className="font-bold text-4xl mb-2 mt-8 text-center">My Cart</h1>
      <CartItemsList setSelectedRows={setSelectedRows} />
      <CartInfo handleCheckOut={handleCheckOut} />
    </div>
  );
};

export default CartPage;

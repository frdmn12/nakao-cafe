import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import CartItemsList from "./components/CartItemsList";
import CartInfo from "./components/CartInfo";
import { AppDispatch } from "../../store";
import { useDispatch, useSelector } from "react-redux";
import { listCartProduct } from "../../features/CartSlice";

const CartPage = () => {
  const [selectedRows, setSelectedRows] = useState([]);
  const navigate = useNavigate();
  const dispatch = useDispatch<AppDispatch>();
  const userId = useSelector((state: any) => state.auths.userInfo.id);
  const token = useSelector((state: any) => state.auths.userToken);
  const [cartList, setCartList] = useState<any[]>([]);

  useEffect(() => {
    fetchUserCarts();
    console.log("Cart List: ", cartList);
  }, []);
  
  
  // get all cart by user id
  const fetchUserCarts = async () => {
    const data = await dispatch(listCartProduct({ userId: userId, token: token })).unwrap();
    setCartList(data.data);
  }

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

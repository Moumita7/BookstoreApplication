
import CartLists from "../Components/CartLists";
import {  useSelector } from "react-redux";

import { useNavigate } from "react-router-dom";
import Loading from "../Components/Loading";
import EmptyCard from "../Components/EmptyCard";

const Cart = () => {
  const { cartData } = useSelector((store) => store.cart);

  console.log("cartData",cartData)
  const navigate = useNavigate();

  const handleOrder = () => {
    navigate("/checkout");
  };

  if (!cartData) return <Loading />;
  if (cartData.length < 1) return <EmptyCard name={"cart"} />;

  return <CartLists cartItems={cartData} handleOrder={handleOrder}/>;
};

export default Cart;

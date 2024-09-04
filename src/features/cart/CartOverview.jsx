import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { getTotalBill, getTotalQuantity } from "./cartSlice";

function CartOverview() {
  // const cart = useSelector((state) => state.cart.cart);
  // const totalPizzaQ = cart.reduce((acc, cur) => acc + cur.quantity, 0);
  // const totalBill = cart.reduce((acc, cur) => acc + cur.totalPrice, 0);

  const totalPizzaQ = useSelector(getTotalQuantity);
  const totalBill = useSelector(getTotalBill);

  if (!totalPizzaQ) return null;

  return (
    <div className="flex items-center justify-between bg-stone-800 p-4 text-sm uppercase text-stone-200 sm:px-6 md:text-base">
      <p className="space-x-4 font-semibold text-stone-300 sm:space-x-6">
        <span>{totalPizzaQ} pizzas</span>
        <span>${totalBill}</span>
      </p>
      <Link to="/cart">Open cart &rarr;</Link>
    </div>
  );
}

export default CartOverview;

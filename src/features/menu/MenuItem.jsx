import { formatCurrency } from "../../utils/helpers";
import Button from "../../ui/Button";
import { useDispatch, useSelector } from "react-redux";

import { addPizza, getQuantityById } from "../cart/cartSlice";
import DeleteButton from "../cart/DeleteButton";
import UpdateButton from "../cart/UpdateButton";

function MenuItem({ pizza }) {
  const dispatch = useDispatch();

  const { id, name, unitPrice, ingredients, soldOut, imageUrl } = pizza;

  const quantity = useSelector(getQuantityById(id));
  const InCart = quantity > 0;

  const handleAddToCart = () => {
    const newPizza = {
      pizzaId: id,
      name,
      quantity: 1,
      unitPrice,
      totalPrice: unitPrice * 1,
    };
    dispatch(addPizza(newPizza));
  };

  return (
    <li className="flex gap-4 py-2">
      <img
        src={imageUrl}
        alt={name}
        className={`${soldOut ? "opacity-80 grayscale" : ""} h-24`}
      />
      <div className="flex grow flex-col pt-0.5">
        <p className="font-medium">{name}</p>
        <p className="text-sm capitalize italic text-stone-500">
          {ingredients.join(", ")}
        </p>
        <div className="flew-grow mt-auto flex items-center justify-between">
          {!soldOut ? (
            <p className="text-sm">{formatCurrency(unitPrice)}</p>
          ) : (
            <p className="text-sm font-medium uppercase text-stone-500">
              Sold out
            </p>
          )}

          <div className="flex items-center gap-3 sm:gap-8">
            {InCart && (
              <>
                <UpdateButton quantity={quantity} pizzaId={id} />
                <DeleteButton pizzaId={id} />
              </>
            )}
            {!soldOut && !InCart && (
              <Button type="small" onClick={handleAddToCart}>
                Add to cart
              </Button>
            )}
          </div>
        </div>
      </div>
    </li>
  );
}

export default MenuItem;

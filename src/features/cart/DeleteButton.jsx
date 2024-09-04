import { useDispatch } from "react-redux";
import Button from "../../ui/Button";
import { deletePizza } from "./cartSlice";

function DeleteButton({ pizzaId }) {
  const dispatch = useDispatch();

  const handleDelete = () => {
    dispatch(deletePizza(pizzaId));
  };

  return (
    <Button type="small" onClick={handleDelete}>
      Delete
    </Button>
  );
}

export default DeleteButton;

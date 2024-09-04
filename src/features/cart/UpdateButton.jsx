import Button from "../../ui/Button";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import { useDispatch } from "react-redux";
import { decPizza, incPizza } from "./cartSlice";

function UpdateButton({ quantity, pizzaId }) {
  const dispatch = useDispatch();

  const handleInc = () => {
    dispatch(incPizza(pizzaId));
  };
  const handleDec = () => {
    dispatch(decPizza(pizzaId));
  };

  return (
    <div className="flex items-center gap-1 md:gap-3">
      <Button type="round" onClick={handleDec}>
        <RemoveIcon />
      </Button>
      <span>{quantity}</span>
      <Button type="round" onClick={handleInc}>
        <AddIcon />
      </Button>
    </div>
  );
}

export default UpdateButton;

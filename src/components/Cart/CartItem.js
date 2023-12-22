import classes from "./CartItem.module.css";
import { useDispatch } from "react-redux";
import { cartActions } from "../../Context/cartSlice";
const CartItem = ({ data }) => {
  const { title, quantity, total, price } = data;
  const dispatch = useDispatch();
  const handleAddItem = () => {
    dispatch(cartActions.addItem(data));
  };

  const handleRemoveItem = () => {
    dispatch(cartActions.removeItem(data.id));
  };

  return (
    <li className={classes.item}>
      <header>
        <h3>{title}</h3>
        <div className={classes.price}>
          ${total.toFixed(2)}{" "}
          <span className={classes.itemprice}>(${price.toFixed(2)}/item)</span>
        </div>
      </header>
      <div className={classes.details}>
        <div className={classes.quantity}>
          x <span>{quantity}</span>
        </div>
        <div className={classes.actions}>
          <button onClick={handleRemoveItem}>-</button>
          <button onClick={handleAddItem}>+</button>
        </div>
      </div>
    </li>
  );
};

export default CartItem;

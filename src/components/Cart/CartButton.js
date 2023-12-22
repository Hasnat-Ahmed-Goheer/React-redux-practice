import classes from './CartButton.module.css';
import { useDispatch } from 'react-redux';
import { uiActions } from '../../Context/uiSlice';
import { useSelector } from 'react-redux';

const CartButton = (props) => {

  const quantity = useSelector(state => state.cart.totalQuantity);
  const dispatch = useDispatch();

  const handleToggleCart = () => { 
    // dispatch cart action
    dispatch(uiActions.toggle());

  }

  return (
    <button className={classes.button} onClick={handleToggleCart}>
      <span>My Cart</span>
      <span className={classes.badge}>{quantity}</span>
    </button>
  );
};

export default CartButton;

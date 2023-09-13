import styles from "../styles/cart.module.scss";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import trash from "/icons/trash.png";
import Message from "../components/Message/Message";
import { AppDispatch } from "../store";
import { CartProduct } from "../states";
import { addToCart, replaceCartItem } from "../slices/cartSlice";

const CartPage = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch<AppDispatch>();
  const { cartItems } = useSelector((state: any) => state.cart);

  const addToCartHandler = (product: CartProduct, qty: number) => {
    dispatch(replaceCartItem({ ...product, qty }));
  };

  return (
    <div className={styles.cart + " container"}>
      <h1>Shopping Cart</h1>
      {cartItems.length === 0 ? (
        <>
          <Message>
            Your Cart Is Empty{" - "}
            <Link to="/" className={styles.back}>
              Go Back
            </Link>
          </Message>
        </>
      ) : (
        <div className={styles.cartItems}>
          <ul className={styles.productInfo}>
            {cartItems.map((item: CartProduct) => (
              <li key={item._id} className={styles.item}>
                <img src={item.image[0]} alt={item.name} />
                <Link to={`/product/${item._id}`}>{item.name}</Link>
                <p>${item.price}</p>
                <div className={styles.select}>
                  <select
                    name="qty"
                    id="qty"
                    value={item.qty}
                    onChange={(e) =>
                      addToCartHandler(item, Number(e.target.value))
                    }
                  >
                    {item.countInStock > 0 &&
                      [...Array(item.countInStock).keys()].map((x) => (
                        <option key={x + 1} value={x + 1}>
                          {x + 1}
                        </option>
                      ))}
                  </select>
                </div>
                <button className={styles.remove}>
                  <img src={trash} alt="trash icon" />
                </button>
              </li>
            ))}
          </ul>
          <div className={styles.card}>
            <div className={styles.top}>
              <h2>
                Subtotal: (
                {cartItems.reduce(
                  (acc: number, item: CartProduct) => acc + item.qty,
                  0
                )}
                ) items
              </h2>
              <h3>
                $
                {cartItems.reduce(
                  (acc: number, item: CartProduct) =>
                    Number((acc + item.price * item.qty).toFixed(2)),
                  0
                )}
              </h3>
            </div>
            <button
              className={styles.checkout + " btn btn-primary"}
              // onClick={() => navigate("/login")}
              disabled={cartItems.length === 0}
            >
              Checkout
            </button>
          </div>
        </div>
      )}
    </div>
  );
};
export default CartPage;

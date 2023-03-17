import { useEffect } from "react";
import { useAppSelector } from "../app/hooks";
import Product from "./Product";

const Cart = () => {
  const products = useAppSelector((state) => state.products.products);
  const cartItems = useAppSelector((state) => state.products.cart);

  useEffect(() => {
    console.log(products);
  }, [products]);

  useEffect(() => {
    console.log(cartItems);
  }, [cartItems]);

  return (
    <div>
      <h2>Cart</h2>
      {cartItems.map((item) => {
        return <Product key={item.id} {...item} />;
      })}
    </div>
  );
};

export default Cart;

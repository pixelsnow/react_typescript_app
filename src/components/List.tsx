import { useEffect } from "react";
import { Button, Container } from "react-bootstrap";
import { useAppDispatch, useAppSelector } from "../app/hooks";
import { fetchProducts, addToCart } from "../features/productsSlice";
import Product from "./Product";
import "../App.css";

const List = () => {
  const products = useAppSelector((state) => state.products.products);
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(fetchProducts());
    console.log(products);
  }, [dispatch]);

  return (
    <div className="products">
      {products.map((item) => (
        <Container key={item.id}>
          <Product {...item} />
          <Button onClick={() => dispatch(addToCart(item))}>Add to cart</Button>
        </Container>
      ))}
    </div>
  );
};

export default List;

import Card from "react-bootstrap/Card";
import { Button } from "react-bootstrap";
import { useAppDispatch } from "../app/hooks";
import { addToCart } from "../features/productsSlice";

interface IProps {
  id: number;
  title: string;
  price: number;
  description: string;
  category: string;
  image: string;
  rating: {
    rate: number;
    count: number;
  };
}
/* <Card style={{ width: "18rem" }}>
      <Card.Img variant="top" src={image} />
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        <Card.Title className="mb-2">€ {price}</Card.Title>
        <Card.Subtitle className="mb-2 text-muted">
          {rating.rate}/5 ({rating.count} votes)
        </Card.Subtitle>
        <Card.Text>{description.slice(0, 150)}...</Card.Text>
        <Button onClick={() => dispatch(addToCart(props))}>Add to cart</Button>
      </Card.Body>
    </Card> */
const Product: React.FC<IProps> = (props) => {
  const { title, price, description, category, image, rating } = props;
  const dispatch = useAppDispatch();
  return (
    <section className="product_container">
      <article>
        <img style={{ maxWidth: "10%" }} src={image} alt={title} />
      </article>
      <article>
        <div>
          <h2>{title}</h2>
          <p>
            Rating: {rating.rate}/5 ({rating.count} votes)
          </p>
        </div>
      </article>
      <article>
        <h2>€{price}</h2>
        <p>{category}</p>
        <p>{description}</p>
      </article>
    </section>
  );
};

export default Product;

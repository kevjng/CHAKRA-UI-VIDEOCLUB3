import { Container } from "react-bootstrap";
import Item from "../Item/Item";

const ItemList = ({ items }) => {
  return (
    <Container className="d-flex justify-content-evenly mt-4 flex-wrap w-100">
      {items.map((item) => (
        <Item item={item} />
      ))}
    </Container>
  );
};

export default ItemList;

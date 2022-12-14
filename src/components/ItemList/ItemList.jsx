import { Wrap } from "@chakra-ui/react";
import Item from "../Item/Item";

const ItemList = ({ items }) => {
  return (
    <Wrap spacing="20px" justify="center">
      
      {items.map((item, index) => (
        <Item
          key={index}
          id={item.id}
          title={item.title}
          price={item.price}
          img={item.img}
          img1={item.img1}
          tipo={item.tipo}
          stock={item.stock}
          año={item.año}
          desc={item.desc}
          />
      ))}
    </Wrap>
  );
};

export default ItemList;
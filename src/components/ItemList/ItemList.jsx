import { Flex } from "@chakra-ui/react";
import Item from "../Item/Item";

const ItemList = ({ items }) => {
  return (
    <Flex flexDirection={"row"} justifyContent={"center"} margin={10}>
      {items.map((item, indx) => (
        <Item
          key={indx}
          id={item.id}
          title={item.title}
          img={item.img}
          price={item.price}
        />
      ))}
    </Flex>
  );
};

export default ItemList;

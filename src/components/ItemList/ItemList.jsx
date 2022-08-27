import { Grid } from "@chakra-ui/react";
import Item from "../Item/Item";

const ItemList = ({ items }) => {
  return (
    <Grid templateColumns="repeat(6, 1fr)" gap={4}>
      
        {items.map((item, indx) => (
          <Item
            key={indx}
            id={item.id}
            title={item.title}
            price={item.price}
            img={item.img}
          />
        ))}
    </Grid>
  );
};

export default ItemList;

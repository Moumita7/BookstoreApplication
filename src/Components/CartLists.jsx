import { Box, Button, Flex, Text } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import CartCard from "./CartCard";

const CartLists = ({ cartItems, handleOrder }) => {
  const [total, setTotal] = useState(0);

  console.log("cart itemm",cartItems)

  useEffect(() => {
    setTotal(
      cartItems
        .reduce((acc, el) => acc + Number(el.price * el.qty), 0)
        .toFixed(2)
    );
  }, [cartItems]);

  return (
    <Box mt={"30px"} height={"100vh"} gap={"50px"}  display={"flex"} >
    <Box >
      {cartItems.map((cart) => (
        <CartCard key={cart._id} cart={cart} />
      ))}
      </Box>
<Box   boxShadow={"md"}>
      <Flex px={10} gap={"20px"} flexDir={"column"} alignItems={"center"} mt="20px">
      <Text as={"p"}>Total Amount:- $ {total}</Text>
      <hr />
        <Button
          borderRadius="lg"
          colorScheme="teal"
          _hover={{
            bg: "teal.300",
            color: "white",
          }}
          variant="outline"
          onClick={handleOrder}
        >
          Place Order
        </Button>
       
      </Flex>

      </Box>
    </Box>
  );
};

export default CartLists;

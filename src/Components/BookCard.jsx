import { addItemToCart } from "../Redux/Cart/action";
import {
  // Box,
  Button,
  // Heading,
  // Image,
  // Stack,
  // Text,
  useToast,
} from "@chakra-ui/react";
// import React from "react";
import { useDispatch, useSelector } from "react-redux";
// import { Link } from "react-router-dom";

const BookCard = ({book}) => {

  const dispatch = useDispatch();
  const toast = useToast();
  const { addCartItem, cartData } = useSelector((store) => store.cart);
  const { loading } = addCartItem;

  const newItem = {
    ...book,
    qty: 1,
  };

  const handleAddToCart = () => {
    const isItemInCart = cartData.find((item) => item._id === newItem._id);

    if (isItemInCart) {
      toast({
        title: "Add Failed.",
        description: "Item already in Cart.",
        status: "error",
        duration: 2000,
        isClosable: true,
      });
    } else {
      dispatch(addItemToCart(newItem));
      toast({
        title: "Add Success.",
        description: "Now you can explore Cart.",
        status: "success",
        duration: 2000,
        isClosable: true,
      });
    }
  };
  let check=(id)=>{
console.log("okk")
  }
  return (
    <div style={{border:"1px solid black",padding:"5px"}}>
    <div>
      <img   src={book.image}
 alt="book" width={"100px"}/> 
<h3>book name: {book.title}</h3>
<h3>author: {book.author}</h3>
<h3>price: {book.price}</h3>
<h3>category: {book.category}</h3>
{/* <p>release_year: {book.release_year}</p> */}
<Button
        isLoading={loading}
        // isDisabled={cartData.find((item) => item._id === newItem._id)}
        loadingText="Add to Cart"
        width="full"
        p={4}
        borderRadius="lg"
        colorScheme="teal"
        _hover={{
          bg: "teal.300",
          color: "white",
        }}
        variant="outline"
        mt={4}
        onClick={handleAddToCart}
      >
        Add To Cart
      </Button>
</div>

      </div>
  )
}

export default BookCard
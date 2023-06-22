import { addItemToCart } from "../Redux/Cart/action";
import {
  Box,
  Button,
  Image,
  useToast,
} from "@chakra-ui/react";
import "./Book_Box.css"

import { useDispatch, useSelector } from "react-redux";
// import BookLoading from "./BookLoading";


const BookCard = ({book}) => {

  const dispatch = useDispatch();
  const toast = useToast();
  const { addCartItem, cartData } = useSelector((store) => store.cart);

  const { isLoading}=useSelector((store)=>store.books)

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
//   let check=(id)=>{
// console.log("okk")
//   }


  return (
    <Box>

    <Box>
    <Box  display={"flex"} className="book_box" justifyContent={"space-between"}   box-shadow={"rgba(0, 0, 0, 0.24) 0px 3px 8px"} h={"auto"}  >
    <Box  h={"100%"} w={"100%"} p="5px">
    <Box w={"100%"}  h={"70%"} >
      <Image  src={book.image} alt="book" w={"100%"} h={"100%"} p="10px" /> 
    </Box>
    <Box>
<h3>book name: {book.title}</h3>
<h3>author: {book.author}</h3>
<h3>price: {book.price}</h3>
<h3>category: {book.category}</h3>

<Button
        isLoading={loading}
        // isDisabled={cartData.find((item) => item._id === newItem._id)}
        loadingText="Add to Cart"
        width="full"
        // p={4}
        borderRadius="lg"
        colorScheme="teal"
        _hover={{
          bg: "teal.300",
          color: "white",
        }}
        variant="outline"
        // mt={4}
        onClick={handleAddToCart}
      >
        Add To Cart
      </Button>
</Box>
</Box>

      </Box>
      </Box>
    
      </Box>
  )
}

export default BookCard
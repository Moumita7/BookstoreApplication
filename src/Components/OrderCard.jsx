import { Button, CloseButton, Grid, Image, Text, useToast } from "@chakra-ui/react";
import { useDispatch } from "react-redux";
import { removeMoveOrderItem } from "../Redux/Order/action";
import { useNavigate } from "react-router-dom";

const OrderCard = ({ item }) => {
  const dispatch = useDispatch();
  const toast = useToast();
  const navigate = useNavigate();


  const handleSuccessOrder=(id)=>{
    // dispatch(removeMoveOrderItem(id));
    toast({
        title: "Success.",
        description: `Order Item id: ${id}.`,
        status: "success",
        duration: 2000,
        isClosable: true,
      });
    navigate("/ordersuccessfull");


  }

  const handleCancleOrder = (id) => {
    dispatch(removeMoveOrderItem(id));
    toast({
      title: "Cancle Success.",
      description: `Order Item id: ${id}.`,
      status: "success",
      duration: 2000,
      isClosable: true,
    });
  };

  return (
    <Grid
      templateColumns="repeat(4, 1fr)"
      alignItems="center"
      justifyContent={"space-between"}
      p={4}
      width={"full"}
      gap={2}
      mb={2}
     boxShadow={"lg"}
    >
      <Image
        width={"100px"}
        height={"100px"}
        alt={item.title}
        src={item.image}
      />
      <Text>{item.title}</Text>
      <Text>{item.qty}</Text>
      <CloseButton
        bg={"red.500"}
        border={"1px"}
        size="md"
        variant="outline"
        onClick={() => handleCancleOrder(item._id)}
      />
      <Button onClick={() =>handleSuccessOrder(item._id)}>click here to confrom</Button>
    </Grid>
  );
};

export default OrderCard;

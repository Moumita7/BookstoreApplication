import { Box } from "@chakra-ui/react";
import BookList from "../Components/BookList";

import SideBar from "../Components/SideBar";
import { useSelector } from "react-redux";
// import BookLoading from "../Components/BookLoading";
// import { useEffect } from "react";

const Books = () => {
  const { isLoading } = useSelector((store) => store.books);
  console.log("isLoading", isLoading);
// useEffect(()=>{

// },[isLoading])

  // if (isLoading) return <BookLoading/>

  return (
    <Box>
      <Box style={{ display: "flex", gap: "10px" }}>
        {/* <Box bg="teal.300" p="10px"> */}
        <Box flex={"1%"}>
          {" "}
          <SideBar />
        </Box>

        {/* <Box>{   isLoading==true ? <BookLoading/> :<BookList/>}</Box> */}
        <Box flex={"70%"}>
          <BookList />
        </Box>
      </Box>
    </Box>
  );
};

export default Books;

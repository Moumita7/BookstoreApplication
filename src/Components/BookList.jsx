import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { getBooks } from "../Redux/Books/action"
import BookCard from "./BookCard"
import "../style/BookCard.css"
import { useLocation, useSearchParams } from "react-router-dom"
import {  Grid } from "@chakra-ui/react"
import BookLoading from "./BookLoading"



const BookList = () => {

    const dispatch=useDispatch()
    // const {books}=useSelector((store)=>store.books)

    const {books, isLoading}=useSelector((store)=>store.books)
 

    const location=useLocation()
    const [searchParams]=useSearchParams()
    // console.log(location)
    console.log("bookk",books)

    

    useEffect(()=>{
      let order=searchParams.get("order")
      let paramObj={
        
          params:{
            category:searchParams.getAll("category"),
            _sort:order && "price",
            _order:order,
          }
     
      }
        dispatch(getBooks(paramObj)) // getBooks are comeing from action
    },[location.search])

    // console.log(isLoading)
    if(isLoading)  return (<BookLoading/>)
    

  return (
    // <Box className="BookCardCon" style={{border:"1px solid black"}}>
    
     <Grid
    // mt={"80px"}
    templateColumns={{
      // base: "1fr",
      sm: "repeat(2, 1fr)",
      md: "repeat(3, 1fr)",
      lg: "repeat(4, 1fr)",
    }}
    gap={4}
    p={2}
    justifyContent="center"
  > 
        {books.length>0 && books.map((el)=>(
          <>

          <BookCard key={el.id} book={el}/>

          </>
        ))}
        </Grid>
//  </Box>
  )
}

export default BookList
import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { getBooks } from "../Redux/Books/action"
import BookCard from "./BookCard"
import "../style/BookCard.css"
import { useLocation, useSearchParams } from "react-router-dom"



const BookList = () => {

    const dispatch=useDispatch()
    const books=useSelector((store)=>store.books)

    const location=useLocation()
    const [searchParams]=useSearchParams()
    // console.log(location)
    // console.log(books)

    useEffect(()=>{
      let paramObj={
        
          params:{
            category:searchParams.getAll("category")
          }
     
      }
        dispatch(getBooks(paramObj)) // getBooks are comeing from action
    },[location.search])
  return (
    <div className="BookCardCon" style={{border:"1px solid black"}}>
        {books.length>0 && books.map((el)=>(
          <>

          <BookCard key={el.id} book={el}/>
          </>
        ))}
    </div>
  )
}

export default BookList
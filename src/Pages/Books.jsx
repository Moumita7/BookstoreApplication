import BookList from "../Components/BookList"
import Navbar from "../Components/Navbar"
import SideBar from "../Components/SideBar"


const Books = () => {
  return (
    <div>
        <Navbar/>
        <div style={{display:"flex",gap:"50px"}}>
          <div> <SideBar/></div>
     
       <div> <BookList/></div>
       </div>
       
    </div>
  )
}

export default Books
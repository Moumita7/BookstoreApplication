import BookList from "../Components/BookList"

import SideBar from "../Components/SideBar"


const Books = () => {
  return (
    <div>

        <div style={{display:"flex",gap:"50px"}}>
          <div> <SideBar/></div>
     
       <div> <BookList/></div>
       </div>
       
    </div>
  )
}

export default Books
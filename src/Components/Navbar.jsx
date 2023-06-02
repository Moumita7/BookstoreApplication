
import { Box } from "@chakra-ui/react"
import { Link } from "react-router-dom"
// import "../style/BoxCard.css"


const Navbar = () => {
  return (
    <Box display={"flex"} justifyContent={"space-between"} p="10px" mb="22px" className="nav">
    
      <Link to="/">Home</Link>
      {/* <Link to="/login">Login</Link> */}

      
      <Link to="/cart">Cart</Link>
      <Link to="/order">Order</Link>


    </Box>
  )
}

export default Navbar
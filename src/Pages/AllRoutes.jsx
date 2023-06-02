import { Route, Routes } from "react-router-dom"
import Books from "./Books"
import EditBook from "./EditBook"
import Login from "./Login"
import Cart from "./Cart"
import CheckOut from "./Checkout"
import Order from "./Order"
import OrderSuccessfull from "../Components/OrderSuccesfull"



const AllRoutes = () => {
  return (
<Routes>
    <Route path="/" element={<Books/>}/>
    <Route path="/books/:id" element={<Books/>}/>
    <Route path="/books/:id/edit" element={<EditBook/>}/>
    <Route path="/login" element={<Login/>}/>
    <Route path="/cart" element={<Cart/>}/>
    <Route path="/order" element={<Order/>}/>
    <Route path="/ordersuccessfull" element={<OrderSuccessfull/>}/>

    

    <Route path="/checkout" element={<CheckOut/>}/>


    {/* default Route */}
    <Route path="*" element={<h2>Page not found</h2>}/> 

</Routes>
  )
}

export default AllRoutes
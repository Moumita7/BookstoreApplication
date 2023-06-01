import { Route, Routes } from "react-router-dom"
import Books from "./Books"
import EditBook from "./EditBook"
import Login from "./Login"



const AllRoutes = () => {
  return (
<Routes>
    <Route path="/" element={<Books/>}/>
    <Route path="/books/:id" element={<Books/>}/>
    <Route path="/books/:id/edit" element={<EditBook/>}/>
    <Route path="/login" element={<Login/>}/>
    {/* default Route */}
    <Route path="*" element={<h2>Page not found</h2>}/> 

</Routes>
  )
}

export default AllRoutes
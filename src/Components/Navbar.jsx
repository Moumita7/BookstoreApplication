import { Link } from "react-router-dom"


const Navbar = () => {
  return (
    <div>
      <h1>Book Management</h1>
      <Link to="/">Home</Link>
      <Link to="/login">Login</Link>

    </div>
  )
}

export default Navbar
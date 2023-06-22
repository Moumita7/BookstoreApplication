import { Box } from "@chakra-ui/react"
import { useEffect, useState } from "react"
import { useSearchParams } from "react-router-dom"

const SideBar = () => {
  let [searchParams,setSearchParams]=useSearchParams() //useSearchParams gives us all the data(search params) of the url
 let initialState=searchParams.getAll("category")
 let initialOrder=searchParams.get("order")

  let [category,setCategory]=useState(initialState||[])
  let [order,setOrder]=useState(initialOrder ||"")

  const sortByprice=(e)=>{
    setOrder(e.target.value)
  }
  console.log(order)
//  console.log(category)

// console.log(searchParams.getAll("category"))
 
 const filterCategoty=(e)=>{
    const newCategory=[...category]
    if(newCategory.includes(e.target.value)){ //check the value is present or not
      //if the category is already present pop out of the state 
      newCategory.splice(newCategory.indexOf(e.target.value),1)
    }else{
     //if a user changes any category it should be stored in state
     newCategory.push(e.target.value)
    }
    setCategory(newCategory)

  }

  useEffect(()=>{
    const params={
      category,
    };
    order && (params.order=order) //if order is avalable then do this else not
setSearchParams(params)
  },[category,order])
  return (
    <Box  bg="teal.300">
      <h3 style={{fontSize:"15px", fontWeight:"bold"}} >Filter BY CATEGORY</h3>
      <Box>
        <label style={{marginRight:"5px"}}>Classic</label>
        <input onChange={filterCategoty}  type={"checkbox"} value="Classic" checked={category.includes("Classic")}/>
      </Box>
      <Box>
        <label style={{marginRight:"5px"}}>Dystopian</label>
        <input onChange={filterCategoty}  type="checkbox" value="Dystopian" checked={category.includes("Dystopian")} />
      </Box>
      <Box>
        <label style={{marginRight:"5px"}}>Modernist</label>
        <input onChange={filterCategoty}  type="checkbox" value="Modernist" checked={category.includes("Modernist")}/>
      </Box>
      <Box>
        <label style={{marginRight:"5px"}}>Romance</label>
        <input onChange={filterCategoty}  type="checkbox" value="Romance" checked={category.includes("Romance")} />
      </Box>
      <Box>
        <label style={{marginRight:"5px"}}>Fantasy</label>
        <input onChange={filterCategoty}  type="checkbox" value="Fantasy" checked={category.includes("Fantasy")} />
      </Box>
      <Box>
        <label style={{marginRight:"5px"}}>Adventure</label>
        <input onChange={filterCategoty}  type="checkbox" value="Adventure" checked={category.includes("Adventure")} />
      </Box>
      <Box>
        <label style={{marginRight:"5px"}}>Historical Fiction</label>
        <input onChange={filterCategoty}  type="checkbox" value="Historical Fiction" checked={category.includes("Historical Fiction")} />
      </Box>
      <hr />
      <Box onChange={sortByprice}>
        <h3 style={{fontSize:"15px", fontWeight:"bold"}}>SORT BY PRICE</h3>
        <label >Asceding</label>
        <input type="radio" name="sort_price" value={"asc"}  defaultChecked={order=='asc'} />
        <br />
        <label >Descding</label>
        <input type="radio" name="sort_price" value={"desc"} defaultChecked={order=='desc'} />

      </Box>
    </Box>
  )
}

export default SideBar
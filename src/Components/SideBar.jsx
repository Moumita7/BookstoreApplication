import { useEffect, useState } from "react"
import { useSearchParams } from "react-router-dom"

const SideBar = () => {
  let [searchParams,setSearchParams]=useSearchParams() //useSearchParams gives us all the data(search params) of the url
 let initialState=searchParams.getAll("category")
  let [category,setCategory]=useState(initialState||[])

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
    }
setSearchParams(params)
  },[category])
  return (
    <div>
      <h3>Filter BY</h3>
      <div>
        <input onChange={filterCategoty}  type="checkbox" value="Novel" checked={category.includes("Novel")}/>
        <label>Novel</label>
      </div>
      <div>
        <input onChange={filterCategoty}  type="checkbox" value="Motivational" checked={category.includes("Motivational")} />
        <label>Motivational</label>
      </div>
      <div>
        <input onChange={filterCategoty}  type="checkbox" value="Thriller" checked={category.includes("Thriller")}/>
        <label>Thriller</label>
      </div>
      <div>
        <input onChange={filterCategoty}  type="checkbox" value="Science_Fiction" checked={category.includes("Science_Fiction")} />
        <label>Science Fiction</label>
      </div>
    </div>
  )
}

export default SideBar
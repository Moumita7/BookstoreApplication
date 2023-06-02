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
      <h3>Filter BY CATEGORY</h3>
      <div>
        <input onChange={filterCategoty}  type="checkbox" value="Classic" checked={category.includes("Classic")}/>
        <label>Classic</label>
      </div>
      <div>
        <input onChange={filterCategoty}  type="checkbox" value="Dystopian" checked={category.includes("Dystopian")} />
        <label>Dystopian</label>
      </div>
      <div>
        <input onChange={filterCategoty}  type="checkbox" value="Modernist" checked={category.includes("Modernist")}/>
        <label>Modernist</label>
      </div>
      <div>
        <input onChange={filterCategoty}  type="checkbox" value="Romance" checked={category.includes("Romance")} />
        <label>Romance</label>
      </div>
      <div>
        <input onChange={filterCategoty}  type="checkbox" value="Fantasy" checked={category.includes("Fantasy")} />
        <label>Fantasy</label>
      </div>
      <div>
        <input onChange={filterCategoty}  type="checkbox" value="Adventure" checked={category.includes("Adventure")} />
        <label>Adventure</label>
      </div>
      <div>
        <input onChange={filterCategoty}  type="checkbox" value="Historical Fiction" checked={category.includes("Historical Fiction")} />
        <label>Historical Fiction</label>
      </div>
    </div>
  )
}

export default SideBar
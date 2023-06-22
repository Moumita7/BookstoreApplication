import axios from "axios"
import { GET_BOOKS_FAILURE, GET_BOOKS_REQUEST, GET_BOOKS_SUCCESS } from "./actionType"


const getBooksRequestAction=()=>{
    return {type:GET_BOOKS_REQUEST}
}

const getBooksSuccessAction=(payload)=>{
    return {type:GET_BOOKS_SUCCESS,payload}
}
const getBooksFailureAction=()=>{
    return {type:GET_BOOKS_FAILURE}
}

// export const  getBooks =(dispatch)=>{
//     dispatch(getBooksRequestAction())
//     axios.get("https://json-server-vercel-psi-ebon.vercel.app/books")
//     .then((res)=>{
//         // console.log("bk",res.data)
//      dispatch(getBooksSuccessAction(res.data))
//     })
//     .catch((err)=>{
//         console.log(err)
//         dispatch(getBooksFailureAction())
//     })
// }


export const  getBooks = (params)=>(dispatch)=>{
    dispatch(getBooksRequestAction()) //loading
    axios.get("https://json-server-vercel-psi-ebon.vercel.app/bookss",params)
    //

    //
    .then((res)=>{
        // console.log("bk",res.data) 
     dispatch(getBooksSuccessAction(res.data))
    })
    .catch((err)=>{
        console.log(err)
        dispatch(getBooksFailureAction())
    })
}


// let obj={
//     params:{
//         // category:
//         _sort:"price",
//         _order:"asc"
//     }
// }

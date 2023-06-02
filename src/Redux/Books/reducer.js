import { GET_BOOKS_FAILURE, GET_BOOKS_REQUEST, GET_BOOKS_SUCCESS } from "./actionType";


const initialState={
    books:[],
    isLoading:false,
    isError:false
}

export const bookReducer=(state=initialState,{type,payload})=>{
    switch(type){
        case GET_BOOKS_REQUEST:
            return {...state,isLoading:true}
        case GET_BOOKS_SUCCESS:
            return {...state,isLoading:false,books:payload}
        case GET_BOOKS_FAILURE:
            return {...state,isLoading:false,isError:true}
        default:
            return state;
    }
}
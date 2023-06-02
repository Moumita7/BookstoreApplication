import {applyMiddleware, combineReducers, legacy_createStore} from "redux"
import { bookReducer } from "./Books/reducer"
import thunk from "redux-thunk"
import { cartReducer } from "./Cart/reducer";

const rootReducer = combineReducers({

    books: bookReducer,
    cart: cartReducer,
    // order: orderReducer,
  });

export const store=legacy_createStore(rootReducer,applyMiddleware(thunk))
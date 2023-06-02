import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { Provider } from 'react-redux'
import './index.css'
import { store } from './Redux/store.js'
import { BrowserRouter } from 'react-router-dom'
import { ChakraProvider } from '@chakra-ui/react'

ReactDOM.createRoot(document.getElementById('root')).render(
  // <React.StrictMode>
  <ChakraProvider>
  <BrowserRouter>


  <Provider store={store}>

    <App />
  </Provider>
  </BrowserRouter>
  </ChakraProvider>
  // </React.StrictMode>
  ,
)

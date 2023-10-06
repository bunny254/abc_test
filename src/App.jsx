//Importing app dependencies
import { createBrowserRouter, RouterProvider, Outlet} from "react-router-dom";

//Importing react tostify pop-up
import { ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

//Importing redux dependencies
import  {Provider} from "react-redux";
import store from "./store/store";


//Importing All App Components
import { ScrollRestoration } from "react-router-dom";
import Banner from "./siteComponents/banner"
import Footer from "./siteComponents/footer";
import NavBar from "./siteComponents/navBar";
import Shop from "./siteComponents/shop"
import Cart from "./siteComponents/cart"
import SingleProduct from "./siteComponents/singleProdDisplay"
import Checkout from "./siteComponents/checkout"
import Contact from "./siteComponents/contact"
import Home from "./siteComponents/home";


//Creating App Layout
const Layout=()=>{
  return(
    <Provider store={store}>
  <div>
    <ScrollRestoration/>
    <NavBar/>
    <Outlet/>
    <Footer/>
  </div>
  </Provider>
  )
}

//Creating router
const router = createBrowserRouter([
  {
    path:"/",
    element:<Layout/>,
    children:[
      {
        path:"/",
        element:<Home/>
      },
      {
        path:"/shop",
        element:<Shop/>
      },
      {
        path:"/single-product",
        element:<SingleProduct/>
      },
      {
        path:"/cart",
        element:<Cart/>
      },
      {
        path:"/contact-us",
        element:<Contact/>
      },
      {
        path:"/checkout",
        element:<Checkout/>
      },
      {
        path:"/product-comparison",
        element:<Banner/>
      },
    ]
  }
])

function App() {
 

  return (
    <>
      <div>
        <ToastContainer/>
        <RouterProvider router={router}/>
      </div>
      
    </>
  )
}

export default App

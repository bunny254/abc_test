//Importing app dependencies
import { createBrowserRouter, RouterProvider, Outlet} from "react-router-dom";


//Importing All App Components
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
  <div>
    <NavBar/>
    <Outlet/>
    <Footer/>
  </div>
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
        path:"/single-product.",
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
      }
    ]
  }
])

function App() {
 

  return (
    <>
      <div>
        <RouterProvider router={router}/>
      </div>
      
    </>
  )
}

export default App

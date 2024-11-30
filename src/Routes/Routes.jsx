import { createBrowserRouter } from "react-router-dom"
import AddCoffe from "../Home/AddCoffe"
import UpdateCoffe from "../Home/UpdateCoffe"
import MainLayout from "../Main/MainLayout"
import Signin from "../Sign-IN-Up/Signin"
import SignUp from "../Sign-IN-Up/SignUp"
import Users from "../Home/Users"


const routes = createBrowserRouter([
    {
        path:'/',
        element:<MainLayout/>,
        loader:()=> fetch('http://localhost:5000/coffe'),
        children:[
             
        ]
    },
    {
        path:'/addCoffe',
        element:<AddCoffe/>
    },
    {
        path:'/updateCoffe/:id',
        element:<UpdateCoffe/>,
        loader:({params})=> fetch(`http://localhost:5000/coffe/${params.id}`)
    },
    {
        path:'/signin',
        element:<Signin/>
            },
            {
        path:'/signup',
        element:<SignUp/>,
            },
  
            {
        path:'/users',
        element:<Users/>,
        loader:()=> fetch('http://localhost:5000/users')
            },
  

])

export default routes

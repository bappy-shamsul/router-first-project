import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
// import App from './App.jsx'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Home from './components/Home/Home';
import About from './components/About/About';
import History from './components/History/History';
import Contact from './components/Contact/Contact';
import Users from './components/Users/Users';
import Userinfo from './components/Userinfo/Userinfo';
import Posts from './components/Posts/Posts';
import PostDetails from './components/PostDetails/PostDetails';



const router = createBrowserRouter([
  {
    path: "/",
    element: <Home></Home>,
    children: [
      {
        path: '/about',
        element: <About></About>
      },
      {
        path: '/history',
        element: <History></History>
      },
      {
        path: '/contact',
        element: <Contact></Contact>
      },
      {
        path: '/users',
        loader: ()=> fetch('https://jsonplaceholder.typicode.com/users'),
        element: <Users></Users>
      },
      // {
      //   path: '/user/:userPhone', // why user/:userId not users or use/:userId
      //   loader: ({params})=> fetch(`https://jsonplaceholder.typicode.com/users/${params.userPhone}`),
      //   element: <Userinfo></Userinfo>
      // },
      {
        path: '/user/:userId', // why user/:userId not users or use/:userId
        loader: ({params})=> fetch(`https://jsonplaceholder.typicode.com/users/${params.userId}`),
        element: <Userinfo></Userinfo>
      },
      {
        path: '/comments',
        element: <Posts></Posts>,
        loader: ()=> fetch('https://jsonplaceholder.typicode.com/comments'),
      },
      {
        path:'comment/:commentId',
        loader: ({params})=> fetch(`https://jsonplaceholder.typicode.com/comments/${params.commentId}`),
        element: <PostDetails></PostDetails>,
      }
    ]
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* <App /> */}
    <RouterProvider router={router} />
  </StrictMode>,
)

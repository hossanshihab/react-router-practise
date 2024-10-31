import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Home from './component/Home/Home';

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Header from './component/Header/Header.jsx';
import Users from './component/Users/Users.jsx';
import About from './component/About/About';
import Contact from './component/Contact/Contact.jsx';
import Photos from './component/Photos/Photos.jsx';
import Userdetails from './component/Userdetails/Userdetails.jsx';
import Posts from './component/Posts/Posts.jsx';
import PostDetails from './component/PostDetails/PostDetails';
import Error from './component/Error/Error';


const router = createBrowserRouter([
  {
    path: '/',
    element: <Home></Home>,
    errorElement: <Error></Error>,

    children: [
      {
        path: '/about',
        element: <About></About>,
      },
      {
        path: '/contact',
        element: <Contact></Contact>,
      },
      {
        path: '/header',
        element: <Header></Header>
      },
      {
        path: '/users',
        loader: () => fetch('https://jsonplaceholder.typicode.com/users'),
        element: <Users></Users>,
      },
      {
        path: '/photos',
        loader: () => fetch('https://jsonplaceholder.typicode.com/photos'),
        element: <Photos></Photos>,
      },
      {
        path: '/user/:userId',
        loader: ({params})=> fetch(`https://jsonplaceholder.typicode.com/users/${params.userId}`),
        element: <Userdetails></Userdetails>
      },
      {
        path: '/posts',
        loader: () => fetch('https://jsonplaceholder.typicode.com/posts'),
        element: <Posts></Posts>,
      },
      {
        path: '/post/:postId',
        loader: ({params}) => fetch(`https://jsonplaceholder.typicode.com/posts/${params.postId}`),
        element: <PostDetails></PostDetails>
      }

    ]
  }
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)

import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { Provider } from 'react-redux'
import store from './store/store.js'
import { RouterProvider, createBrowserRouter } from 'react-router'
import Home from './pages/Home.jsx'
import { Login, ProtectedAuth } from './components/index.js'


import AddPost from "./pages/AddPost";
import Signup from './pages/Signup'
import EditPost from "./pages/EditPost";

import Post from "./pages/Post";

import AllPosts from "./pages/AllPosts";
import Contact from './pages/Contact.jsx'
import MyPosts from './pages/MyPosts.jsx'

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
        {
            path: "/",
            element: <Home />,
        },
        {
            path: "/login",
            element: (
                <ProtectedAuth authentication={false}>
                    <Login />
                </ProtectedAuth>
            ),
        },
        {
            path: "/signup",
            element: (
                <ProtectedAuth authentication={false}>
                    <Signup />
                </ProtectedAuth>
            ),
        },
        {
            path: "/all-posts",
            element: (
                <ProtectedAuth authentication>
                    {" "}
                    <AllPosts />
                </ProtectedAuth>
            ),
        },
        {
            path: "/add-post",
            element: (
                <ProtectedAuth authentication>
                    {" "}
                    <AddPost />
                </ProtectedAuth>
            ),
        },
        {
            path: "/edit-post/:slug",
            element: (
                <ProtectedAuth authentication>
                    {" "}
                    <EditPost />
                </ProtectedAuth>
            ),
        },
        {
            path: "/post/:slug",
            element: <Post />,
        },
        {
            path: "/contact",
            element: <Contact />
        },
        {
            path: "/my-posts",
            element: <MyPosts />
        }
    ],
},
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
    <RouterProvider router={router}/>
    </Provider>
  </React.StrictMode>,
)
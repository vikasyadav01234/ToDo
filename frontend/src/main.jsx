import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from "react-router-dom"
import Home from './pages/Home.jsx'
import SignUp from './pages/SignUp.jsx'
import Login from './pages/Login.jsx'
import ProtectedRoutes from './utils/ProtectedRoutes.jsx'
import Todo from './pages/Todo.jsx'
import Layout from './layout/Layout.jsx'



const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='' element={<Layout/>}>

      <Route path='/' element={<Home />} />
      <Route path='/register' element={<SignUp />} />
      <Route path='/login' element={<Login />} />
      <Route path='/user' element={<ProtectedRoutes/>}>
        <Route path='todo' element={<Todo />} />
      </Route>
    </Route>
  )
)




createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)

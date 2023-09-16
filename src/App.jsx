import React from 'react'
import Home from './pages/Home'
import Ruslt from './pages/Ruslt'
import { createBrowserRouter } from 'react-router-dom'
import { RouterProvider } from 'react-router-dom'
function App() {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <Home/>
    },
    {
      path: '/verify/:id',
      element: <Ruslt/>
    }
  ])
  return (
    <div>
<RouterProvider  router={router}/>
    </div>
  )
}

export default App
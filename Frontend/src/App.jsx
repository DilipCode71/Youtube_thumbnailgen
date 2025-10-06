
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import YouTubeLayout from './YouTubeLayout'
import Home from './pages/Home'
import NotFoundPage from './NotFoundPage'
import FeaturesPages from './pages/Features'
import AboutPage from './pages/About'
import Register from './pages/Register'
import Login from './pages/Login'
import ScrollToTop from './ScrollToTop'
import GeneratorPage from './pages/Generator'


function App() {


  const routers=createBrowserRouter(
    [
      {
        path:"/",
        element:(
      <>
        <ScrollToTop />
        <YouTubeLayout />
      </>
    ),
        
      
        children:[
          {
           path:"/",
           element:<Home/>
          },
          {
            path:"/features",
            element:<FeaturesPages/>
          },
          {
            path:"/about",
            element:<AboutPage/>
          },
          {
            path:"/generator",
            element:<GeneratorPage/>
          }
     
        ]

      },
      {
        path:"/register",
        element:<Register/>
      },
      {
        path:"/login",
        element:<Login/>

      },
       {
            path:"*",
            element:<NotFoundPage/>
          },
    ]
  )

  return (

    <>
      
      <RouterProvider router={routers} />
      
    </>

    
  )
}

export default App
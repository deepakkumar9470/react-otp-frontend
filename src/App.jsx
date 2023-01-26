import './App.css'

import {createBrowserRouter,RouterProvider} from 'react-router-dom'
import UserName from './components/UserName/UserName'
import Profile from './components/Profile/Profile'
import Register from './components/Register/Register'
import Password from './components/Password/Password'
import Reset from './components/Reset/Reset'
import Recovery from './components/Recovery/Recovery'
import NotFound from './components/NotFound/NotFound'

const router = createBrowserRouter([
  {
    path:  '/', element : <UserName/>
  },
  {
    path:  '/profile', element : <Profile/>
  }, 
  {
    path:  '/register', element : <Register/>
  },
  {
    path:  '/password', element : <Password/>
  }, 
  {
    path:  '/reset', element : <Reset/>
  }, 
  {
    path:  '/recovery', element : <Recovery/>
  },
  {
    path:  '*', element : <NotFound/>
  }
])

function App() {

  return (
    <main>

        <RouterProvider router={router}></RouterProvider>
       
    </main>
  )
}

export default App

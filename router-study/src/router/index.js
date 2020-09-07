import Home from '../pages/Home'
import Profile from '../pages/Profile'
import Detail from '../pages/Detail3'
import About, {AboutProduct, AboutMessage} from '../pages/About'
import User from '../pages/User'
import Login from '../pages/Login'

const router = [
  {
    path: '/',
    exact: true,
    component: Home
  },
  {
    path: '/about',
    component: About,
    routes: [
      {
        path: '/about',
        exact: true,
        component: AboutProduct
      },
      {
        path: '/about/message',
        component: AboutMessage
      }
    ],
  },
  {
    path: '/detail3',
    component: Detail
  },
  {
    path: '/profile',
    component: Profile
  },
  {
    path: '/user',
    component: User
  },
  {
    path: '/login',
    component: Login
  }
]

export default router
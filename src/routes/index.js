import Login from '../pages/login'
import Home from '../pages/home'

const routes = [
  // auth 是否需要登录
  {path: "/login", name: "login", component: Login},
  {path: "/", name: "home", component: Home, auth: true}
]

export default routes
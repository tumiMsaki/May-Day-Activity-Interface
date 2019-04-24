import homePage from '../page/homePage/index'
import otherPage from '../page/otherPage/index'
import Three from '../page/threePage/index'
import Four from '../page/fourPage/index'


const baseRoute = [
  {
    path: "/",
    component: homePage,
    exact: true
  },
  {
    path: "/other",
    component: otherPage,
    children: [
      {
        path: "/other",
        component: Three,
        exact: true
      },
      {
        path: "/other/two",
        component: Four
      }
    ]
  }
]


export default baseRoute
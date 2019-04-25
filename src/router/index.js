import homePage from '../page/homePage/index'
import choicePage from '../page/choicePage/index'
import mapPage from '../page/mapPage/index'


const baseRoute = [
  {
    path: "/",
    component: homePage,
    exact: true
  },
  {
    path: "/choice",
    component: choicePage
  },
  {
    path: "/map",
    component: mapPage
  }

]


export default baseRoute
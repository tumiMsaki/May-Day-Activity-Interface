import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom'
import routes from './router/index'


class App extends React.Component {
  render(){
    return(
      <div>
        <Router>
          <div>
            {
              routes.map((route, key) => {
                if(route.exact){
                  return <Route key={key} exact path={route.path} component={route.component}></Route>
                }else{
                  return <Route key={key} path={route.path} component={route.component}></Route>
                }
              })
            }
          </div>
        </Router>
      </div>
    )
  }
}

export default App;
import React from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'
import routes from './router/index'


class App extends React.Component {
  render(){
    return(
      <div>
        <Router>
          <div>
            <header>
              <Link to="/">onePage</Link>
              <Link to="/other">twoPage</Link>
            </header>
            {
              routes.map((route, key) => {
                if(route.exact){
                  return <Route key={key} exact path={route.path} component={route.component}></Route>
                }else{
                  return <Route key={key} path={route.path} 
                  render={props => (
                    <route.component {...props} children={route.children} />
                  )}
                  ></Route>
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
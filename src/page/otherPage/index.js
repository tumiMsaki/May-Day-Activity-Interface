import React from 'react'
import {Route, Link } from 'react-router-dom'


class Other extends React.Component{
 
  render(){
    return(
      <div>
        <header>
          <Link to="/other">3</Link>
          <Link to="/other/two">4</Link>
        </header>
        <div>
          {
            this.props.children.map((route, key) => {
              if(route.exact){
                return <Route key={key} exact path={route.path} component={route.component}></Route>
              }else{
                return <Route key={key} path={route.path} component={route.component}></Route>
              }
            })
          }
        </div>
      </div>
    )
  }
}

export default Other;
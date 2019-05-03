import React from 'react';
import { BrowserRouter as Router, Route,Switch } from 'react-router-dom'
import routes from './router/index'
import Head from './page/head/index'
import './index.less'
import { TransitionGroup, CSSTransition } from "react-transition-group";


const AnimationRoute = () => (
  <div className="app">
  <Head></Head>
  <Router>
    <Route
      render={({ location }) => (
            <TransitionGroup>
              <CSSTransition
                key={location.pathname}
                classNames="fade"
                timeout={400}
              >
                <Switch location={location}>
                {
              routes.map((route, key) => {
                if(route.exact){
                  return <Route key={key} exact path={route.path} component={route.component}></Route>
                }else{
                  return <Route key={key} path={route.path} component={route.component}></Route>
                }
              })
            }
                </Switch>
              </CSSTransition>
            </TransitionGroup>
      )}
    />
  </Router>
  </div>
);




export default AnimationRoute;
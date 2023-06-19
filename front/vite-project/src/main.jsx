import React from 'react'
import ReactDOM from 'react-dom/client'
import { Route, Switch, Redirect} from 'wouter'
import Panel from './pages/Panel'
import Login from './pages/Login'
import Register from './pages/Register'
import NavBar from './components/Navbar/Navbar'




const Main = ()=>{

  return(
    <>
    <NavBar/>
    <Switch>
    <Route path='/login' component={Login} />
    <Route path='/register' component={Register} />
    <Route path='/panel' component={Panel}/>
    <Redirect to='/login'/>
    </Switch>
    </>
  )

}


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Main />
  </React.StrictMode>,
)

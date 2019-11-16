import React,  { Component }  from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import About from './components/About'
import Home from './components/Home'
class App extends React.Component {
   render () {
       return (
         <Router>
           <Switch>
             <Route exact path='/' component={Home} />
             <Route exact path='/about' component={About} />
           </Switch>
         </Router>
       )
   }
}
export default App
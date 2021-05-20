import {Component} from 'react';
import Navbar from "./components/Navbar"
import {BrowserRouter, Route, Switch} from "react-router-dom"
import Home from './components/Home'
import About from './components/About'
import Contact from './components/Contact'
import Post from './components/Post'

class App extends Component {
      render(){
        return (
          <BrowserRouter>
          <div className="App">
          <Navbar/>
          <Switch>
          <Route exact path='/' component={Home}/>
          <Route exact path='/about' component={About}/>
          <Route exact path='/contact' component={Contact}/>
          <Route path ='/:post_id' component={Post} /> 
          </Switch>
         </div> 
         </BrowserRouter>
        );
      }
}
export default App;






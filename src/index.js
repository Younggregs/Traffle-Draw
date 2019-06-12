import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import Login from './components/village/Login'
import Home from './components/village/Home'
import NewTraffle from './components/village/New Traffle'
import PrivacyPolicy from './components/village/Privacy Policy'
import Disclaimer from './components/village/Disclaimer'
import About from './components/village/About'
import MenuList from './components/village/Menu List'


class App extends React.Component {
    render() {
      return (
        <Router>
          <div>
            <Route exact path="/" component={Login}/>
            <Route exact path="/home" component={Home}/>
            <Route exact path="/new_traffle" component={NewTraffle}/>
            <Route exact path="/privacy_policy" component={PrivacyPolicy}/>
            <Route exact path="/disclaimer" component={Disclaimer}/>
            <Route exact path="/about" component={About}/>
            <Route exact path="/menu_list" component={MenuList}/>
          </div>
        </Router>
        )
    }
}


ReactDOM.render(<App />, document.getElementById('root'));

import React,  { Component }from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import './App.css'
import Layout from '../components/layouts/layout'
import Home from '../components/Home/home'
import Login from '../components/Login/login'

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Layout>
          <Switch>
            <Route path="/" exact Component={Login} />
            <Route path="/home" Component={Home} />
          </Switch>
        </Layout>
      </BrowserRouter>
    );
  }
}

export default App;

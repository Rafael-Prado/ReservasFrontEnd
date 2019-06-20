import React,  { Component }from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import './App.css'
import Layout from '../components/layouts/layout'
import Home from '../components/Home/home'
import Login from '../components/Login/login'
import ReservaDetails from '../components/ReservaDetails/reservaDetails'
import InternalServer from '../components/ErrorPages/InternalServer/internalServer'
import asyncComponent from '../Hoc/AsyncComponent'

const AsyncReservaList = asyncComponent(() => {
  return import('../components/ListaReservas/listaReserva');
});

class App extends Component {
  render() {
    return (     
      <BrowserRouter>
        <Layout>
          <Switch>
            <Route exact path="/"  component={ Login }  />
            <Route path="/home" component={Home}  />
            <Route path="/listaReserva" component={AsyncReservaList}/>
            <Route path="/reservaDetails/:id" component={ReservaDetails} />
            <Route path="/500" component={InternalServer} />
          </Switch>
        </Layout>
      </BrowserRouter>
    )
  }
}

export default App

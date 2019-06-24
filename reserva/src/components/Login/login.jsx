import React, { Component } from 'react'
import Logo from '../../assets/logo.png'
import {Form, FormGroup, Button} from 'react-bootstrap'
import './login.css'

export default class Login extends Component {
    state = {
        username: "",
        password: "",
        error: ""
    };

    handleSignUp = e => {
      e.preventDefault();


      this.props.history.push("/Home");

      alert("Autenticado!!!");
    };   
      render() {
        return (
          <div className="Login">
            <Form className="FormLogin" horizontal onSubmit={this.handleSignUp}>
            <img src={Logo} alt=" logo" />
            {this.state.error && <p>{this.state.error}</p>}
               <Form.Control size="lg" type="text" placeholder="Nome de usuário"
                  onChange={e => this.setState({ username: e.target.value }) }/>
               <br/>
               <Form.Control size="lg" type="password" 
                type="passwor"
                placeholder="Senha"
                onChange={e => this.setState({ password: e.target.value })}
              />
              <br/>
              <Button  className="BtnLogin"
                size="lg"
                block
                type="submit"
              >
                Login
              </Button>
              </Form>
          </div>
        );
      }
    }

import React, { Component } from 'react'
import Logo from '../../assets/logo.png'
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

      alert("Eu vou te registrar");
    };   
      render() {
        return (
          <div className="Login">
            <form className="FormLogin" onSubmit={this.handleSignUp}>
            <img src={Logo} alt=" logo" />
            {this.state.error && <p>{this.state.error}</p>}
                <input className = "inputForm form-control"
                  type="text"
                  placeholder="Nome de usuário"
                  onChange={e => this.setState({ username: e.target.value })}
                />
              <input className = "inputForm form-control"
                type="Senha"
                placeholder="Senha"
                onChange={e => this.setState({ password: e.target.value })}
              />
              <button className="BtnLogin"
                block
                type="submit"
              >
                Login
              </button>
            </form>
          </div>
        );
      }
    }

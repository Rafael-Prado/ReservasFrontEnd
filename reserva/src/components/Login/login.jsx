import React, { Component } from 'react'
import { Button, FormControl, FormGroup } from 'react-bootstrap'
import "./login.css"

export default class Login extends Component {
    constructor (props){
        super(props);
        this.state = {
            usuario: "",
            password: ""
        }
    }

    validadeForm(){
        return this.state.usuario.length > 0 && this.password.length > 0
    }
    handlerChange = event => {
        this.setState({
            [event.target.id]: event.target.value
        })
    }

    handleSubmit = event => {
        event.preventdefault()
    }

    render (){
        return(
        <div className="Login">
            <form onSubmit={this.handleSubmit}>
                <FormGroup controlId="usuario" bsSize="large">
                              
                    <FormControl
                        autoFocus
                        type="usuario"
                        value={this.state.usuario}
                        onChange={this.handlerChange}
                    />
                </FormGroup>
                <FormGroup controlId="password" bsSize="large">
                                   
                    <FormControl
                        autoFocus
                        type="password"
                        value={this.state.password}
                        onChange={this.handlerChange}
                    />
                </FormGroup>

                <Button block
                bsSize="large"
                disabled={!this.validadeForm()}
                type="submit"
                >
                    Login
                </Button>
            </form>
        </div>
        )
    }
}

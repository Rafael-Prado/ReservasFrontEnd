
import React, { Component } from 'react'
import './navigation.css'
import { Link } from 'react-router-dom'
import { Col, Button } from 'react-bootstrap'

class Navigation extends Component {
   
    render(){
        return (
        <Col md={12}>
            <nav className="navbar navbar-expand-lg navbar-dark bg-info">
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarToggler" aria-controls="navbarTogglerDemo01" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarToggler">
                    <Link className='navbar-brand' to='/Home'>
                        <i className='fa fa-calendar-check-o'>Reservas App </i> 
                    </Link>
                    <ul className="navbar-nav mr-auto mt-2 mt-lg-0">
                        <li className="nav-item ">
                            <Link className='nav-link' to='/Home'>
                                Home
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link  className='nav-link'to='/listareserva'>Lista Reservados</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to='/novareserva'>Nova Reserva</Link>
                        </li>
                    </ul>
                    
                    <Button variant="outline-light" className="my-2 my-sm-0" type="button" href="/">Sair</Button>

                </div>
            </nav>          
        </Col>
        );
    }
}
         
export default Navigation;
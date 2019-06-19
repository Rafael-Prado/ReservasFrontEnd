
import React from 'react'
import './navigation.css'
import { Link } from 'react-router-dom'
import { Col } from 'react-bootstrap'

const navigation = (props) => {
    return (
    <Col md={12}>
        <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarToggler" aria-controls="navbarTogglerDemo01" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarToggler">
                <Link className='navbar-brand' to='/'>
                    <i className='fa fa-calendar-check-o'>Rafael Prado</i> 
                </Link>
                <ul className="navbar-nav mr-auto mt-2 mt-lg-0">
                    <li className="nav-item ">
                        <Link className='nav-link' to='/Home'>
                            Home
                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link  className='nav-link'to='/Resevas'>Lista Reservados</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to='/NovaReserva'>Nova Reserva</Link>
                    </li>
                </ul>
                
                <button className="btn btn-outline-light my-2 my-sm-0" type="button" >Sair</button>

            </div>
        </nav>          
    </Col>
    );
}
         
export default navigation;
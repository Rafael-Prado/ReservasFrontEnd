
import React from 'react'
import './navigation.css'
import { Link } from 'react-router-dom'
import { Col } from 'react-bootstrap'

const navigation = (props) => {
    return (
      <Col md={12}>
            <nav className='navbar navbar-inverse bg-inverse'>
            <div className='container'>
                <div className='navbar-header'>
                    <Link className='navbar-brand' href='/home'>
                        <i className='fa fa-calendar-check-o'></i> Way2 - Champions
                    </Link>
                </div>
                <div id='navbar' className='navbar-collapse collapse'>
                    <ul className="nav navbar-nav">
                        <li><Link href='/Resevados'>Competição Atual</Link></li>
                        <li><Link href='/NovaReserva'>Competição</Link></li>
                    </ul>
                </div>
            </div>
        </nav>
      </Col>
    );
}
 
export default navigation;
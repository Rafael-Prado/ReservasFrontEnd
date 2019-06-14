import React from 'react'
import { Col, Row } from 'react-bootstrap'
import './home.css'

const home = (props) => {
    return(
        <Row>
            <Col md={12}>
                <div className={'homeText'}>
                    "Bem vindo a sitema de reserva"
                </div>
            </Col>
        </Row>
    )
}

export default home

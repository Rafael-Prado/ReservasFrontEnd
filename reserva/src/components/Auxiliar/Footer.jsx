import React from 'react'
import {Container } from 'react-bootstrap'


const footer = props => {
    return (
            <div className="footer-copyright text-center py-3">
                <Container fluid>
                &copy; {new Date().getFullYear()} Copyright: <a href="https://www.pradosystems.com">Prado Systems</a>
                </Container>
            </div>

    )
}

export default footer
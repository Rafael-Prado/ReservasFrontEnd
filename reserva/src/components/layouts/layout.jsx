import React from 'react'
import { Row, Container } from 'react-bootstrap'
import Navigation from '../Navigation/navigation';

const layout =(props) => {
    return (
        <Container>
            <Row>
            <Navigation/>
            </Row>
            <main>
                { props.children }
            </main>
        </Container>
    )
}

export default layout
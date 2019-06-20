
import React from 'react'
import {Card, CardDeck, Col } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import './card.css'

const cards = props => {

    return (
       <Col md={12}>
            <CardDeck>
                <Card bg="primary" text="white" style={{ width: '18rem' }}>
                        <Card.Header>Missão</Card.Header>
                        <Card.Body>
                        <Card.Title>Nossa Missão</Card.Title>
                        <Card.Text>
                        Nossa missão e trazer a melhor a mais inovadora forma
                        para que você possa encontra uma sala, um espaço confortável
                        que possa realizar todos os seus sonhos e projetos e principalmente
                        ser feliz  
                        </Card.Text>
                        </Card.Body>
                </Card>
                <Card bg="info" text="white" style={{ width: '18rem' }}>
                    <Card.Header>Sobre</Card.Header>
                    <Card.Body>
                    <Card.Title>Quem somos</Card.Title>
                    <Card.Text>
                    Uma empresa inovadora que vai te fornece a melhor experiência em 
                    aluguel de salas para reunião e trabalho. <br/>
                    *Café; 
                    *Água ;
                    <br/>
                    *Climatizado ;
                    *Recepção 
                    </Card.Text>
                    </Card.Body>                
                </Card>
                <Card bg="success" text="white" style={{ width: '18rem' }}>
                        <Card.Header>WhatSapp</Card.Header>
                        <Card.Body>
                        <Card.Title>Vamos Coversar?</Card.Title>
                        <Card.Text>
                            Na correria do dia dia as vezes não temos tempo nem
                            para pararmos e acessar o site nos adiciona no wats,
                            e fale com nossos consultores e receba a melhor proposta.
                        
                        <Link  className='nav-link'to='#'>Whats:(70)7070.70.70-70</Link>                        
                        </Card.Text>
                        </Card.Body>
                 </Card>
            </CardDeck>
         </Col>
    )
}

export default cards
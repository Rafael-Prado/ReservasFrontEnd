import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Jumbotron, Row, Col, Button } from 'react-bootstrap';
import * as repositoryActions from '../../store/actions/repositoryActions'
import Moment from 'react-moment';
import ReservaAccounts from '../ReservaComponents/ReservaAccounts/ReservasAccounts'
import Navigation from '../Navigation/navigation'
import './reservaDetails.css'

class ReservaDetails extends Component {


    componentDidMount = () => {
        let id = this.props.match.params.id;
        let url = '/v1/api/reservas/details/' + id + '';
        this.props.onGetData(url, { ...this.props })
    }
   

    render(){ 

        const redirectToReservas = (history) =>{
            history.push('/ListaReserva');
        }      
        
        const reserva = this.props.data; 

        return (
            <Col md ={12}>
            <Row>
                <Navigation/>
            </Row>
            <br/>
            <div>
                <Jumbotron>
                    <Row>
                        <Col md={2}>
                            <strong>Responsável:</strong>
                        </Col>
                        <Col md={2}>
                            {reserva.nomeUsuario}
                        </Col>
                        <Col md={2}>
                            <strong>Filial:</strong>
                        </Col>
                        <Col md={2}>
                            {reserva.filial}
                        </Col>
                    </Row>
                    <Row>
                     <Col md={2}>
                     <strong>Sala:</strong>
                        </Col>
                        <Col md={2}>
                        {reserva.nomeSala}
                        </Col>
                        <Col md={2}>
                            <strong>Cafè:</strong>
                        </Col>
                        <Col md={2}>
                            {reserva.café}
                        </Col>
                    </Row>
                    <Row>
                     <Col md={2}>
                            <strong>Data Início:</strong>
                        </Col>
                        <Col md={2}>
                            <Moment format="DD/MM/YYYY">{reserva.dataInicio}</Moment>
                        </Col>
                        <Col md={2}>
                            <strong>Data Fim:</strong>
                        </Col>
                        <Col md={2}>
                            <Moment format="DD/MM/YYYY">{reserva.dataFim}</Moment>
                        </Col>
                    </Row>
                    <Row>
                    <Col md={2}>
                            <strong>Hora Início:</strong>
                        </Col>
                        <Col md={2}>
                            <Moment format="HH:mm">{reserva.horaInicio}</Moment>
                        </Col>
                        <Col md={2}>
                            <strong>Hora Fim:</strong>
                        </Col>
                        <Col md={2}>
                            <Moment format="HH:mm">{reserva.HoraFim}</Moment>
                        </Col>
                    </Row>
                    <Row>
                    
                        <Col md={2}>
                            <strong>Pessoas:</strong>
                        </Col>
                        <Col md={2}>
                            {reserva.quantidadePessoa}
                        </Col>
                    </Row>
                    <div className="Btn">
                        <Button variant="primary" size="lg"
                        onClick={() => redirectToReservas(this.props.history)}
                        >Voltar Lista Reserva </Button>
                    </div>
                </Jumbotron>
            </div>
         </Col>
        )
    }
}
const mapStateToProps = (state) => {
    return {
        data: state.repository.data
    }
}
 
const mapDispatchToProps = (dispatch) => {
    return {
        onGetData: (url, props) => dispatch(repositoryActions.getData(url, props))
    }
}
 
export default connect(mapStateToProps, mapDispatchToProps)(ReservaDetails);

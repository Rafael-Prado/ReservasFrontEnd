import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as repositoryActions from '../../../store/actions/repositoryActions';
import * as errorHandlerActions from '../../../store/actions/errorHandlerActions';
import SuccessModal from '../../../components/Modal/SuccessModal/SuccessModal';
import ErrorModal from '../../../components/Modal/ErrorModal/ErrorModal';
import { Button, Col, Row, FormLabel } from 'react-bootstrap';
import Moment from 'react-moment';
import Navigation from '../../Navigation/navigation'
 
class DeleteReserva extends Component {
    componentDidMount = () => {
        const id = this.props.match.params.id;
        const url = 'v1/api/Reservas/' + id;
        this.props.onGetReservaById(url, { ...this.props });
    }

    redirectToReservaList = () => {
        this.props.history.push('/listareserva');
    }

    deleteReserva = (event) => {
        event.preventDefault();
     
        const url = "v1/api/Reservas/" + this.props.data.reservaId;
     
        this.props.onDeleteReserva(url, { ...this.props });
    }

    render() { 
        let reserva = {...this.props.data};
        return ( 
            <Col md ={12}>
                <Row>
                <Navigation/>
                </Row>
                <br/>
                <Row>
                    <Col md={2}>
                        <FormLabel htmlFor='name'>Reserva:</FormLabel>
                    </Col>
                    <Col md={4}>
                        <span name='name'>{reserva.nomeSala}</span>
                    </Col>
                    <Col md={2}>
                        <FormLabel htmlFor='dataReserva'>Data Reserva:</FormLabel>
                    </Col>
                    <Col md={4}>
                        <span name='dataReserva'><Moment format="MM/DD/YYYY">{reserva.dataReserva}</Moment></span>
                    </Col>
                </Row> 
                <Row>
                    <Col mdOffset={8} md={1}>
                        <Button type="submit" bsStyle="info" onClick={this.deleteReserva}>Delete</Button>
                    </Col>
                    <Col md={1}>
                            <Button bsStyle='danger' onClick={this.redirectToReservaList}>Cancel</Button>
                    </Col>
                 </Row>    

                <SuccessModal show={this.props.showSuccessModal} modalHeaderText={'Success message'}
                    modalBodyText={'Deletado com sucesso'}
                    okButtonText={'OK'}
                    successClick={() => this.props.onCloseSuccessModal('/listareserva', { ...this.props })} />
                <ErrorModal show={this.props.showErrorModal} modalHeaderText={'Error message'}
                    modalBodyText={this.props.errorMessage}
                    okButtonText={'OK'}
                    closeModal={() => this.props.onCloseErrorModal()} />           
            </Col>
         )
    }
}

const mapStateToProps = (state) => {
    return {
       data: state.repository.data,
       showSuccessModal: state.repository.showSuccessModal,
       showErrorModal: state.errorHandler.showErrorModal,
       errorMessage: state.errorHandler.errorMessage
    }
  }

  const mapDispatchToProps = (dispatch) => {
    return {
        onGetReservaById: (url, props) => dispatch(repositoryActions.getData(url, props)),
        onDeleteReserva: (url, props) => dispatch(repositoryActions.deleteData(url, props)),
        onCloseSuccessModal: (url, props) => dispatch(repositoryActions.closeSuccessModal(props, url)),
        onCloseErrorModal: () => dispatch(errorHandlerActions.closeErrorModal())
    }
}
 
export default connect(mapStateToProps, mapDispatchToProps)(DeleteReserva);
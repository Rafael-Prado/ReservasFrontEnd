import React, { Component } from 'react'
import { connect } from 'react-redux';
import * as repositoryActions from '../../../store/actions/repositoryActions';
import * as errorHandlerActions from '../../../store/actions/errorHandlerActions';
import SuccessModal from '../../../components/Modal/SuccessModal/SuccessModal';
import ErrorModal from '../../../components/Modal/ErrorModal/ErrorModal';
import Input from '../../../UI/Input/Input'
import { Form, Row, Button, FormGroup, Col, Jumbotron } from 'react-bootstrap'
import { returnInputConfiguration } from '../../../Utility/InputConfiguration'
import * as formUtilityActions from '../../../Utility/FormUtility';
import Navigation from '../../Navigation/navigation'
import './CreateReserva.css'
 
class CreateReserva extends Component {
    state = {
        reservaForm: {},
        isFormValid: false
    }
 
    componentWillMount = () =>{
        this.setState({ reservaForm: returnInputConfiguration() });
    }
    
    handleChangeEvent = (event, id) => {
        const updatedReservaForm = { ...this.state.reservaForm };
        updatedReservaForm[id] = formUtilityActions.executeValidationAndReturnFormElement(event, updatedReservaForm, id);
     
        const counter = formUtilityActions.countInvalidElements(updatedReservaForm);
     
        this.setState({ reservaForm: updatedReservaForm, isFormValid: counter === 0 })
    }

    createReserva = (event) => {
        event.preventDefault();
    
        const reservaToCreate = {
            ReservaId: 0,
            UsuarioId: 1,
            SalaId: 1,
            DataInicio: this.state.reservaForm.dataInicio.value,
            DataFim: this.state.reservaForm.dataFim.value,
            HoraInicio: this.state.reservaForm.horaInicio.value,
            HoraFim: this.state.reservaForm.horaFim.value,
            Café: this.state.reservaForm.cafe.value,
            QuantidadePessoa: this.state.reservaForm.quantidadePessoa.value
        }
    
        const url = '/v1/api/reservas';
        this.props.onCreateReserva(url, reservaToCreate, { ...this.props });        
    }
    redirectToReservaList = () => {
        this.props.history.push('/listareserva');
    }
    
    render() { 

        const formElementsArray = formUtilityActions.convertStateToArrayOfFormObjects({ ...this.state.reservaForm });

        return ( 
            <Col md = {12}>
                <Row>
                <Navigation/>
                </Row>
                <br/>
                <div>
                    
                    <Form horizontal onSubmit={this.createReserva}>
                        {
                            formElementsArray.map(element => {
                                    return <Input key={element.id} elementType={element.config.element} 
                                    id={element.id} label={element.config.label}
                                    type={element.config.type} value={element.config.value} 
                                    changed={(event) => this.handleChangeEvent(event, element.id)}
                                    errorMessage={element.config.errorMessage} 
                                    invalid={!element.config.valid} shouldValidate={element.config.validation}
                                    touched={element.config.touched} 
                                    blur={(event) => this.handleChangeEvent(event, element.id)} />
                            })
                        }
                        <br />
                        <FormGroup md={6} className='Btns'>
                            <Row>
                                <Col >
                                    <Button type='submit' bg='primary' disabled={!this.state.isFormValid}>Salvar</Button>
                                </Col>
                                <Col >
                                    <Button bg='danger' onClick={this.redirectToReservaList}>Cancel</Button>
                                </Col>
                            </Row>
                    </FormGroup>
                    </Form>
                    <SuccessModal show={this.props.showSuccessModal} 
                        modalHeaderText={'Menssagem Sucesso'} 
                        modalBodyText={'Reserva  salva com sucesso'}
                        okButtonText={'OK'} 
                        successClick={() => this.props.onCloseSuccessModal('/ListaReserva', { ...this.props })} />
                    
                    <ErrorModal show={this.props.showErrorModal} 
                            modalHeaderText={'Erro message'} 
                            modalBodyText={this.props.errorMessage}
                            okButtonText={'OK'} closeModal={() => this.props.onCloseErrorModal()} />
                </div>
            </Col>
         )
    }
}

const mapStateToProps = (state) => {
    return {
        showSuccessModal: state.repository.showSuccessModal,
        showErrorModal: state.errorHandler.showErrorModal,
        errorMessage: state.errorHandler.errorMessage
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        onCreateReserva: (url, reserva, props) => dispatch(repositoryActions.postData(url, reserva, props)),
        onCloseSuccessModal: (url, props) => dispatch(repositoryActions.closeSuccessModal(props, url)),
        onCloseErrorModal: () => dispatch(errorHandlerActions.closeErrorModal())
    }
}
	
export default connect(mapStateToProps, mapDispatchToProps)(CreateReserva);
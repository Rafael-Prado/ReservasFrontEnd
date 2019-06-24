import React, { Component } from 'react'
import { Form,Row, Button, FormGroup, Col } from 'react-bootstrap'
import { returnInputConfiguration } from '../../../Utility/InputConfiguration'
import * as repositoryActions from '../../../store/actions/repositoryActions'
import * as errorHandlerActions from '../../../store/actions/errorHandlerActions'
import SuccessModal from '../../../components/Modal/SuccessModal/SuccessModal';
import ErrorModal from '../../../components/Modal/ErrorModal/ErrorModal';
import { connect } from 'react-redux'
import moment from 'moment';
import * as formUtilityActions from '../../../Utility/FormUtility'
import Input from '../../../UI/Input/Input'
import Navigation from '../../Navigation/navigation'
 
class UpdateReserva extends Component {
    state = {
        reservaForm: {},
        isFormValid: true
    }
    componentDidMount = () => {
        const id = this.props.match.params.id;
        const url = 'v1/api/reservas/' + id;
        this.props.onGetReservaById(url, { ...this.props });
    }

    componentWillReceiveProps = (nextProps) => {
        const updatedReservaForm = { ...this.state.reservaForm };
        let ReservaIdObject= { ...updatedReservaForm.reservaId };
        let UsuarioIdObject = 1;
        let SalaIdObject = 1;
        let DataInicioObject = { ...updatedReservaForm.dataInicio };
        let DataFimObject = { ...updatedReservaForm.dataFim };
        let HoraInicioObject = { ...updatedReservaForm.horaInicio };
        let HoraFimObject = { ...updatedReservaForm.horaFim };
        let CaféObject = { ...updatedReservaForm.cafe };
        let QuantidadePessoaObject = { ...updatedReservaForm.quantidadePessoa };
     
        ReservaIdObject.value = nextProps.data.reservaId;
        ReservaIdObject.valid = true;
        DataInicioObject.value = moment(nextProps.data.dataInicio);
        DataInicioObject.valid = true;
        DataFimObject.value = moment(nextProps.data.dataFim);
        DataFimObject.valid = true;
        HoraInicioObject.value = moment(nextProps.data.horaInicio);
        HoraInicioObject.valid = true;
        HoraFimObject.value = moment(nextProps.data.horaFim);
        HoraFimObject.valid = true;
        CaféObject.value = nextProps.data.cafe;
        CaféObject.valid = true;
        QuantidadePessoaObject.value = nextProps.data.quantidadePessoa;
        QuantidadePessoaObject.valid = true;
     
        updatedReservaForm['reservaId'] = ReservaIdObject;
        updatedReservaForm['usuarioId'] = UsuarioIdObject;
        updatedReservaForm['salaId'] = SalaIdObject;
        updatedReservaForm['dataInicio'] = DataInicioObject;
        updatedReservaForm['dataFim'] = DataFimObject;
        updatedReservaForm['horaInicio'] = HoraInicioObject;
        updatedReservaForm['horaFim'] = HoraFimObject;
        updatedReservaForm['cafe'] = CaféObject;
        updatedReservaForm['quantidadePessoa'] = QuantidadePessoaObject;
        this.setState({ reservaForm: updatedReservaForm });
    }
 
    componentWillMount = () => {
        this.setState({ reservaForm: returnInputConfiguration() });
    }

    redirectToReservaList = () => {
        this.props.history.push('/listareserva');
    }

    handleChangeEvent = (event, id) => {
        const updatedReservaForm = { ...this.state.reservaForm };
        updatedReservaForm[id] = formUtilityActions.executeValidationAndReturnFormElement(event, updatedReservaForm, id);
     
        const counter = formUtilityActions.countInvalidElements(updatedReservaForm);
     
        this.setState({ reservaForm: updatedReservaForm, isFormValid: counter === 0 })
    }
 
    render() { 
        const formElementsArray = formUtilityActions.convertStateToArrayOfFormObjects({ ...this.state.reservaForm });

        return (  
            <Col md ={12}>
                <Row>
                <Navigation/>
                </Row>
                <br/>
             <Form horizontal onSubmit={this.updateReserva}>
                {
                formElementsArray.map(element => {
                    return <Input key={element.id} elementType={element.config.element} 
                        id={element.id} label={element.config.label}
                        type={element.config.type} value={element.config.value} 
                        changed={(event) => this.handleChangeEvent(event, element.id)}
                        errorMessage={element.config.errorMessage} invalid={!element.config.valid} 
                        shouldValidate={element.config.validation}
                        touched={element.config.touched} 
                        blur={(event) => this.handleChangeEvent(event, element.id)} />
                })
                }
                <br />
                 <FormGroup>
                    <Row md ={6}>
                        <Col md={1}>
                            <Button type='submit' bsStyle='info' disabled={!this.state.isFormValid}>Update</Button>
                        </Col>
                        <Col md={1}>
                            <Button bsStyle='danger' onClick={this.redirectToReservaList}>Cancelar</Button>
                        </Col>
                    </Row>
                </FormGroup>
            </Form>
                <SuccessModal show={this.props.showSuccessModal} modalHeaderText={'Success message'} 
                    modalBodyText={'Alterado com sucesso'}
                    okButtonText={'OK'} 
                    successClick={() => this.props.onCloseSuccessModal('/owner-List', { ...this.props })} />
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
        onUpdateReserva: (url, owner, props) => dispatch(repositoryActions.putData(url, owner, props)),
        onCloseSuccessModal: (url, props) => dispatch(repositoryActions.closeSuccessModal(props, url)),
        onCloseErrorModal: () => dispatch(errorHandlerActions.closeErrorModal())
    }
}

	
export default connect(mapStateToProps, mapDispatchToProps)(UpdateReserva);
import React, {Component} from 'react'
import { connect } from 'react-redux'
import * as repositoryActions from '../../store/actions/repositoryActions'
import {Row, Table} from 'react-bootstrap'
import Navigation from '../Navigation/navigation'
import Reservas from '../../reservas/reservas'

class ListaReserva extends Component {   
    
    componentDidMount = () => {
        let url = '/v1/api/reservas';
        this.props.onGetData(url, { ...this.props })
    }


    render(){

        let Listreservas = []
        if (this.props.data && this.props.data.length > 0) {
            Listreservas = this.props.data.map((reserva) => {
                return (
                    <Reservas key={reserva.reservaId} reserva={reserva} {...this.props}/>
                )
            })
        }

        return(
            <div>
                <Row>
                <Navigation/>
                </Row>
                <br/>
                <Table responsive  striped bordered hover>
                    <thead>
                        <tr>
                            <th>Filial</th>
                            <th>Sala</th>
                            <th>Dia</th>
                            <th>Hora Início/Hora Fim</th>
                            <th>Responsavel</th>
                            <th>Açoes</th>
                        </tr>
                    </thead>
                    <tbody>
                        {Listreservas}
                    </tbody>
                </Table>               
            </div>
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
export default connect(mapStateToProps, mapDispatchToProps)(ListaReserva);
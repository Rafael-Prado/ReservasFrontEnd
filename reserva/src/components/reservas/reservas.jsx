import React from 'react';
import moment from 'moment'
import {Button}  from 'react-bootstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { library } from '@fortawesome/fontawesome-svg-core'
import { fas } from '@fortawesome/free-solid-svg-icons'
import'./reserva.css'

library.add(fas)

const redirectToOwnerDetails = (id, history) => {
    history.push('/reservaDetails/' + id);
}
 
const redirectToUpdateOwner = (id, history) => {
    history.push('/updateReserva/' + id);
}
 
const rediterctToDeleteOwner = (id, history) => {
    
    history.push('/deleteReserva/' + id);
}

const reservas = (props) => {    

    return(         
            <tr>
            <td>{props.reserva.filial}</td>
            <td>{props.reserva.nomeSala}</td>
            <td>{moment(props.reserva.dataInicio).format('DD/MM/YYYY')}</td>
            <td>{moment(props.reserva.horaInicio).format('HH:mm')} até {moment(props.reserva.horaFim).format('HH:mm')}</td>
            <td>{props.reserva.nomeUsuario}</td>
            <td >                         
                <Button  className="btnTable"  variant="success"  size="sm"
                onClick={() => redirectToOwnerDetails(props.reserva.reservaId, props.history)}
                ><FontAwesomeIcon icon="check"/></Button>
                <Button  className="btnTable"  variant="primary"  size="sm"                
                onClick={() => redirectToUpdateOwner(props.reserva.reservaId, props.history)}
                ><FontAwesomeIcon icon="edit" /></Button>
                <Button  className="btnTable" variant="danger"  size="sm"
                onClick={() => rediterctToDeleteOwner(props.reserva.reservaId, props.history)}
                ><FontAwesomeIcon icon="trash-alt" /></Button>                                     
            </td>
            </tr> 
    )
}

export default reservas
import React from 'react';
import { Modal, Button } from 'react-bootstrap';
import '../ModalStyles.css';
 
const successModal = (props) => {
    return (
        <div>
            <Modal show={props.show} backdrop='static'>
                <Modal.Header>
                    {props.modalHeaderText}
                </Modal.Header>
                <Modal.Body>
                    <p>{props.modalBodyText}</p>
                </Modal.Body>
                <Modal.Footer>
                    <Button bg="success" onClick={props.successClick}>{props.okButtonText}</Button>
                </Modal.Footer>
            </Modal>
        </div>
    )
}
 
export default successModal;
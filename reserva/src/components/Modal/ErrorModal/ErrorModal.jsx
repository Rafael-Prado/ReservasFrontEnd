import React from 'react';
import { Modal, Button } from 'react-bootstrap';
import '../ModalStyles.css';
 
const errorModal = (props) => {
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
                    <Button bsStyle="danger" onClick={props.closeModal}>{props.okButtonText}</Button>
                </Modal.Footer>
            </Modal>
        </div>
    )
}
 
export default errorModal;

import React from 'react';
import { FormGroup, Col, FormControl, FormLabel, Row } from 'react-bootstrap';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import './Input.css';
 
const input = (props) => {
    let inputField = null;
    let errorMessage = null;
 
    if(props.invalid && props.shouldValidate && props.touched){
        errorMessage = (<em>{props.errorMessage}</em>);
    }

switch (props.elementType) {
    case 'input':
        inputField = (
            <FormGroup controlId={props.id}>                
                <Col componentClass={FormLabel} sm={2}>
                    {props.label}
                </Col>
                <Col sm={6}>
                    <FormControl type={props.type} value={props.value} onChange={props.changed} onBlur={props.blur} />
                </Col>
                <Col>
                    <em>{errorMessage}</em>
                </Col>               
            </FormGroup>
        )
        break;
    default: inputField = null;
}
    
    return (
        <div>
            {inputField}
        </div>
    )
}
 
export default input;
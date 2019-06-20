import React from 'react'
import { Row, Col, Table } from 'react-bootstrap';
import Moment from 'react-moment';

const reservasAccounts = (props) => {

    let accounts = null;
    if (props.accounts) {
        accounts = props.accounts.map(account => {
            return (
                <tr key={account.id}>
                    <td>{account.accountType}</td>
                    <td><Moment format="DD/MM/YYYY">{account.dataInicio}</Moment></td>
                </tr>
            );
        })
    }
    return (
        <Row>
            <Col md={12}>
                <Table responsive striped>
                    <thead>
                        <tr>
                            <th>Responsável</th>
                            <th>Data Final</th>
                        </tr>
                    </thead>
                    <tbody>
                        {accounts}
                    </tbody>
                </Table>
            </Col>
        </Row>
    )
}
 
export default reservasAccounts;
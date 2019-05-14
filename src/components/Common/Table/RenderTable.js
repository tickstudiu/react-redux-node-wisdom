import React from 'react';
import { Table, Button, Modal, ModalBody, ModalHeader, ModalFooter } from 'reactstrap';
import {RenderTableText} from './text/RenderTableText';
import * as tools from '../../../utils';

export default class RenderTable extends React.Component {
    state = {
        modal: false,
        deleteAt: 0,
    };

    modelOPen = (id) => {
        this.setState({
            modal: true,
            deleteAt: id,
        });
    };

    modelClose = () => {
        this.setState({
            modal: false,
        });
    };

    handleSubmit = () => {
        this.setState({
            modal: false,
        });
        this.props.handleDelete(this.state.deleteAt)
    };

    render() {
        const staticText = tools.checkLanguage(RenderTableText);
        return (
            <Table>
                <thead>
                <tr>
                    <th>#</th>
                    <th>{staticText.title}</th>
                    <th>{staticText.description}</th>
                    <th>{staticText.option}</th>
                </tr>
                </thead>
                <tbody>
                {
                    this.props.data.length > 0 ?
                        this.props.herb ?
                            this.props.data.map((data, index) => {
                                return (
                                    <tr key={index}>
                                        <th scope="row">{data.herbID}</th>
                                        <td>{data.title}</td>
                                        <td>{data.description}</td>
                                        <td><Button color="danger" size="sm" onClick={() => this.modelOPen(data.herbID)}>{staticText.btnDel}</Button></td>
                                    </tr>
                                )
                            })
                            :
                            this.props.drug ?
                                this.props.data.map((data, index) => {
                                    return (
                                        <tr key={index}>
                                            <th scope="row">{data.drugID}</th>
                                            <td>{data.title}</td>
                                            <td>{data.description}</td>
                                            <td><Button color="danger" size="sm" onClick={() => this.modelOPen(data.drugID)}>{staticText.btnDel}</Button></td>
                                        </tr>
                                    )
                                })
                                :
                                this.props.data.map((data, index) => {
                                    return (
                                        <tr key={index}>
                                            <th scope="row">{data.eventID}</th>
                                            <td>{data.title}</td>
                                            <td>{data.description}</td>
                                            <td><Button color="danger" size="sm" onClick={() => this.modelOPen(data.eventID)}>{staticText.btnDel}</Button></td>
                                        </tr>
                                    )
                                })
                        :
                        <tr>
                            {staticText.noData}
                        </tr>
                }
                <Modal isOpen={this.state.modal} toggle={this.modelClose} className={this.props.className} centered>
                    <ModalHeader toggle={this.toggle}>{staticText.modelHeader + " " +this.state.deleteAt}</ModalHeader>
                    <ModalBody>
                        {staticText.modelBody}
                    </ModalBody>
                    <ModalFooter>
                        <Button color="primary" onClick={() => this.handleSubmit()}>{staticText.confirm}</Button>{' '}
                        <Button color="secondary" onClick={this.modelClose}>{staticText.cancel}</Button>
                    </ModalFooter>
                </Modal>
                </tbody>
            </Table>
        );
    }
}
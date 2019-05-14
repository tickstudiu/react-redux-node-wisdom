import React, {Component} from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter, Card, CardImg } from 'reactstrap';
import {RootUrl} from '../../../config';
import emptyImage from '../../../assets/image/image600x400.png'

export default class ModelImage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            modal: false
        };

        this.toggle = this.toggle.bind(this);
    }

    toggle() {
        this.setState(prevState => ({
            modal: !prevState.modal
        }));
    }

    render() {
        if(this.props.profile){
            return (
                <div>
                    <Card className="border-0" style={{overflow: 'hidden', maxHeight: '200px'}} onClick={this.toggle} className="mb-2">
                        <CardImg width="100%" src={this.props.image ? `${this.props.image}`:emptyImage} alt={this.props.alt} />
                    </Card>
                    <Modal isOpen={this.state.modal} toggle={this.toggle} centered>
                        <ModalBody>
                            <img width="100%" src={this.props.image ? `${this.props.image}`:emptyImage} alt={this.props.alt} />
                        </ModalBody>
                    </Modal>
                </div>
            );
        }
        return (
            <div>
                <Card className="border-0" style={{overflow: 'hidden', maxHeight: '200px'}} onClick={this.toggle} className="mb-2">
                    <CardImg width="100%" src={this.props.image ? `${RootUrl}/${this.props.image}`:emptyImage} alt={this.props.alt} />
                </Card>
                <Modal isOpen={this.state.modal} toggle={this.toggle} centered>
                    <ModalBody>
                        <img width="100%" src={this.props.image ? `${RootUrl}/${this.props.image}`:emptyImage} alt={this.props.alt} />
                    </ModalBody>
                </Modal>
            </div>
        );
    }
}
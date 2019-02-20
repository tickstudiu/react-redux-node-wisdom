import React from 'react';
import {FooterText} from  './text/Footer.text';
import * as tools from '../../../utils';
import {Container, Row, Col, ListGroup, ListGroupItem} from 'reactstrap';

export default class Footer extends React.Component {
    constructor(props) {
        super(props);
        this.state = {}
    }

    render() {
        const staticText = tools.checkLanguage(FooterText);
        return (
            <div className="text-muted bg-light py-5">
                <Container>
                    <Row className="mb-5">
                        <Col lg={3} md={12} sm={12}>
                            <h6 className="text-uppercase header-list">about</h6>
                            <p>A small river named Duden flows by their place and supplies it with the necessary regelialia.</p>
                        </Col>
                        <Col lg={3} md={4} sm={12}>
                            <h6 className="text-uppercase header-list">LEARN MORE</h6>
                            <ListGroup className="m-sm-2">
                                <ListGroupItem tag="a" href="#" className="text-dark px-0 p-1 border-0 bg-transparent">How it works?</ListGroupItem>
                                <ListGroupItem tag="a" href="#" className="text-dark px-0 p-1 border-0 bg-transparent">Useful Tools</ListGroupItem>
                                <ListGroupItem tag="a" href="#" className="text-dark px-0 p-1 border-0 bg-transparent">Pricing</ListGroupItem>
                                <ListGroupItem tag="a" href="#" className="text-dark px-0 p-1 border-0 bg-transparent">Sitemap</ListGroupItem>
                            </ListGroup>
                        </Col>
                        <Col lg={3} md={4} sm={12}>
                            <h6 className="text-uppercase header-list">SUPPORT</h6>
                            <ListGroup className="m-sm-2">
                                <ListGroupItem tag="a" href="#" className="text-dark px-0 p-1 border-0 bg-transparent">FAQ</ListGroupItem>
                                <ListGroupItem tag="a" href="#" className="text-dark px-0 p-1 border-0 bg-transparent">Contact Us</ListGroupItem>
                                <ListGroupItem tag="a" href="#" className="text-dark px-0 p-1 border-0 bg-transparent">Help Desk
                                </ListGroupItem>
                                <ListGroupItem tag="a" href="#" className="text-dark px-0 p-1 border-0 bg-transparent">Knowledgebase
                                </ListGroupItem>
                            </ListGroup>
                        </Col>
                        <Col lg={3} md={4} sm={12}>
                            <h6 className="text-uppercase header-list">ABOUT US</h6>
                            <ListGroup className="m-sm-2">
                                <ListGroupItem tag="a" href="#" className="text-dark px-0 p-1 border-0 bg-transparent">Dapibus ac facilisis in</ListGroupItem>
                                <ListGroupItem tag="a" href="#" className="text-dark px-0 p-1 border-0 bg-transparent">Morbi leo risus</ListGroupItem>
                                <ListGroupItem tag="a" href="#" className="text-dark px-0 p-1 border-0 bg-transparent">Porta ac consectetur ac</ListGroupItem>
                            </ListGroup>
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            <p className="text-capitalize">Copyright ©2019 All rights reserved | This template is made with  by <a
                                href="#">Colorlib</a></p>
                        </Col>
                    </Row>
                </Container>
            </div>
        );
    }
}

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
        const {herbsRoute, aboutUsRoute} = this.props;
        const staticText = tools.checkLanguage(FooterText);
        return (
            <div className="text-muted bg-light py-5">
                <Container>
                    <Row className="mb-5">
                        <Col lg={3} md={12} sm={12}>
                            <h6 className="text-uppercase header-list">{staticText.about}</h6>
                            <p>{staticText.description}</p>
                        </Col>
                        <Col lg={3} md={4} sm={12}>
                            <h6 className="text-uppercase header-list">{staticText.learnMore}</h6>
                            <ListGroup className="m-sm-2">
                                <ListGroupItem tag="a" href="#" className="text-dark px-0 p-1 border-0 bg-transparent" onClick={herbsRoute}>{staticText.search}</ListGroupItem>
                                <ListGroupItem tag="a" href="#" className="text-dark px-0 p-1 border-0 bg-transparent" onClick={herbsRoute}>{staticText.herbs}</ListGroupItem>
                                <ListGroupItem tag="a" href="#" className="text-dark px-0 p-1 border-0 bg-transparent" onClick={herbsRoute}>{staticText.symptoms}</ListGroupItem>
                            </ListGroup>
                        </Col>
                        <Col lg={3} md={4} sm={12}>
                            <h6 className="text-uppercase header-list">{staticText.service}</h6>
                            <ListGroup className="m-sm-2">
                                <ListGroupItem tag="a" href="#" className="text-dark px-0 p-1 border-0 bg-transparent">{staticText.query}</ListGroupItem>
                                <ListGroupItem tag="a" href="#" className="text-dark px-0 p-1 border-0 bg-transparent">{staticText.articles}</ListGroupItem>
                            </ListGroup>
                        </Col>
                        <Col lg={3} md={4} sm={12}>
                            <h6 className="text-uppercase header-list">{staticText.aboutUs}</h6>
                            <ListGroup className="m-sm-2">
                                <ListGroupItem tag="a" href="#" className="text-dark px-0 p-1 border-0 bg-transparent" onClick={aboutUsRoute}>{staticText.contact}</ListGroupItem>
                                <ListGroupItem tag="a" href="#" className="text-dark px-0 p-1 border-0 bg-transparent" onClick={aboutUsRoute}>{staticText.question}</ListGroupItem>
                                <ListGroupItem tag="a" href="#" className="text-dark px-0 p-1 border-0 bg-transparent" onClick={aboutUsRoute}>{staticText.address}</ListGroupItem>
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

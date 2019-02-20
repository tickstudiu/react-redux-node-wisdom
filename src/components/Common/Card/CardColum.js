import React from 'react';
import { Card, CardTitle, CardText, Row, Col, CardBody } from 'reactstrap';
import {library} from '@fortawesome/fontawesome-svg-core';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faEnvelope} from '@fortawesome/free-solid-svg-icons';
import {CardColumText} from  './text/CardColum.text';
import * as tools from '../../../utils';

library.add(faEnvelope);

export default class CardColum extends React.Component{
    render(){
        const staticText = tools.checkLanguage(CardColumText);
        return (
            <Row className="shadow rounded-0 mb-3 bg-white">
                <Col lg={4} md={12}>
                    <Card className="border-0">
                        <CardBody>
                            <CardTitle className="mb-3 display-1 text-muted"><FontAwesomeIcon icon="envelope"/></CardTitle>
                            <CardTitle className="mb-3">Intuitive Thinking</CardTitle>
                            <CardText className="text-muted">A small river named Duden flows by their place and supplies it with the necessary regelialia.</CardText>
                        </CardBody>
                    </Card>
                </Col>
                <Col lg={4} md={12}>
                    <Card className="border-0">
                        <CardBody>
                            <CardTitle className="mb-3 display-1 text-muted"><FontAwesomeIcon icon="envelope"/></CardTitle>
                            <CardTitle className="mb-3">Intuitive Thinking</CardTitle>
                            <CardText className="text-muted">A small river named Duden flows by their place and supplies it with the necessary regelialia.</CardText>
                        </CardBody>
                    </Card>
                </Col>
                <Col lg={4} md={12}>
                    <Card className="border-0">
                        <CardBody>
                            <CardTitle className="mb-3 display-1 text-muted"><FontAwesomeIcon icon="envelope"/></CardTitle>
                            <CardTitle className="mb-3">Intuitive Thinking</CardTitle>
                            <CardText className="text-muted">A small river named Duden flows by their place and supplies it with the necessary regelialia.</CardText>
                        </CardBody>
                    </Card>
                </Col>
            </Row>
        );
    }
};
import React from 'react';
import { Card, CardTitle, CardText, Row, Col, CardBody } from 'reactstrap';
import {library} from '@fortawesome/fontawesome-svg-core';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faHeart, faUserGraduate, faSeedling} from '@fortawesome/free-solid-svg-icons';
import {CardColumText} from  './text/CardColum.text';
import * as tools from '../../../utils';

library.add(faHeart, faUserGraduate, faSeedling);

export default class CardColum extends React.Component{
    render(){
        const staticText = tools.checkLanguage(CardColumText);
        return (
            <Row className="shadow rounded-0 mb-3 bg-white">
                <Col lg={4} md={12}>
                    <Card className="border-0">
                        <CardBody>
                            <CardTitle className="mb-3 display-1 text-muted"><FontAwesomeIcon icon="seedling"/></CardTitle>
                            <CardTitle className="mb-3">{staticText.firstTitle}</CardTitle>
                            <CardText className="text-muted">{staticText.firstDescription}</CardText>
                        </CardBody>
                    </Card>
                </Col>
                <Col lg={4} md={12}>
                    <Card className="border-0">
                        <CardBody>
                            <CardTitle className="mb-3 display-1 text-muted"><FontAwesomeIcon icon="heart"/></CardTitle>
                            <CardTitle className="mb-3">{staticText.secondaryTitle}</CardTitle>
                            <CardText className="text-muted">{staticText.secondaryDescription}</CardText>
                        </CardBody>
                    </Card>
                </Col>
                <Col lg={4} md={12}>
                    <Card className="border-0">
                        <CardBody>
                            <CardTitle className="mb-3 display-1 text-muted"><FontAwesomeIcon icon="user-graduate"/></CardTitle>
                            <CardTitle className="mb-3">{staticText.thirdTitle}</CardTitle>
                            <CardText className="text-muted">{staticText.thirdDescription}</CardText>
                        </CardBody>
                    </Card>
                </Col>
            </Row>
        );
    }
};
import React from 'react';
import {Jumbotron, Row, Col} from 'reactstrap';
import {JumbotronTwoSectionText} from './text/JumbotronTwoSection.text';
import * as tools from '../../../utils';

export default class JumbotronTwoSection extends React.Component {
    render() {
        const staticText = tools.checkLanguage(JumbotronTwoSectionText);
        return (
            <div>
                <Jumbotron className="bg-transparent">
                    <h1 className="display-4 mb-5 text-center">{staticText.title}</h1>
                    <Row>
                        <Col lg={6} md={6} sm={12}>
                            <h5 className="text-muted font-weight-light">{staticText.firstDescription}</h5>
                        </Col>
                        <Col lg={6} md={6} sm={12}>
                            <p className="text-muted">{staticText.secondaryDescription}</p>
                        </Col>
                    </Row>
                </Jumbotron>
            </div>
        );
    }
};
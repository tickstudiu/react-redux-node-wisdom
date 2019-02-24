import React from 'react';
import {Jumbotron, Row, Col} from 'reactstrap';
import {JumbotronDescriptionCreateText} from './text/JumbotronDescriptionCreate.text';
import * as tools from '../../../utils';

export default class JumbotronDescriptionCreate extends React.Component {
    render() {
        const staticText = tools.checkLanguage(JumbotronDescriptionCreateText);
        return (
            <div>
                <Jumbotron className="bg-transparent">
                    <Row>
                        <Col lg={6} md={6} sm={12}>
                            <ul>
                                <li className="text-muted">{staticText.one}</li>
                                <li className="text-muted">{staticText.two}</li>
                            </ul>
                        </Col>
                        <Col lg={6} md={6} sm={12}>
                            <ul>
                                <li className="text-muted">{staticText.three}</li>
                                <li className="text-muted">{staticText.four}</li>
                            </ul>
                        </Col>
                    </Row>
                </Jumbotron>
            </div>
        );
    }
};
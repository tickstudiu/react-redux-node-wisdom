import React from 'react';
import {Jumbotron, Row, Col} from 'reactstrap';
import {JumbotronOnlyTextText} from  './text/JumbotronOnlyText.text';
import * as tools from '../../../utils';

export default class JumbotronOnlyText extends React.Component {
    render() {
        const staticText = tools.checkLanguage(JumbotronOnlyTextText);
        return (
            <div>
                <Jumbotron className="bg-transparent text-center">
                    <h1 className="display-2 mb-3">“</h1>
                    <Row>
                        <Col lg={{size: 8, offset: 2}} md={{size: 10, offset: 1}} sm={12}>
                            <p className="text-comment">{staticText.text}</p>
                        </Col>
                    </Row>
                </Jumbotron>
            </div>
        );
    }
};
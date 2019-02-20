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
                            <p className="text-comment">When she reached the first hills of the Italic Mountains, she had a last view back on the skyline
                                of her hometown Bookmarksgrove, the headline of Alphabet Village and the subline of her own
                                road, the Line Lane. Pityful a rethoric question ran over her cheek, then she continued her
                                way.</p>
                        </Col>
                    </Row>
                </Jumbotron>
            </div>
        );
    }
};
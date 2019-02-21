import React from 'react';
import {Jumbotron, Row, Col} from 'reactstrap';
import {JumbotronTwoSectionText} from './text/JumbotronTwoSection.text';
import * as tools from '../../../utils';

export default class JumbotronDescriptionCreate extends React.Component {
    render() {
        const staticText = tools.checkLanguage(JumbotronTwoSectionText);
        return (
            <div>
                <Jumbotron className="bg-transparent">
                    <Row>
                        <Col lg={6} md={6} sm={12}>
                            <p className="text-muted">Far far away, behind the word mountains, far
                                from the countries
                                Vokalia and Consonantia, there live the blind texts. Separated they live in
                                Bookmarksgrove right at the coast of the Semantics, a large language ocean.</p>
                        </Col>
                        <Col lg={6} md={6} sm={12}>
                            <p className="text-muted">When she reached the first hills of the Italic Mountains, she had
                                a last view back on the skyline of her hometown Bookmarksgrove, the headline of Alphabet
                                Village and the subline of her own road, the Line Lane. Pityful a rethoric question ran
                                over her cheek, then she continued her way.</p>
                        </Col>
                    </Row>
                </Jumbotron>
            </div>
        );
    }
};
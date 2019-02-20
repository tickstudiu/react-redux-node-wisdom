import React from 'react';
import {Container, Jumbotron, Button} from 'reactstrap';
import {JumbotronHeaderText} from './text/JumbotronHeader.text';
import * as tools from '../../../utils';

export default class JumbotronHeader extends React.Component {
    render() {
        const staticText = tools.checkLanguage(JumbotronHeaderText);
        return (
            <div className="jumbotron-header">
                <Container>
                    <Jumbotron className="py-5 bg-transparent">
                        <h1 className="display-3 font-weight-bold">Hello, world!</h1>
                        <p className="text-muted jumbotron-header-body py-3">Far far away, behind the word mountains, far from the
                            countries Vokalia and Consonantia, there live the blind texts.</p>
                        <Button color="primary" className="text-uppercase rounded-0 px-4" size="lg" outline>read more</Button>
                    </Jumbotron>
                </Container>
            </div>
        );
    }
};
import React from 'react';
import {Container, Jumbotron} from 'reactstrap';
import {JumbotronHeaderAboutUsText} from './text/JumbotronHeaderAboutUs.text';
import * as tools from '../../../utils';

export default class JumbotronHeaderAboutUs extends React.Component {
    render() {
        const staticText = tools.checkLanguage(JumbotronHeaderAboutUsText);
        return (
            <div className="jumbotron-header-about-us d-none d-md-block">
                <Container className="h-100 d-flex align-items-center text-center">
                    <Jumbotron className="py-5 bg-transparent">
                        <h1 className="display-3 font-weight-bold">{staticText.title}</h1>
                        <section className="col-8 offset-2">
                            <hr/>
                            <p className="text-muted">{staticText.description}</p>
                        </section>
                    </Jumbotron>
                </Container>
            </div>
        );
    }
};

import React, {Component} from "react";
import {connect} from 'react-redux';
import * as tools from '../../utils';
import * as action from '../../redux/actions';
import {AboutUsText} from './abouteUs.text';
import {Container, Row, Col, Jumbotron} from 'reactstrap';
import {JumbotronHeaderAboutUs} from '../../components';

class aboutUs extends Component {

    render() {
        const staticText = tools.checkLanguage(AboutUsText);
        return (
            <div>
                <JumbotronHeaderAboutUs/>
                <Container>
                    <Jumbotron className="bg-transparent">
                        <Row>
                            <Col lg={4}>
                                <h1 className="text-capitalize display-4 font-weight-bold">about us</h1>
                                <small className="text-muted font-weight-bold">test</small>
                            </Col>
                            <Col lg={8}>
                                <p>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                                    incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
                                    exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure
                                    dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
                                    pariatur.</p>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
                                    ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                                    ullamco laboris nisi ut aliquip.</p>
                            </Col>
                        </Row>
                    </Jumbotron>

                    <Jumbotron className="bg-transparent pt-0 mb-0">
                        <Row>
                            <Col>
                                <section>
                                    <h1 className="text-capitalize display-4 font-weight-bold">about us</h1>
                                    <small className="text-muted font-weight-bold">test</small>
                                </section>
                            </Col>
                        </Row>
                        <Row>
                            <Col lg={4}>
                                test
                            </Col>
                            <Col lg={8}>
                                <p>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                                    incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
                                    exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure
                                    dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
                                    pariatur.</p>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
                                    ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                                    ullamco laboris nisi ut aliquip.</p>
                            </Col>
                        </Row>
                    </Jumbotron>
                </Container>
            </div>
        );
    }
}

const mapStateToProps = ({lang}) => {
    return {
        lang
    }
};

export default connect(mapStateToProps, action)(aboutUs);

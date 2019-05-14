import React, {Component} from "react";
import {connect} from 'react-redux';
import * as tools from '../../utils';
import * as action from '../../redux/actions';
import {AboutUsText} from './abouteUs.text';
import {Container, Row, Col, Jumbotron} from 'reactstrap';
import {JumbotronHeaderAboutUs, ModelImage} from '../../components';
import profileWanchalerm from '../../assets/image/profile_wanchalerm.jpg';

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
                                <h1 className="text-capitalize display-4 font-weight-bold">{staticText.aboutUs}</h1>
                                <small className="text-muted font-weight-bold">{staticText.aboutUsSub}</small>
                            </Col>
                            <Col lg={8}>
                                <p>{staticText.aboutUsP1}</p>
                                <p>{staticText.aboutUsP2}</p>
                            </Col>
                        </Row>
                    </Jumbotron>

                    <Jumbotron className="bg-transparent pt-0 mb-0">
                        <Row>
                            <Col>
                                <section>
                                    <h1 className="text-capitalize display-4 font-weight-bold">{staticText.contactUs}</h1>
                                    <small className="text-muted font-weight-bold">{staticText.contactUsSub}</small>
                                </section>
                            </Col>
                        </Row>
                        <Row>
                            <Col lg={4}>
                                <ModelImage image={profileWanchalerm} alt="wanchalerm suksawat" profile/>
                            </Col>
                            <Col lg={8}>
                                <p>{staticText.contactUsP1}</p>
                                <p>Facebook : facebook.com/sliple.ness<br/>Gmail : tickstudiu@gmail.com</p>
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

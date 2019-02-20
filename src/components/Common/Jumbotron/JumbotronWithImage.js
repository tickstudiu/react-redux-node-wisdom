import React from 'react';
import {Jumbotron, Row, Col} from 'reactstrap';

export default class JumbotronWithImage extends React.Component {
    render() {
        const {title, body, image, alt} = this.props;
        if (this.props.left){
            return (
                <Jumbotron className="bg-transparent">
                    <Row>
                        <Col lg={8} md={8} sm={12} className="d-none d-md-block">
                            <img src={image} alt={alt} className="img-fluid"/>
                        </Col>
                        <Col lg={4} md={4} sm={12} className="text-center">
                            <div className="d-flex justify-content-center align-items-center h-100">
                                <section className="px-3">
                                    <h5 className="text-muted font-weight-light">{title}</h5>
                                    <p>{body}</p>
                                </section>
                            </div>
                        </Col>
                    </Row>
                </Jumbotron>
            );
        }
        if (this.props.right){
            return (
                <Jumbotron className="bg-transparent">
                    <Row>
                        <Col lg={4} md={4} sm={12} className="text-center">
                            <div className="d-flex justify-content-center align-items-center h-100">
                                <section className="px-3">
                                    <h5 className="text-muted font-weight-light">{title}</h5>
                                    <p>{body}</p>
                                </section>
                            </div>
                        </Col>
                        <Col lg={8} md={8} sm={12} className="d-none d-md-block">
                            <img src={image} alt={alt} className="img-fluid"/>
                        </Col>
                    </Row>
                </Jumbotron>
            );
        }

        return (
            <Jumbotron className="bg-transparent">
                <Row>
                    <Col lg={8} md={8} sm={12} className="d-none d-md-block">
                        <img src={image} alt={alt} className="img-fluid"/>
                    </Col>
                    <Col lg={4} md={4} sm={12} className="text-center">
                        <div className="d-flex justify-content-center align-items-center h-100">
                            <section  className="px-3">
                                <h5 className="text-muted font-weight-light">{title}</h5>
                                <p>{body}</p>
                            </section>
                        </div>
                    </Col>
                </Row>
            </Jumbotron>
        );
    }
};
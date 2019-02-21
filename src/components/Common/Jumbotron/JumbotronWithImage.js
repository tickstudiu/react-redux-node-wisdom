import React from 'react';
import {Jumbotron, Row, Col} from 'reactstrap';
import emptyImage from '../../../assets/image/image600x400.png'
import {RootUrl} from "../../../config";

export default class JumbotronWithImage extends React.Component {
    render() {
        const {title, description, image, alt, herbRouteById, id} = this.props;
        if (this.props.left){
            return (
                <Jumbotron className="bg-transparent">
                    <Row>
                        <Col lg={8} md={8} sm={12}>
                            <img src={image ? `${RootUrl}/${image}`: emptyImage} alt={alt} className="img-fluid cursor-pointer" onClick={() => herbRouteById(id)} />
                        </Col>
                        <Col lg={4} md={4} sm={12} className="text-center">
                            <div className="d-flex justify-content-center align-items-center h-100">
                                <section className="px-3">
                                    <h5 className="text-muted font-weight-light cursor-pointer" onClick={() => herbRouteById(id)}>{title}</h5>
                                    <p>{description}</p>
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
                                    <h5 className="text-muted font-weight-light cursor-pointer" onClick={() => herbRouteById(id)}>{title}</h5>
                                    <p>{description}</p>
                                </section>
                            </div>
                        </Col>
                        <Col lg={8} md={8} sm={12} className="d-none d-md-block">
                            <img src={image ? `${RootUrl}/${image}`: emptyImage} alt={alt} className="img-fluid cursor-pointer" onClick={() => herbRouteById(id)} />
                        </Col>
                    </Row>
                </Jumbotron>
            );
        }

        return (
            <Jumbotron className="bg-transparent">
                <Row>
                    <Col lg={8} md={8} sm={12} className="d-none d-md-block">
                        <img src={image ? `${RootUrl}/${image}`: emptyImage} alt={alt} className="img-fluid cursor-pointer" onClick={() => herbRouteById(id)} />
                    </Col>
                    <Col lg={4} md={4} sm={12} className="text-center">
                        <div className="d-flex justify-content-center align-items-center h-100">
                            <section className="px-3">
                                <h5 className="text-muted font-weight-light cursor-pointer" onClick={() => herbRouteById(id)}>{title}</h5>
                                <p>{description}</p>
                            </section>
                        </div>
                    </Col>
                </Row>
            </Jumbotron>
        );
    }
};

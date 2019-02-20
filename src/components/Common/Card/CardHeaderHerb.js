import React from 'react';
import { Card, CardTitle, CardText, CardImg, CardImgOverlay } from 'reactstrap';
import emptyImage from '../../../assets/image/image600x400.png'

export default class CardHeaderHerb extends React.Component{
    render(){
        const {image, title} = this.props;
        return (
            <div>
                <Card inverse className="border-0 rounded-0">
                    <CardImg width="100%" src={image ? image: emptyImage} alt="Card image cap" style={{filter: 'brightness(90%)'}}/>
                    <CardImgOverlay>
                        <section className="d-flex justify-content-start align-items-end h-100">
                            <div>
                                <CardTitle className="text-white text-capitalize">{title}</CardTitle>
                                <CardText>
                                    <small className="text-muted">Last updated 3 mins ago</small>
                                </CardText>
                            </div>
                        </section>
                    </CardImgOverlay>
                </Card>
            </div>
        );
    }
};
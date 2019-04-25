import React from 'react';
import { Card, CardImgOverlay, CardTitle, CardText, CardImg } from 'reactstrap';
import emptyImage from '../../../assets/image/image600x400.png'

export default class CardHeader extends React.Component{
    render(){
        const {title, date, image} = this.props;
        return (
            <Card inverse>
                <CardImg width="100%" src={image ? image: emptyImage}  alt="Card image cap" />
                <CardImgOverlay className="d-flex align-items-end">
                    <section>
                        <CardTitle>{title}</CardTitle>
                        <CardText>
                            <small className="text-muted">{date}</small>
                        </CardText>
                    </section>
                </CardImgOverlay>
            </Card>
        );
    }
};
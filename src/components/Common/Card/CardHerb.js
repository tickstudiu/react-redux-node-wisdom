import React from 'react';
import { Card, CardImg, CardText, CardBody, CardTitle } from 'reactstrap';
import emptyImage from '../../../assets/image/image600x400.png'

export default class CardHerb extends React.Component{
    render(){
        const {title, body, image, herbRouteById,id} = this.props;
        return (
            <Card className="mb-3 cursor-pointer hover-shadow" onClick={() => herbRouteById(id)}>
                <CardImg top width="100%" src={image ? image: emptyImage} alt="Card image cap" />
                <CardBody>
                    <CardTitle className="text-overflow">{title}</CardTitle>
                    <CardText className="text-muted text-overflow">{body}</CardText>
                </CardBody>
            </Card>
        );
    }
};
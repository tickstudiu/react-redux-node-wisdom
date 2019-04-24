import React from 'react';
import { Card, CardImg, CardText, CardBody, CardTitle } from 'reactstrap';
import emptyImage from '../../../assets/image/image600x400.png'
import {RootUrl} from "../../../config";

export default class CardHerb extends React.Component{
    render(){
        const {title, body, image, herbRouteById,id} = this.props;
        return (
            <Card className="mb-3 cursor-pointer hover-shadow" onClick={() => herbRouteById(id)}>
                <CardImg top width="auto" height="175px" src={image ? `${RootUrl}/${image}`: emptyImage} alt="Card image cap" />
                <CardBody>
                    <CardTitle className="text-overflow">{title}</CardTitle>
                    <CardText className="text-muted text-overflow">{body}</CardText>
                </CardBody>
            </Card>
        );
    }
};
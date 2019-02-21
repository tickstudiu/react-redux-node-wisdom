import React from 'react';
import {library} from '@fortawesome/fontawesome-svg-core';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faEdit} from '@fortawesome/free-solid-svg-icons';
import { Card, CardTitle, CardImg, CardImgOverlay, Input } from 'reactstrap';
import emptyImage from '../../../assets/image/image600x400.png'

library.add(faEdit);

export default class CardHeaderHerb extends React.Component{
    render(){
        const { imagePreviewUrl, fileSelectHandler, image} = this.props;

        return (
            <Card inverse className="border-0 mb-2"
                  style={{overflow: 'hidden', maxHeight: '600px'}}>
                <CardImg width="100%" src={imagePreviewUrl ? imagePreviewUrl : image ? image:emptyImage}
                         alt="background image"/>
                <CardImgOverlay
                    className="d-flex justify-content-center align-items-center hover-2-show cursor-pointer"
                    style={{background: 'rgba(0,0,0,0.2)'}}
                    onClick={() => this.fileInput.click()}>
                    <Input className="d-none" type="file" onChange={fileSelectHandler}
                           innerRef={fileInput => this.fileInput = fileInput}/>
                    <CardTitle
                        className="text-white display-4"><FontAwesomeIcon
                        icon="edit"/></CardTitle>
                </CardImgOverlay>
            </Card>
        );
    }
};
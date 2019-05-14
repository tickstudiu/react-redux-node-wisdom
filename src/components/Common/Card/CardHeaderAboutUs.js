import React from 'react';
import {Card, CardImg, CardImgOverlay} from 'reactstrap';
import CardHeaderImg from '../../../assets/image/cardHeader.jpg';
import {CardHeaderAboutUsText} from './text/CardHeaderAboutUs.text';
import * as tools from "../../../utils";

export default class CardHeaderAboutUs extends React.Component {
    render() {
        const staticText = tools.checkLanguage(CardHeaderAboutUsText);
        return (
            <Card inverse className="border-0 rounded-0 d-none d-md-block">
                <CardImg width="100%"
                         src={CardHeaderImg}
                         alt="Card header image" className="rounded-0" style={{filter: 'brightness(70%)'}}/>
                <CardImgOverlay>
                    <section className="d-flex justify-content-center align-items-center h-100">
                        <div>
                            <h1 className="display-4 text-capitalize text-center">{staticText.text}</h1>
                        </div>
                    </section>
                </CardImgOverlay>
            </Card>
        );
    }
};

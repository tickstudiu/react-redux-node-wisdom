import React from 'react';
import {Card, CardImg, CardImgOverlay} from 'reactstrap';

export default class CardHeader extends React.Component {
    render() {
        return (
            <Card inverse className="border-0 rounded-0">
                <CardImg width="100%"
                         src="https://www.enermaxeu.com/wp-content/uploads/Products/Peripherals/Tankstand/Product/tankstand-bg-1170x366.jpg"
                         alt="Card header image" className="rounded-0" style={{filter: 'brightness(70%)'}}/>
                <CardImgOverlay>
                    <section className="d-flex justify-content-center align-items-center h-100">
                        <div>
                            <h1 className="display-4 text-capitalize text-center">All herbs we have</h1>
                        </div>
                    </section>
                </CardImgOverlay>
            </Card>
        );
    }
};
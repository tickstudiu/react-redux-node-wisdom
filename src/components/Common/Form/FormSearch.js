import React from 'react';
import { Button, Input, Row, Col } from 'reactstrap';
import {library} from '@fortawesome/fontawesome-svg-core';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faSearch} from '@fortawesome/free-solid-svg-icons';
import {FormSearchText} from './text/FormSearch.text';
import * as tools from "../../../utils";

library.add(faSearch);

export default class FormSearch extends React.Component {
    render() {
        const staticText = tools.checkLanguage(FormSearchText);
        const { handleChange } = this.props;
        return (
            <Row className="py-3">
                <Col lg={{size: 6, offset: 2}} md={10}>
                    <Input type="text" name="search"  placeholder={staticText.placeholder} onChange={handleChange}/>
                </Col>
                <Col lg={2} md={2}>
                    <Button color="primary" block outline><FontAwesomeIcon icon="search"/></Button>
                </Col>
            </Row>
        );
    }
}
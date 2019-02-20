import React, {Component} from "react";
import {connect} from 'react-redux';
import * as tools from '../../utils';
import * as action from '../../redux/actions';
import {AboutUsText} from './abouteUs.text';
import {Container} from 'reactstrap';
import {} from '../../components';

class aboutUs extends Component {

    render() {
        const staticText = tools.checkLanguage(AboutUsText);
        return (
            <Container>
                test
            </Container>
        );
    }
}

const mapStateToProps = ({lang}) => {
    return {
        lang
    }
};

export default connect(mapStateToProps, action)(aboutUs);

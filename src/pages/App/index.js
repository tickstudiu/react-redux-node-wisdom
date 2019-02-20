import React, {Component} from "react";
import {connect} from 'react-redux';
import * as tools from '../../utils';
import * as action from '../../redux/actions';
import {AppText} from './app.text';
import {Container} from 'reactstrap';
import {JumbotronOnlyText, JumbotronHeader, CardColum, JumbotronTwoSection, JumbotronWithImage} from '../../components';

class App extends Component {

    render() {
        const staticText = tools.checkLanguage(AppText);

        return (
            <div>
                <JumbotronHeader/>
                <Container>
                    <CardColum/>
                    <JumbotronTwoSection/>
                        <JumbotronWithImage title="title" body="body" image="http://s1.1zoom.me/b5050/567/Tulips_Pink_color_Gray_background_547101_3840x2400.jpg" alt/>
                        <JumbotronWithImage title="title" body="body" image="http://s1.1zoom.me/b5050/567/Tulips_Pink_color_Gray_background_547101_3840x2400.jpg" alt right/>
                    <JumbotronOnlyText/>
                </Container>
            </div>
        );
    }
}

const mapStateToProps = ({lang}) => {
    return {
        lang
    }
};

export default connect(mapStateToProps, action)(App);

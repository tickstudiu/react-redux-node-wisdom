import React, {Component} from "react";
import {connect} from 'react-redux';
import * as tools from '../../utils';
import * as action from '../../redux/actions';
import {AppText} from './app.text';
import {Container} from 'reactstrap';
import {
    JumbotronOnlyText,
    JumbotronHeader,
    CardColum,
    JumbotronTwoSection,
    JumbotronWithImage, Loader
} from '../../components';

class App extends Component {

    state = {
        first: true,
        loading: true,
    };

    herbRouteById = (id) => {
        this.props.history.push(`/herb/${id}`);
    };

    componentWillMount() {
        this.props.getHerbs(async () => {
            this.setState({loading: false});
        });
    }

    render() {
        const {herbRouteById} = this;
        const staticText = tools.checkLanguage(AppText);

        if(this.state.loading){
            return <Loader/>
        }

        return (
            <div>
                <JumbotronHeader/>
                <Container>
                    <CardColum/>
                    <JumbotronTwoSection/>
                    {
                        this.props.herbStore.allHerb.length > 0 ?
                            this.props.herbStore.allHerb.slice(0, 2).map((data, index) => {
                                return <JumbotronWithImage key={index}
                                                           title={data.title}
                                                           description={data.description}
                                                           image={data.path}
                                                           alt
                                                           herbRouteById={herbRouteById}
                                                           id={data.herbID}
                                                           right/>
                            })
                            :
                            <p>
                                {staticText.noData}
                            </p>
                    }
                    <JumbotronOnlyText/>
                </Container>
            </div>
        );
    }
}

const mapStateToProps = ({lang, herbStore}) => {
    return {
        lang, herbStore
    }
};

export default connect(mapStateToProps, action)(App);

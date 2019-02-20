import React, {Component} from "react";
import {connect} from 'react-redux';
import * as tools from '../../utils';
import * as action from '../../redux/actions';
import {HerbText} from './herb.text';
import {Container} from 'reactstrap';
import {Loader, CardHeaderHerb} from '../../components';

class herb extends Component {

    state = {
        loading: true,
        search: ''
    };

    componentWillMount() {
        this.props.getHerbById(async () => {
            await console.log(this.props.herbStore.herb);
            this.setState({loading: false});
        }, this.props.match.params.id);
    }

    render() {
        const staticText = tools.checkLanguage(HerbText);

        if(this.state.loading){
            return <Loader/>
        }

        return (
            <div>
                <Container>
                    <CardHeaderHerb image="https://images.unsplash.com/photo-1528796940112-4979b4a98424?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80" title={this.props.herbStore.herb.title}/>
                    <p className="text-capitalize mt-2 herb-text">
                        {
                            this.props.herbStore.herb.description ?
                                this.props.herbStore.herb.description
                                :
                                staticText.noDescription
                        }
                    </p>
                    <h5 className="text-capitalize">{staticText.benefit}</h5>
                    <hr/>
                    <p className="herb-text">
                        {
                            this.props.herbStore.herb.benefit ?
                                this.props.herbStore.herb.benefit
                                :
                                staticText.noBenefit
                        }
                    </p>
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

export default connect(mapStateToProps, action)(herb);

import React, {Component} from "react";
import {connect} from 'react-redux';
import * as tools from '../../utils';
import * as action from '../../redux/actions';
import {HerbText} from './herb.text';
import {Container} from 'reactstrap';
import {Loader, CardHeaderHerb} from '../../components';
import {RootUrl} from "../../config";
import emptyImage from "../../assets/image/image600x400.png";

class herb extends Component {

    state = {
        loading: true,
        search: '',
        path: null
    };

    componentWillMount() {
        this.props.getHerbById(async () => {
        }, this.props.match.params.id);

        this.props.getImages(async () => {
            await this.props.imageStore.images.map(img => {
                if (img.herbID === this.props.herbStore.herb.herbID){
                    this.setState({
                        path: img.path
                    })
                }
            });

            await this.setState({loading: false});
        });
    }

    render() {
        const staticText = tools.checkLanguage(HerbText);

        if(this.state.loading){
            return <Loader/>
        }

        return (
            <div>
                <Container>
                    <CardHeaderHerb image={this.state.path ? `${RootUrl}/${this.state.path}`: emptyImage} title={this.props.herbStore.herb.title}/>
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

const mapStateToProps = ({lang, herbStore, imageStore}) => {
    return {
        lang, herbStore, imageStore
    }
};

export default connect(mapStateToProps, action)(herb);

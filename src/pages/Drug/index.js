import React, {Component} from "react";
import {connect} from 'react-redux';
import * as tools from '../../utils';
import * as action from '../../redux/actions';
import {DrugText} from './drug.text';
import {Container} from 'reactstrap';
import {Loader, CardHeader} from '../../components';
import {RootUrl} from "../../config";
import emptyImage from "../../assets/image/image600x400.png";

class drug extends Component {

    state = {
        loading: true,
        search: '',
        path: null
    };

    componentWillMount() {
        this.props.getDrugById(async () => {
            this.setState({
                path: this.props.drugStore.drug.path
            })
        }, this.props.match.params.id);

        this.props.getIngredients(async () => {
            await this.setState({loading: false});
        });
    }

    render() {
        const staticText = tools.checkLanguage(DrugText);

        if(this.state.loading){
            return <Loader/>
        }

        return (
            <div>
                <Container>
                    <CardHeader image={this.state.path ? `${RootUrl}/${this.state.path}`: emptyImage}
                                    title={this.props.drugStore.drug.title}
                                    date={this.props.drugStore.drug.createdAt}/>
                    <p className="text-capitalize mt-2 herb-text">
                        {
                            this.props.drugStore.drug.description ?
                                this.props.drugStore.drug.description
                                :
                                staticText.noDescription
                        }
                    </p>
                    <h5 className="text-capitalize">{staticText.ingredient}</h5>
                    <hr/>
                    <p className="herb-text">
                        {
                            this.props.ingredientStore.allIngredient ?
                                this.props.ingredientStore.allIngredient.map(data => {
                                    if(data.drugID === this.props.match.params.id*1){
                                        return data.ingredient
                                    }
                                })
                                :
                                staticText.noIngredient
                        }
                    </p>
                </Container>
            </div>
        );
    }
}

const mapStateToProps = ({lang, drugStore, imageStore, ingredientStore}) => {
    return {
        lang, drugStore, imageStore, ingredientStore
    }
};

export default connect(mapStateToProps, action)(drug);

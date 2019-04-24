import React, {Component} from "react";
import {connect} from 'react-redux';
import * as tools from '../../utils';
import * as action from '../../redux/actions';
import {HerbText} from './herb.text';
import {Container, Row, Col} from 'reactstrap';
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

        this.props.getBenefits(async () => {
        });

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
                    <CardHeaderHerb image={this.state.path ? `${RootUrl}/${this.state.path}`: emptyImage}
                                    title={this.props.herbStore.herb.title} date={this.props.herbStore.herb.createdAt}/>
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
                            this.props.benefitStore.allBenefit ?
                                this.props.benefitStore.allBenefit.map((data, index) => {
                                    if(data.herbID === this.props.match.params.id*1){
                                        return (
                                            <Row key={index}>
                                                <Col lg={4} md={12}>
                                                    <h6 className="text-capitalize">{data.title}</h6>
                                                </Col>
                                                <Col lg={8} md={12}>
                                                    <p className="text-capitalize">{data.description}</p>
                                                </Col>
                                            </Row>
                                        )
                                    }
                                })
                                :
                                staticText.noBenefit
                        }
                    </p>
                </Container>
            </div>
        );
    }
}

const mapStateToProps = ({lang, herbStore, imageStore, benefitStore}) => {
    return {
        lang, herbStore, imageStore, benefitStore
    }
};

export default connect(mapStateToProps, action)(herb);

import React, {Component} from "react";
import {connect} from 'react-redux';
import * as tools from '../../utils';
import * as action from '../../redux/actions';
import {HerbsText} from './herbs.text';
import {Container, Row, Col} from 'reactstrap';
import {CardHeader, FormSearch, CardHerb, Loader} from '../../components';

class herbs extends Component {

    state = {
        loading: true,
        search: ''
    };

    handleChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value,
        })
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
        const {handleChange, herbRouteById} = this;
        const staticText = tools.checkLanguage(HerbsText);

        if(this.state.loading){
            return <Loader/>
        }

        return (
            <div>
                <CardHeader/>
                <Container>
                    <FormSearch handleChange={handleChange}/>
                    <Row>
                        {
                            this.props.herbStore.allHerb.length > 0 ?
                                this.props.herbStore.allHerb.slice(tools.limitUpperPage(this.props.match.params.page), tools.limitLowerPage(this.props.match.params.page)).map((data, index) => {
                                    return (
                                        <Col lg={3} md={4} sm={12} key={index}>
                                            <CardHerb title={data.title}
                                                      body={data.description}
                                                      image={data.path}
                                                      herbRouteById={herbRouteById}
                                                      id={data.herbID}/>
                                        </Col>
                                    )
                                })
                                :
                                <p>
                                    {staticText.noData}
                                </p>
                        }
                    </Row>
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

    export default connect(mapStateToProps, action)(herbs);

import React, {Component} from "react";
import {connect} from 'react-redux';
import * as tools from '../../utils';
import * as action from '../../redux/actions';
import {HerbsText} from './herbs.text';
import {Container, Row, Col} from 'reactstrap';
import {CardHeader, FormSearch, CardHerb, Loader, Pagination} from '../../components';

class herbs extends Component {

    state = {
        loading: true,
        search: ''
    };

    handleChange = (event) => {
        let name = event.target.name,
            value = event.target.value;

        this.setState({
            [name]: value
        });
    };

    herbRouteById = (id) => {
        this.props.history.push(`/herb/${id}`);
    };

    herbsPageRoute = (page) => {
        this.props.history.push(`/herbs/page/${page}`);
    };

    componentWillMount() {
        this.props.getHerbs(async () => {
            this.setState({loading: false});
        });
    }

    render() {
        const {handleChange, herbRouteById, herbsPageRoute} = this;
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
                                this.state.search ?
                                    this.props.herbStore.allHerb.map((data, index) => {
                                        if (data.title.match(this.state.search)){
                                            return (
                                                <Col lg={3} md={4} sm={12} key={index}>
                                                    <CardHerb title={data.title}
                                                              body={data.description}
                                                              image={data.path}
                                                              herbRouteById={herbRouteById}
                                                              id={data.herbID}/>
                                                </Col>
                                            )
                                        }
                                    })
                                    :
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
                    <section className="d-flex justify-content-center">
                        <Pagination number={this.props.herbStore.number} herbsPageRoute={herbsPageRoute} current={this.props.match.params.page}/>
                    </section>
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

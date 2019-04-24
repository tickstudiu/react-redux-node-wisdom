import React, {Component} from "react";
import {connect} from 'react-redux';
import * as tools from '../../utils';
import * as action from '../../redux/actions';
import {DrugsText} from './drugs.text';
import {Container, Row, Col} from 'reactstrap';
import {CardHeaderDrug, FormSearch, CardDrug, Loader, Pagination} from '../../components';

class drugs extends Component {

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

    drugRouteById = (id) => {
        this.props.history.push(`/drug/${id}`);
    };

    drugsPageRoute = (page) => {
        this.props.history.push(`/drugs/page/${page}`);
    };

    componentWillMount() {
        this.props.getDrugs(async () => {
            this.setState({loading: false});
        });
    }

    render() {
        const {handleChange, drugRouteById, drugsPageRoute} = this;
        const staticText = tools.checkLanguage(DrugsText);

        if(this.state.loading){
            return <Loader/>
        }

        return (
            <div>
                <CardHeaderDrug/>
                <Container>
                    <FormSearch handleChange={handleChange}/>
                    <Row>
                        {
                            this.props.drugStore.allDrug.length > 0 ?
                                this.state.search ?
                                    this.props.drugStore.allDrug.map((data, index) => {
                                        if (data.title.match(this.state.search)){
                                            return (
                                                <Col lg={3} md={4} sm={12} key={index}>
                                                    <CardDrug title={data.title}
                                                              body={data.description}
                                                              image={data.path}
                                                              drugRouteById={drugRouteById}
                                                              id={data.drugID}/>
                                                </Col>
                                            )
                                        }
                                    })
                                    :
                                    this.props.drugStore.allDrug.slice(tools.limitUpperPage(this.props.match.params.page), tools.limitLowerPage(this.props.match.params.page)).map((data, index) => {
                                        return (
                                            <Col lg={3} md={4} sm={12} key={index}>
                                                <CardDrug title={data.title}
                                                          body={data.description}
                                                          image={data.path}
                                                          drugRouteById={drugRouteById}
                                                          id={data.drugID}/>
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
                        <Pagination number={this.props.drugStore.number} herbsPageRoute={drugsPageRoute} current={this.props.match.params.page}/>
                    </section>
                </Container>
            </div>
        );
    }
}

const mapStateToProps = ({lang, drugStore}) => {
    return {
        lang, drugStore
    }
};

export default connect(mapStateToProps, action)(drugs);

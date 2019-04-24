import React, {Component} from "react";
import {connect} from 'react-redux';
import * as tools from '../../utils';
import * as action from '../../redux/actions';
import {ActivitiesText} from './activities.text';
import {Container, Row, Col} from 'reactstrap';
import {CardHeaderActivity, FormSearch, CardActivities, Loader, Pagination} from '../../components';

class activities extends Component {

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

    activityRouteById = (id) => {
        this.props.history.push(`/activity/${id}`);
    };

    activitiesPageRoute = (page) => {
        this.props.history.push(`/activities/page/${page}`);
    };

    componentWillMount() {
        this.props.getActivities(async () => {
            this.setState({loading: false});
        });
    }

    render() {
        const {handleChange, activityRouteById, activitiesPageRoute} = this;
        const staticText = tools.checkLanguage(ActivitiesText);

        if(this.state.loading){
            return <Loader/>
        }

        return (
            <div>
                <CardHeaderActivity/>
                <Container>
                    <FormSearch handleChange={handleChange}/>
                    <Row>
                        {
                            this.props.activityStore.allActivity.length > 0 ?
                                this.state.search ?
                                    this.props.activityStore.allActivity.map((data, index) => {
                                        if (data.title.match(this.state.search)){
                                            return (
                                                <Col lg={3} md={4} sm={12} key={index}>
                                                    <CardActivities title={data.title}
                                                                    body={data.description}
                                                                    image={data.path}
                                                                    activityRouteById={activityRouteById}
                                                                    id={data.eventID}/>
                                                </Col>
                                            )
                                        }
                                    })
                                    :
                                    this.props.activityStore.allActivity.slice(tools.limitUpperPage(this.props.match.params.page), tools.limitLowerPage(this.props.match.params.page)).map((data, index) => {
                                        return (
                                            <Col lg={3} md={4} sm={12} key={index}>
                                                <CardActivities title={data.title}
                                                                body={data.description}
                                                                image={data.path}
                                                                activityRouteById={activityRouteById}
                                                                id={data.eventID}/>
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
                        <Pagination number={this.props.activityStore.number} herbsPageRoute={activitiesPageRoute} current={this.props.match.params.page}/>
                    </section>
                </Container>
            </div>
        );
    }
}

const mapStateToProps = ({lang, activityStore}) => {
    return {
        lang, activityStore
    }
};

export default connect(mapStateToProps, action)(activities);

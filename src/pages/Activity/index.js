import React, {Component} from "react";
import {connect} from 'react-redux';
import * as tools from '../../utils';
import * as action from '../../redux/actions';
import {ActivityText} from './activity.text';
import {Container} from 'reactstrap';
import {Loader, CardHeader} from '../../components';
import {RootUrl} from "../../config";
import emptyImage from "../../assets/image/image600x400.png";

class activity extends Component {

    state = {
        loading: true,
        search: '',
        path: null
    };

    componentWillMount() {
        this.props.getActivityById(async () => {
            this.setState({
                path: this.props.activityStore.activity.path
            });
            await this.setState({loading: false});
        }, this.props.match.params.id);
    }

    render() {
        const staticText = tools.checkLanguage(ActivityText);

        if(this.state.loading){
            return <Loader/>
        }

        return (
            <div>
                <Container>
                    <CardHeader image={this.state.path ? `${RootUrl}/${this.state.path}`: emptyImage}
                                    title={this.props.activityStore.activity.title}
                                    date={this.props.activityStore.activity.createdAt}/>
                    <p className="text-capitalize mt-2 herb-text">
                        {
                            this.props.activityStore.activity.description ?
                                this.props.activityStore.activity.description
                                :
                                staticText.noDescription
                        }
                    </p>
                </Container>
            </div>
        );
    }
}

const mapStateToProps = ({lang, activityStore, imageStore}) => {
    return {
        lang, activityStore, imageStore
    }
};

export default connect(mapStateToProps, action)(activity);

import React, {Component} from "react";
import {connect} from 'react-redux';
import * as tools from '../../utils/index';
import * as action from '../../redux/actions/index';
import {DeleteText} from './delete.text';
import { Container, TabContent, TabPane, Nav, NavItem, NavLink} from 'reactstrap';
import {Loader, RenderTable} from '../../components/index';
import classnames from 'classnames';

class Delete extends Component {

    state = {
        loading: true,
        search: '',
        activeTab: '1'
    };

    toggle = (tab) => {
        if (this.state.activeTab !== tab) {
            this.setState({
                activeTab: tab
            });
        }
    };

    handleChange = (event) => {
        let name = event.target.name,
            value = event.target.value;

        this.setState({
            [name]: value
        });
    };

    handleDeleteHerb = (id) => {
        this.props.delHerb(async () => {
            this.props.getHerbs(async () => {
            });
        }, id);
    };

    handleDeleteDrug = (id) => {
        this.props.delDrug(async () => {
            this.props.getDrugs(async () => {
            });
        }, id);
    };

    handleDeleteActivity = (id) => {
        console.log(id);
        this.props.delActivity(async () => {
            this.props.getActivities(async () => {
            });
        }, id);
    };

    componentWillMount(){
        this.props.getDrugs(async () => {
        });

        this.props.getActivities(async () => {
        });

        this.props.getHerbs(async () => {
            this.setState({loading: false});
        });
    }

    render() {
        const {handleChange, handleDeleteHerb, handleDeleteDrug, handleDeleteActivity} = this;
        const staticText = tools.checkLanguage(DeleteText);
        if(this.state.loading){
            return <Loader/>
        }

        return (
            <div>
                <Container>
                    <Nav tabs>
                        <NavItem>
                            <NavLink
                                className={classnames({ active: this.state.activeTab === '1' })}
                                onClick={() => { this.toggle('1'); }}
                            >
                                {staticText.Herbs}
                            </NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink
                                className={classnames({ active: this.state.activeTab === '2' })}
                                onClick={() => { this.toggle('2'); }}
                            >
                                {staticText.Medicines}
                            </NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink
                                className={classnames({ active: this.state.activeTab === '3' })}
                                onClick={() => { this.toggle('3'); }}
                            >
                                {staticText.Activities}
                            </NavLink>
                        </NavItem>
                    </Nav>

                    <TabContent activeTab={this.state.activeTab}>
                        <TabPane tabId="1">
                            <RenderTable data={this.props.herbStore.allHerb} handleDelete={handleDeleteHerb} herb/>
                        </TabPane>
                        <TabPane tabId="2">
                            <RenderTable data={this.props.drugStore.allDrug} handleDelete={handleDeleteDrug} drug/>
                        </TabPane>
                        <TabPane tabId="3">
                            <RenderTable data={this.props.activityStore.allActivity} handleDelete={handleDeleteActivity} activity/>
                        </TabPane>
                    </TabContent>
                </Container>
            </div>
        );
    }
}

const mapStateToProps = ({lang, herbStore, drugStore, activityStore}) => {
    return {
        lang, herbStore, drugStore, activityStore
    }
};

export default connect(mapStateToProps, action)(Delete);

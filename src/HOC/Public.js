import React, {Component, Fragment} from "react";
import {connect} from "react-redux";

import 'react-toastify/dist/ReactToastify.css';
import {ToastContainer} from 'react-toastify';
import '../assets/myStyle.css';
import 'bootstrap/dist/css/bootstrap.css';
import * as tools from "../utils";
import * as actions from "../redux/actions";
import {Footer, Navbar} from "../components";

export const Public = ComposedComponent => {
    class Public extends Component {
        componentWillMount() {
            if (!tools.getLanguage()) {
                tools.setDefaultLanguage();
            }
        }

        handleChangeLang = (lang) => {
            this.props.changeLanguage(lang);
        };

        homeRoute = () => {
            this.props.history.push("/home");
        };

        herbsRoute = () => {
            this.props.history.push("/herbs");
        };

        aboutUsRoute = () => {
            this.props.history.push("/aboutUs");
        };

        activitiesRoute = () => {
            this.props.history.push("/activities");
        };

        drugsRoute = () => {
            this.props.history.push("/drugs");
        };

        render() {
            const lang = tools.getLanguage();
            const {handleChangeLang, homeRoute, herbsRoute, aboutUsRoute, activitiesRoute, drugsRoute} = this;
            return (
                <Fragment>
                    <Navbar handleChangeLang={handleChangeLang} lang={lang} path={this.props.match.path} activitiesRoute={activitiesRoute} drugsRoute={drugsRoute}
                            homeRoute={homeRoute} herbsRoute={herbsRoute} aboutUsRoute={aboutUsRoute}/>
                    <ComposedComponent {...this.props} />
                    <ToastContainer/>
                    <Footer herbsRoute={herbsRoute} aboutUsRoute={aboutUsRoute}/>
                </Fragment>
            );
        }
    }

    const mapStateToProps = ({lang}) => {
        return {
            lang
        };
    };

    return connect(mapStateToProps, actions)(Public);
};

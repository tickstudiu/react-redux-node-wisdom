import React from 'react';
import {
    Container,
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink
} from 'reactstrap';
import {NavbarText} from './text/Navbar.text';
import * as tools from '../../../utils';

export default class Example extends React.Component {
    constructor(props) {
        super(props);

        this.toggle = this.toggle.bind(this);
        this.state = {
            isOpen: false
        };
    }

    toggle() {
        this.setState({
            isOpen: !this.state.isOpen
        });
    }

    render() {
        const {path, homeRoute, herbsRoute, aboutUsRoute, drugsRoute, activitiesRoute, handleChangeLang, lang} = this.props;
        const staticText = tools.checkLanguage(NavbarText);
        return (
            <Navbar light expand="md">
                <Container>
                    <NavbarBrand href="/" className="text-capitalize">herb site</NavbarBrand>
                    <NavbarToggler onClick={this.toggle}/>
                    <Collapse isOpen={this.state.isOpen} navbar>
                        <Nav className="ml-auto" navbar>
                            <NavItem>
                                <NavLink href="" className={path === "/home" ? 'active' : ''} onClick={homeRoute}>{staticText.home}</NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink href="" className={path === "/herbs" ? 'active' : ''} onClick={herbsRoute}>{staticText.herb}</NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink href="" className={path === "/drugs" ? 'active' : ''} onClick={drugsRoute}>{staticText.drug}</NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink href="" className={path === "/activities" ? 'active' : ''} onClick={activitiesRoute}>{staticText.activity}</NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink href="" className={path === "/aboutUs" ? 'active' : ''} onClick={aboutUsRoute}>{staticText.aboutUs}</NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink href="#" onClick={ () => handleChangeLang('th') } className={`${lang === "th" ? "disabled" : "text-primary"}`}>TH</NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink href="#" onClick={ () => handleChangeLang('en') } className={`${lang === "en" ? "disabled" : "text-primary"}`}>EN</NavLink>
                            </NavItem>
                        </Nav>
                    </Collapse>
                </Container>
            </Navbar>
        );
    }
}

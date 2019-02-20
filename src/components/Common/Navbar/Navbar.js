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
        const {path, homeRoute, herbsRoute, aboutUsRoute, handleChangeLang, lang} = this.props;
        const staticText = tools.checkLanguage(NavbarText);
        return (
            <Navbar light expand="md" className="px-0">
                <Container>
                    <NavbarBrand href="/" className="text-capitalize">herb site</NavbarBrand>
                    <NavbarToggler onClick={this.toggle}/>
                    <Collapse isOpen={this.state.isOpen} navbar>
                        <Nav className="ml-auto" navbar>
                            <NavItem>
                                <NavLink href="" active={path === "/home" ? true : false} onClick={homeRoute}>Home</NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink href="" active={path === "/herbs" ? true : false} onClick={herbsRoute}>Herbs</NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink href="" active={path === "/about" ? true : false} onClick={aboutUsRoute}>About Us</NavLink>
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
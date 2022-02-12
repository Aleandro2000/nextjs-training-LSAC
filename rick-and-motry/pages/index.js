import React, { Component } from "react";
import FooterComponent from "../src/js/components/FooterComponent/FooterComponent.jsx";
import HomeComponent from "../src/js/components/HomeComponent/HomeComponent.jsx";
import AppWraper from "../src/js/components/Layout/AppWrapper.jsx";
import NavbarComponent from "../src/js/components/NavbarComponent/NavbarCoponent.jsx";

export default class Home extends Component {
    render() {
        return (
            <>
                <AppWraper />
                <NavbarComponent />
                <HomeComponent />
                <FooterComponent />
            </>
        );
    }
}

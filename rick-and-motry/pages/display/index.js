import React, { Component } from "react";
import DisplayComponent from "../../src/js/components/DisplayComponent/DisplayComponent.jsx";
import FooterComponent from "../../src/js/components/FooterComponent/FooterComponent.jsx";
import AppWraper from "../../src/js/components/Layout/AppWrapper.jsx";
import NavbarComponent from "../../src/js/components/NavbarComponent/NavbarCoponent.jsx";

export default class Display extends Component {
    render() {
        return (
            <>
                <AppWraper />
                <NavbarComponent />
                <DisplayComponent />
                <FooterComponent />
            </>
        );
    }
}

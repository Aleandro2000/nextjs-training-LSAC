import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "../styles/globals.css";
import "../src/css/main.css";

import { Provider } from "react-redux";
import store from "../src/js/store/store";

function MyApp({ Component, pageProps }) {
    return (
        <Provider store={store}>
            <Component {...pageProps} />
        </Provider>
    );
}

export default MyApp;

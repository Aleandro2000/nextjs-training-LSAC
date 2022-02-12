import React, { Component } from "react";
import Head from "next/head";

export default class AppWraper extends Component {
    render() {
        return (
            <>
                <Head>
                    <title>Rick &amp; Motry</title>
                    <meta name="description" content="Rick and Motry Doc" />
                    <link rel="icon" href="/favicon.ico" />
                    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"></link>
                    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/js/bootstrap.bundle.min.js" integrity="sha384-MrcW6ZMFYlzcLA8Nl+NtUVF0sA7MsXsP1UyJoMp4YLEuNSfAP+JcXn/tWtIaxVXM" crossOrigin="anonymous" />
                </Head>
            </>
        );
    }
}
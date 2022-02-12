import React, { Component } from "react"
import Link from "next/link"

export default class NavbarComponent extends Component {
    render() {
        return (
            <header>
                <nav className="navbar navbar-light bg-light container shadow">
                    <div className="navbar-brand">
                        Rick&amp;Motry
                    </div>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse text-center" id="navbarNav">
                        <ul className="navbar-nav">
                            <li className="nav-item m-2">
                                <Link className="nav-link" aria-current="page" href="/">Home</Link>
                            </li>
                            <li className="nav-item m-2">
                                <Link className="nav-link" href="/display">Display</Link>
                            </li>
                        </ul>
                    </div>
                </nav>
            </header >
        )
    }
}
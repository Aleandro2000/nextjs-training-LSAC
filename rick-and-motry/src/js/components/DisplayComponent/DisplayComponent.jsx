import React, { Component } from "react";
import { API } from "../../api";

export default class DisplayComponent extends Component {
    constructor() {
        super();
        this.state = {
            index: 1,
            data: {},
        };
        this.next = this.next.bind(this);
        this.previous = this.previous.bind(this);
    }

    async _handleFetch() {
        const { index } = this.state;
        await this.setState({
            data: await API(index),
        });
    }

    async componentDidMount() {
        await this._handleFetch();
    }

    async next() {
        const { index, data } = this.state;
        if (index < data.info.pages) {
            await this.setState({
                index: index + 1
            });
            await this._handleFetch();
        }
    }

    async previous() {
        const { index } = this.state;
        if (index > 1) {
            await this.setState({
                index: index - 1
            });
            await this._handleFetch();
        }
    }

    _display() {
        const { data, } = this.state;
        return data?.results?.map((item, index) => {
            return (
                <div className="bg-light container text-center mt-5" key={index}>
                    <img alt="" src={item?.image} />
                    <br />
                    <h1>
                        {item?.name}
                    </h1>
                    <br />
                    {item?.species}
                    <br />
                    {item?.gender}
                </div>
            );
        });
    }

    _pagination() {
        const { index, } = this.state;
        return (
            <nav className=" text-center d-flex justify-content-center" aria-label="Pagination">
                <ul className="pagination">
                    <li className="page-item">
                        <button className="page-link" onClick={this.previous} aria-label="Previous">
                            <span aria-hidden="true">&laquo;</span>
                        </button>
                    </li>
                    <li className="page-item"><span type="button" className="page-link">{index}</span></li>
                    <li className="page-item">
                        <button className="page-link" onClick={this.next} aria-label="Next">
                            <span aria-hidden="true">&raquo;</span>
                        </button>
                    </li>
                </ul>
            </nav>
        );
    }

    render() {
        return (
            <>
                {this._display()}
                <br /><br />
                {this._pagination()}
            </>
        );
    }
}
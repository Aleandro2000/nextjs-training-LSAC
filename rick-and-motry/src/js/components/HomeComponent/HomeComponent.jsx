import React, { Component } from "react";
import { connect, } from "react-redux";

class HomeComponent extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        const { like, likeStatus, } = this.props;

        return (
            <div className="card container mt-5">
                <button type="button" className="btn btn-dark" style={{maxWidth: "100px"}} onClick={like}>
                    <i className="fa fa-thumbs-up" /> {
                        likeStatus ? (
                            <>
                                LIKED
                            </>
                        ) : (
                            <>
                                LIKE
                            </>
                        )
                    }
                </button>
                <div className="card-body text-center p-5 fs-1 fw-bold">
                    Welcome to Rick and Motry Doc!
                </div>
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        likeStatus: state.likeReducer,
    };
};

const mapDispatchToProps = dispatch => {
    return {
        like: () => dispatch({ type: "LIKE" }),
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(HomeComponent);
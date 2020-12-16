import React from "react";
import ReactDom from "react-dom";
import Header from "./components/Header";
import PodcastRow from "./components/PodcastRow";
import Episode from "./components/Episode";

const App = () => {
    return (
        <div className="site-wrap">
            <Header />
            <div className="site-section">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-3">
                            <div className="featured-user mb-5 mb-lg-0">
                                <h3 className="mb-2">Search Podcasts</h3>
                                <div style={{ display: "flex" }}>
                                    <input
                                        type="text"
                                        style={{ height: 32 }}
                                        className="form-control mb-4"
                                    />
                                    <button
                                        className="btn btn-info p-1 ml-2"
                                        style={{ height: 32 }}
                                    >
                                        GO!
                                    </button>
                                </div>
                                <ul className="list-unstyled">
                                    <PodcastRow />
                                    <PodcastRow />
                                    <PodcastRow />
                                    <PodcastRow />
                                </ul>
                            </div>
                        </div>
                        <div className="col-lg-9">
                            <Episode />
                            <Episode />
                            <Episode />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

ReactDom.render(<App />, document.getElementById("root"));

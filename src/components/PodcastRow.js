import React from "react";

const PodcastRow = () => {
    return (
        <li>
            <a href="#" className="d-flex align-items-center p-2">
                <img
                    src="images/person_1.jpg"
                    alt="Image"
                    className="img-fluid mr-2"
                />
                <div className="podcaster">
                    <span className="d-block">Claire Stanford</span>
                    <span className="small">32,420 podcasts</span>
                </div>
            </a>
        </li>
    );
};

export default PodcastRow;

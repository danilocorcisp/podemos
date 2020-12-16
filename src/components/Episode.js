import React from "react";

const Episode = () => {
    return (
        <div className="d-block d-md-flex podcast-entry bg-white mb-5">
            <div
                className="image"
                style={{
                    backgroundImage: "url('images/img_1.jpg')",
                }}
            ></div>
            <div className="text">
                <h3 className="font-weight-light">
                    <a href="single-post.html">
                        Episode 08: How To Create Web Page Using Bootstrap 4
                    </a>
                </h3>
                <div className="text-white mb-3">
                    <span className="text-black-opacity-05">
                        <small>
                            By Mike Smith
                            <span className="sep">/</span> 16 September 2017
                            <span className="sep">/</span>
                            1:30:20
                        </small>
                    </span>
                </div>

                <div className="player">
                    <audio
                        id="player2"
                        preload="none"
                        controls
                        controlsList="nodownload"
                        style={{ width: "100%" }}
                    >
                        <source
                            src="http://hwcdn.libsyn.com/p/e/2/d/e2d49676d65218ec/p1541a.mp3?c_id=84308228&cs_id=84308228&expiration=1601254668&hwt=ccab3206052417d0e901722ab00c9c88"
                            type="audio/mp3"
                        />
                    </audio>
                </div>
            </div>
        </div>
    );
};

export default Episode;

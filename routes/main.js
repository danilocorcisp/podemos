const express = require("express");
const axios = require("axios");
const router = express.Router();
const { parseString } = require("xml2js");

router.get("/", (req, res, next) => {
    res.render("index");
});

router.get("/search", async (req, res, next) => {
    const url = "https://itunes.apple.com/search?term=sports&media=podcast";
    const { data } = await axios({
        url,
        method: "get",
        options: {
            headers: { Accept: "application/json" },
        },
    });
    const { results } = data;
    const podcasts = results.map((podcast, idx) => {
        return {
            id: podcast.idx,
            name: podcast.artistName,
            trackName: podcast.trackName,
            image: podcast.artworkUrl600,
            categories: podcast.genres,
            feed: podcast.feedUrl,
        };
    });
    res.json({
        results,
    });
});

router.post("/search", async (req, res, next) => {
    const searchTerm = req.body.term;
    const url = `https://itunes.apple.com/search?term=${searchTerm}&media=podcast`;
    const { data } = await axios({
        url,
        method: "get",
        options: {
            headers: { Accept: "application/json" },
        },
    });
    const { results } = data;
    const podcasts = results.map((podcast, index) => {
        return {
            id: index,
            name: podcast.artistName,
            trackName: podcast.trackName,
            image: podcast.artworkUrl600,
            categories: podcast.genres,
            feed: podcast.feedUrl,
        };
    });
    res.json({
        podcasts,
    });
});

router.get("/feed", async (req, res, next) => {
    const url = req.query.url;
    const { data } = await axios({
        url,
        method: "get",
    });
    parseString(data, (err, json) => {
        if (err) {
            return;
        }

        const { rss } = json;
        const { channel } = rss;
        const payload = channel[0];

        res.json(payload);
    });
});

module.exports = router;

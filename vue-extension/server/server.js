// server.js
const express = require('express');
const pool = require('./database');
const cors = require('cors')
const bcrypt = require('bcrypt');
const cookieParser = require('cookie-parser');
const jwt = require('jsonwebtoken');
const port = process.env.PORT || 3000;

const app = express();

app.use(cors({ origin: 'http://localhost:8080', credentials: true }));

app.use(express.json()); // Parses incoming requests with JSON payloads and is based on body-parser.
app.use(cookieParser()); // Parse Cookie header and populate req.cookies with an object keyed by the cookie names.

app.post('/posts', async(req, res) => { // Why is this not saving to database but saves in Data/postData.json 
    console.log("a post request has arrived");
    try {
        const post = req.body;
        const newpost = await pool.query(
            "INSERT INTO postlist(title, body, urllink) values ($1, $2, $3)    RETURNING*", [post.title, post.body, post.urllink]
        );
        res.json(newpost);
        console.log(res)
    } catch (err) {
        console.error(err.message);
    }
});


app.listen(port, () => {
    console.log("Server is listening to port " + port)
});
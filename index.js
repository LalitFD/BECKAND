
import dotenv from 'dotenv';
dotenv.config();


import express from 'express'; // ES6 syntax se import
const app = express();
const port = 4000;

app.get('/', (req, res) => {
    res.send('Ram Babu');
});

app.get('/twitter', (req, res) => {
    res.send('hiteshdotcom');
});

app.get('/login', (req, res) => {
    res.send('<h1>plese login at chai aur code </h1>')
})

app.get('/youtube', (req, res) => {
    res.send("<h2> Chai Aur Code </h2>")
})
app.listen(process.env.port, () => {
    console.log(`Example app listening on port ${port}`);
});

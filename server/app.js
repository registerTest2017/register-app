import express from 'express';
import path from 'path';
const app = express();

app.get('/', (req, res) => {
    res.send('Hello Worlds!');
});
app.get('/queryAllApplicationForm', (req, res) => {
    res.jsonp({
        test: 'value',
        mock: 'from server'
    });
});
app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
    next();
});

app.use('/static', express.static(path.resolve(__dirname, 'static')));

app.listen(4000, () => {
    console.log('Example app listening on port 4000!');
});

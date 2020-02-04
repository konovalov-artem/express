const express = require('./index.js')

const app = express();

const getSomethingFromDB = () => new Promise((_, rej) => setTimeout(() => rej('Error from db'), 2000));

app.get('/', async (req, res, next) => {
    console.log('get /');
    const data = await getSomethingFromDB();
    res.send(data);
})
app.post('/', async (req, res, next) => {
    console.log('post /');
    const data = await getSomethingFromDB();
    res.send(data);
})

app.use(function(err, req, res, next) {
    console.log('err', err);
    res.sendStatus(200);
})

app.listen(3354, () => console.log('server started'));

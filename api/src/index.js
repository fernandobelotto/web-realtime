import express from 'express';
import bodyParser from 'body-parser'
import cors from 'cors'

const app = express();
const PORT = 8000;

app.use(bodyParser.json())
app.use(cors())

let messages = [];

function getAllMessages(req, res) {

    res.send(messages)
}

function createMessage(req, res) {
    messages.push({ name: req.body.name, date: Date().toString(), email: req.body.email })
    res.send(req.body)
}


app.get('/message', getAllMessages)


app.post('/message', createMessage)


app.get('/', (req, res) => res.send('hello'));



app.listen(PORT, () => {
    console.log(`⚡️[server]: Server is running at http://localhost:${PORT}`);
});
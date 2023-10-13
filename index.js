
const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const { Configuration, OpenAIApi } = require('openai');
require('dotenv').config();

const OpenAI  = require("openai");

const openai = new OpenAI({
    apiKey: "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"
});


const app = express();
app.use(bodyParser.json());
app.use(cors());

app.post('/chat', async (req, res) => {
    const { prompt } = req.body;

    const completion = await openai.completions.create({
        model: "text-davinci-003",
        max_tokens: 512,
        temperature: 0,
        prompt: prompt,  // Corregido aquí, estaba como 'promt'
    });

    res.send(completion.choices[0].text);
});

const port = 8080;
app.listen(port, () => {
    console.log(`Server listening on port ${port}`);
});


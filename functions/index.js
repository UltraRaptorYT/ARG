require('dotenv').config()
const functions = require("firebase-functions");
const express = require('express');
const cors = require("cors");

const app = express()
app.use(cors())
app.use(express.json());
app.use(express.urlencoded({extended: false}));

const { Configuration, OpenAIApi } = require("openai");

const configuration = new Configuration({
	apiKey: process.env.OPENAI_API_KEY,
});
const answers = {
	"SECRETANSWER": "I'm impressed. Here's your link: bit.ly",
	"POTATOES": "I'm impressed. Here's your link: youtube.com"
}
const openai = new OpenAIApi(configuration);

app.get('/test', (req, res) => {
	res.status(200).json({response: "Am testing"})
})

app.post('/api/chat', async (req, res) => {
	let {prompt} = req.body;

	let answer_output = answers[prompt];
	if (!answer_output) {
		try {
			if (prompt.length == 0) {
				throw new Error();
			}
			const response = await openai.createCompletion({
				model: "davinci",
				prompt: `The following is a conversation where a human is trying to guess a code from an evil Mastermind. The Mastermind is tight lipped and replies with sarcastic responses. \n\nHuman: Help me solve this problem! Mastermind: No thanks.\n\nHuman: ${prompt}\nMastermind:`,
				temperature: 0.7,
				max_tokens: 20,
				top_p: 1,
				frequency_penalty: 0.0,
				presence_penalty: 0.0,
				stop: ["\n", ". ", "?", "Human: "],
			});
 
			answer_output ||= response.data.choices[0].text
		} catch (error) {
			answer_output = "?"
		}
	}
	res.status(200).json({message: answer_output})
})

exports.app = functions.https.onRequest(app)

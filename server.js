require('dotenv').config()

const express = require("express");
const http = require("http");
const cors = require("cors");
const path = require("path");
const { Configuration, OpenAIApi } = require("openai");
const PORT = process.env.PORT || 3000;

const app = express();
const server = http.createServer(app);
const configuration = new Configuration({
	apiKey: process.env.OPENAI_API_KEY,
});
const answers = {
	"SECRETANSWER": "I'm impressed. Here's your link: bit.ly",
	"POTATOES": "I'm impressed. Here's your link: youtube.com"
}
const openai = new OpenAIApi(configuration);

app.use(express.json());
app.use(express.urlencoded({extended: false}));
app.use(cors());
app.use(express.static("client/public"));

app.get("/new", (req, res) => {
	res.status(200).json({response: "This is new"})
});

app.get("/api/chat", async(req, res) => {
	let {prompt} = req.body;

	let answer_output = answers[prompt];
	if (!answer_output) {
		try {
			if (prompt.length == 0) {
				throw new Error();
			}
			const response = await openai.createCompletion({
				model: "davinci",
				prompt: `The following is a conversation between a human and an evil Mastermind. The Mastermind responds with useless and sarcastic responses.\n\nHuman: Help me solve this problem! Mastermind: Stop wasting my time.\n\nHuman: ${prompt}\nMastermind:`,
				temperature: 0.7,
				max_tokens: 20,
				top_p: 1,
				frequency_penalty: 0.0,
				presence_penalty: 0.0,
				stop: ["\n", ". "],
			});
			answer_output ||= response.data.choices[0].text
		} catch {
			answer_output = null
		}
	}
	res.status(200).json({response: answer_output || "Don't even try."})
});

app.get("/", (req, res) => {
	res.sendFile(path.resolve(__dirname, "client", "public", "index.html"));
});

app.get("*", (req, res) => {
	res.sendFile(path.resolve(__dirname, "client", "public", "404.html"));
});

server.listen(PORT, () => {
	console.log(`Server running on port ${PORT}`);
});
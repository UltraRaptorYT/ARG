// const URL = "http://127.0.0.1:5001/arg-test-3267b/us-central1/app/api/chat"
const URL = "https://us-central1-arg-test-3267b.cloudfunctions.net/app/api/chat"

msg = document.getElementById("chat")
chat = document.getElementById("chat_form");
box = document.getElementById("chat_box");

function parseMessage(message, is_bot) {
	if (is_bot) {
		return `<div class="d-flex flex-row justify-content-start">
			<p class="small ms-3 mb-2 rounded-3 text-muted px-3 py-2" style="background-color: #f5f6f7">
				${message}
			</p>
		</div>`
	} else {
		return `<div class="d-flex flex-row justify-content-end">
			<p class="small ms-3 mb-2 rounded-3 text-white px-3 py-2 bg-primary">
				${message}
			</p>
		</div>`
	}
}

function sendMessage(message) {
	box.innerHTML += parseMessage(message, false)
	axios({
		method: 'post',
		// headers: {
		// 	Authorization: 'Bearer ' + localStorage.getItem('authtoken')
		// },
		url: URL,
		data: {
			prompt: message,
		}
	}).then(response => {
		// Update the role
		localStorage.setItem('role', response.data.role)
		box.innerHTML += parseMessage(response.data.message, true)

	}).catch(err => {
		// console.log(err.response)
		box.innerHTML += parseMessage(response.data.message, '?')
	})
}


chat.addEventListener("submit", function(e){
	e.preventDefault();
	sendMessage(msg.value)
	msg.value = ""
});
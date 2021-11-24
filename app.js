window.onload = function () {
	const form = document.getElementById("form");
	let email = document.getElementById("email");
	const result = document.getElementById("result");
	form.addEventListener("submit", (event) => {
		event.preventDefault();
		email = email.value;
		const request = new XMLHttpRequest();
		request.addEventListener("readystatechange", () => {
			if (request.readyState === 4 && request.status === 200) {
				result.innerHTML = request.responseText;
			} else if (request.readyState === 4) {
				console.log("could not fetch the data");
			}
		});

		request.open(
			"GET",
			`https://flask-spamdetector.herokuapp.com/api/spamdetector?mail=${email}`
		);
		request.send();
	});
};

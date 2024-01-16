---
layout: layouts/page.liquid
title: Contact The Chicago Network
h1: Contact The Chicago Network
subhead:
---
<form name="contact" class="contactForm" netlify>
    <sl-input name="Name" class="contactForm" label="Name" size="medium"></sl-input>
    <sl-input name="Email" class="contactForm" label="Email" size="medium"></sl-input>
    <sl-textarea name="Message" label="Message"></sl-textarea>
	<sl-button type="submit" variant="primary" class="submitButton">Send</sl-button>
</form>

<script>
	const handleSubmit = (event) => {
	event.preventDefault();

	const myForm = event.target;
	const formData = new FormData(myForm);

	fetch("/", {
		method: "POST",
		headers: { "Content-Type": "application/x-www-form-urlencoded" },
		body: new URLSearchParams(formData).toString(),
	})
		.then(() => console.log("Form successfully submitted"))
		.catch((error) => alert(error));
	};

	document
	.querySelector(".contactForm")
	.addEventListener("submit", handleSubmit);
</script>

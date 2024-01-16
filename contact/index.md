---
layout: layouts/page.liquid
title: Contact The Chicago Network
h1: Contact The Chicago Network
subhead:
---
<form name="contact" class="contactForm" netlify>
<!-- plain HTMl elements will allow Netlify form detection to work properly: https://answers.netlify.com/t/netlify-forms-and-web-components/64229/2 -->
	<input type="text" name="Name" hidden disabled />
	<input type="email" name="Email" hidden disabled />
	<textarea name="Message" hidden disabled></textarea>
    <sl-input name="Name" class="contactForm" label="Name" size="medium"></sl-input>
    <sl-input name="Email" class="contactForm" label="Email" size="medium"></sl-input>
    <sl-textarea name="Message" label="Message"></sl-textarea>
	<sl-button type="submit" variant="primary" class="submitButton">Send</sl-button>
</form>

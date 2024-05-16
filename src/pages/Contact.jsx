import { useState } from "react";
import "./Contact.css";

export function Contact() {
	const [name, setName] = useState("");
	const [email, setEmail] = useState("");
	const [message, setMessage] = useState("");
	const [telephone, setTelephone] = useState("");
	const [formError, setFormError] = useState("");

	const handleSubmit = (event) => {
		event.preventDefault();

		if (!name || !email || !message || !telephone) {
			setFormError("Please fill in all the fields.");
		} else {
			// Form submission logic to do later
			alert("Thank you " + name + "! " + "Your message was sent successfully.");
			// Reset form fields after successful submission
			setName("");
			setEmail("");
			setMessage("");
			setTelephone("");
			setFormError("");
		}
	};

	return (
		<div className="contact-page">
			<h1>How can we help?</h1>
			<form onSubmit={(e) => handleSubmit(e)}>
				<div className="form-container">
					<div>
						<label>
							Name
							<input
								type="text"
								value={name}
								onChange={(e) => setName(e.target.value)}
								placeholder="Full Name"
							/>
						</label>
					</div>
					<div>
						<label> Email:</label>
						<input
							type="email"
							value={email}
							onChange={(e) => setEmail(e.target.value)}
							placeholder="Your Email"
						/>
					</div>
					<div>
						<label> Telephone:</label>
						<input
							type="tel"
							value={telephone}
							onChange={(e) => setTelephone(e.target.value)}
							placeholder="Your Telephone"
						/>
					</div>

					<div>
						<label>Message </label>
						<textarea
							type="text"
							value={message}
							onChange={(e) => setMessage(e.target.value)}
							placeholder="Your Message Here "
							rows={4}
							cols={200}
						/>
					</div>
					{formError && <p className="error">{formError}</p>}

					<div> Lorem Ipsum Street - Birmingham - B1 1BB - United Kingdom</div>
					<div> Phone: +44 012 003 4520 E-mail: contact@secretogsheba.uk </div>
				</div>

				<button className="submit1">Submit</button>
			</form>
		</div>
	);
}

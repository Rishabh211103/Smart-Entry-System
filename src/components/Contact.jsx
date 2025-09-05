import React, { useState } from "react";
import Heading from "./Heading";
import { useFormik } from "formik";
import { contactFormValidators } from "../utils/validators";
import EmailImg from "../assets/email-img.svg";
import GlobImg from "../assets/global-img.svg";
import logo from "../assets/Tedx-logo.svg";
import { makeQuery } from "../services/Contact";
import PhoneImg from "../assets/phone-img.svg";

const Contact = () => {
	const [sent, setSent] = useState(false);
	const [error, setError] = useState(false);
	const [loading,setLoading] = useState(false);

	const formik = useFormik({
		initialValues: {
			name: "",
			email: "",
			body: "",
		},
		validationSchema: contactFormValidators,

		onSubmit: async (values) => {
			setLoading(true);
			setSent(false);
			const response = await makeQuery(values);
			if (response.success) {
				setSent(true);
				resetForm();
			} else {
				setError(true);
			}
			setLoading(false);
		},
	});

	return (
		<>
			<div className="contact-form" id="contact-section">
				<Heading
					heading={"Contact Us"}
					content={
						"<p>We will be honoured to help you in the best possible way. Feel free to reach out to us.</p>"
					}
				/>
				<div className="contact-form-container">
					<div className="contact-form-input">
						<form onSubmit={formik.handleSubmit}>
							<label className="input-labels">Name</label>
							<div className="name-input">
								{/* <img src={ProfileImg} alt="" /> */}
								<input
									type="text"
									placeholder="Enter your name"
									name="name"
									id="name"
									onChange={formik.handleChange}
									defaultValue={formik.values.name}
									onBlur={formik.handleBlur}
								/>
								{formik.touched.name && formik.errors.name ? (
									<div className="alert-message">
										{formik.errors.name}
									</div>
								) : null}
							</div>
							<label className="input-labels">Email</label>
							<div className="email-input">
								{/* <img src={EmailImg} style={{opacity:"0.8"}} alt="" /> */}
								<input
									type="email"
									placeholder="Enter your email"
									name="email"
									id="email"
									onChange={formik.handleChange}
									defaultValue={formik.values.email}
									onBlur={formik.handleBlur}
								/>
								{formik.touched.email && formik.errors.email ? (
									<div className="alert-message">
										{formik.errors.email}
									</div>
								) : null}
							</div>
							<label className="input-labels">Message</label>
							<div className="message-input">
								{/* <img src={MessImg} alt="" /> */}
								<textarea
									placeholder="Message/Query"
									name="body"
									id="body  "
									onChange={formik.handleChange}
									defaultValue={formik.values.body}
									onBlur={formik.handleBlur}></textarea>
								{formik.touched.body && formik.errors.body ? (
									<div className="alert-message">
										{formik.errors.body}
									</div>
								) : null}
								{error ? (
									<div className="alert-message">
										Unable to process request!
									</div>
								) : null}
							</div>
							<div className="first-section-btn ">
								<button type="submit" className="contact-form-submission" disabled={sent || loading}>
									{sent ? "Sent ✅" : loading? "Sending..." : "Submit"}
								</button>
							</div>
						</form>
					</div>
					<div className="contact-form-text-part">
						<img src={logo} className="tedx-geu" />
						<div className="text-details-part-final">
							<p>
								<img src={EmailImg} alt="" />
								<a
									href="mailto:contact@tedxgraphicerauniversity.com"
									className="nav-a-tag">
									<span>contact@tedxgraphicerauniversity.com</span>
								</a>
							</p>
							<p>
								<img src={PhoneImg} alt="" />
								<span>
									<a
										href="tel:+918077043655"
										className="nav-a-tag">
										+91 8077043655
									</a>
									,
									<a
										href="tel:+916397232910"
										className="nav-a-tag">
										{" "}
										+91 6397232910
									</a>
								</span>
							</p>
							<p>
								<img src={GlobImg} alt="" />
								<span>Dehradun ,India</span>
							</p>
						</div>
					</div>
				</div>
			</div>
		</>
	);
};

export default Contact;

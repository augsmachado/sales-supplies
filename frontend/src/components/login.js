import React, { useState } from "react";

import logo from "../img/logo_sales_supplies.png";

//TODO: improve login page using oauth and encryptation
const Login = (props) => {
	const initialUserState = {
		name: "",
		password: "",
	};

	const [user, setUser] = useState(initialUserState);

	const handleInputChange = (event) => {
		const { name, value } = event.target;
		setUser({ ...user, [name]: value });
	};

	const login = () => {
		props.login(user);
		props.history.push("/");
	};

	// TODO: add background color and centralize logo and Please sign in
	return (
		<div class="col-4 mx-auto align-items-center">
			<div className="submit-form">
				<div clas="d-grid gap-2 col-6">
					<img
						class="rounded mb-4 mx-auto"
						src={logo}
						alt="Sales Supplies Logotype"
						width="50"
						height="50"
						align="center"
					/>
					<h1 class="h3 mb-3 fw-normal">Please sign in</h1>
				</div>
				<div className="form-group">
					<label htmlFor="user">Username</label>
					<input
						type="text"
						className="form-control"
						id="name"
						required
						value={user.name}
						onChange={handleInputChange}
						name="name"
						placeholder="Enter your username"
					/>
				</div>

				<br />
				<div className="form-group">
					<label htmlFor="password">Password</label>
					<input
						type="password"
						className="form-control"
						id="password"
						required
						value={user.password}
						onChange={handleInputChange}
						name="password"
						placeholder="Enter your password"
					/>
				</div>
			</div>
			<br />
			<div class="d-grid gap-2 col-6 mx-auto">
				<button onClick={login} className="btn btn-primary">
					Login
				</button>
			</div>
		</div>
	);
};

export default Login;

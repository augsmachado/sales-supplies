import React from "react";
import { Switch, Route, Link } from "react-router-dom";

import "bootstrap/dist/css/bootstrap.min.css";
import logo from "./img/logo_sales_supplies.png";

import Login from "./components/login";

function App() {
	const [user, setUser] = React.useState(null);

	async function login(user = null) {
		setUser(user);
	}

	async function logout() {
		setUser(null);
	}

	return (
		<div className="App">
			<nav className="navbar navbar-expand navbar-dark bg-dark">
				<a href="/sales" className="navbar-brand">
					<img
						src={logo}
						alt="Sales Supplies Logotype"
						width="30"
						height="30"
					></img>
					Sales Supplies
				</a>
				<div className="navbar-nav mr-auto">
					<li className="nav-item">
						<Link to={"/sales"} className="nav-link">
							Sales
						</Link>
					</li>
					<li className="nav-item">
						{user ? (
							// eslint-disable-next-line jsx-a11y/anchor-is-valid
							<a
								onClick={logout}
								className="nav-link"
								style={{ cursor: "pointer" }}
							>
								Logout {user.name}
							</a>
						) : (
							<Link to={"/login"} className="nav-link">
								Login
							</Link>
						)}
					</li>
				</div>
			</nav>

			<div className="container mt-3">
				<Switch>
					<Route
						path="/login"
						render={(props) => <Login {...props} login={login} />}
					/>
				</Switch>
			</div>
		</div>
	);
}

export default App;

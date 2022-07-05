import Input from "@jetbrains/ring-ui/dist/input/input";
import Button from "@jetbrains/ring-ui/dist/button/button";
import { Grid, Row, Col } from "@jetbrains/ring-ui/dist/grid/grid";
import Heading from "@jetbrains/ring-ui/dist/heading/heading";
import { useState } from "react";

function Login(props) {
	const [loginInfo, setLoginInfo] = useState({ email: "", password: "" });
	const [isLoggedIn, setIsLoggedIn] = useState(false);
	function submitForm(e) {
		e.preventDefault();
		console.log("submit");
		console.log(loginInfo);
		setIsLoggedIn(true);
	}
	function handleChange(e) {
		loginInfo[e.target.name] = e.target.value;
		setLoginInfo(loginInfo);
	}
	return (
		<Grid style={{ marginTop: "50px" }}>
			<Row center={"xs"}>
				<Col xs={12} sm={6} md={6} lg={6}>
					<div className="cell">
						{!isLoggedIn ? (
							<div className="login">
								<Heading level={Heading.Levels.H1}>Login Form</Heading>
								<div className="login-form">
									<form method="POST" onSubmit={submitForm}>
										<Input
											label="Email"
											name="email"
											onChange={handleChange}
											type={"email"}
											placeholder="Email"
											size="FULL"
											required
											autoComplete="off"
										/>
										<Input
											label="Password"
											name="password"
											onChange={handleChange}
											type={"password"}
											placeholder="Password"
											size="FULL"
											required
										/>
										<Button primary loader={false} type="submit">
											Login
										</Button>
										<Button style={{ marginLeft: '10px' }} >
											Forgot Password
										</Button>
									</form>
								</div>
							</div>
						) : (
							<Heading level={Heading.Levels.H1}>Logged In</Heading>
						)}
					</div>
				</Col>
			</Row>
		</Grid>
	);
}

export default Login;

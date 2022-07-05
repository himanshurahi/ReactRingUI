import Input from "@jetbrains/ring-ui/dist/input/input";
import Button from "@jetbrains/ring-ui/dist/button/button";
import {Grid, Row, Col} from "@jetbrains/ring-ui/dist/grid/grid";
import Heading from "@jetbrains/ring-ui/dist/heading/heading";
import Dialog from "@jetbrains/ring-ui/dist/dialog/dialog";
import {useEffect, useState} from "react";
import {Header, Content} from "@jetbrains/ring-ui/dist/island/island";
import Panel from "@jetbrains/ring-ui/dist/panel/panel";

function CreateTicket(props) {
	const [loginInfo, setLoginInfo] = useState({email: "", password: ""});
	const [isLoggedIn, setIsLoggedIn] = useState(false);
	const [toggleModal, setToggleModal] = useState(false);
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
	function toggleModalHandler() {
		setToggleModal(!toggleModal);
	}
	useEffect(() => {
		console.log("useEffect from CreateTicket");
	}, []);
	return (
		<>
			<Grid style={{marginTop: "50px"}}>
				<Row center={"xs"}>
					<Col xs={12} sm={6} md={6} lg={6}>
						<div className="cell">
							{!isLoggedIn ? (
								<div className="login">
									<Heading level={Heading.Levels.H1}>Create New Ticket</Heading>
									<div className="login-form">
										<form method="POST" onSubmit={submitForm}>
											<Input
												label="Title"
												name="title"
												onChange={handleChange}
												type={"text"}
												placeholder="title"
												size="FULL"
												required
												autoComplete="off"
											/>

											<Button primary loader={false} type="submit">
												Create
											</Button>
											<Button style={{marginLeft: "10px"}} onClick={toggleModalHandler}>
												Open Modal
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
			<Dialog
				label="Dialog"
				show={toggleModal}
				onCloseAttempt={toggleModalHandler}
				trapFocus
				autoFocusFirst={true}
				showCloseButton>
				<Header>Demo Form</Header>
				<Content style={{textAlign: "center"}}>
					<form method="POST" onSubmit={submitForm}>
						<Input
							label="text"
							name="Text"
							onChange={handleChange}
							type={"text"}
							placeholder="text"
							size="FULL"
							required
							autoComplete="off"
						/>
                        
						{/* <Button primary loader={false} type="submit">
									Login
								</Button>
								<Button style={{marginLeft: "10px"}}>Forgot Password</Button> */}
					</form>
				</Content>
				<Panel>
					<Button primary onClick={toggleModalHandler}>
						Save
					</Button>
					<Button onClick={toggleModalHandler}>Cancel</Button>
				</Panel>{" "}
			</Dialog>
		</>
	);
}

export default CreateTicket;

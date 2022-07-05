import {useState} from "react";
import {FaBars, FaHome, FaPlus, FaTicketAlt} from "react-icons/fa";
import "./Sidebar.css";
import {motion} from "framer-motion";
function Sidebar({children}) {
	const [open, setOpen] = useState(false);
	let menuItems = [
		{
			name: "Home",
			icon: <FaHome />,
		},
		{
			name: "Tickets",
			icon: <FaTicketAlt />,
		},
		{
			name: "Create Ticket",
			icon: <FaPlus />,
		},
	];

	function toggle() {
		setOpen(!open);
	}
	return (
		<div style={{display: "flex"}}>
			<motion.div
				className="sidemenu"
				animate={{
					width: open ? "300px" : "100px",
				}}>
				<div
					className="sidemenu-header"
					style={{visibility: open ? "visible" : "hidden"}}>
					<div className="sidemenu-logo">
						<h2>Logo</h2>
					</div>
				</div>
				<div className="sidemenu-items">
					{menuItems.map((item, index) => {
						return (
							<div className="sidemenu-item" key={index} style={{padding: !open && "0px"}}>
								{item.icon}
								{open && <span>{item.name}</span>}
							</div>
						);
					})}
				</div>
				<div className="bars_icon" onClick={toggle}>
					<FaBars />
				</div>
			</motion.div>
			<div style={{width: "100%"}}>{children}</div>
		</div>
	);
}

export default Sidebar;

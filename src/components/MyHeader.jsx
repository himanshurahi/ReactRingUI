import Header, {Logo} from "@jetbrains/ring-ui/dist/header/header";
import Link from "@jetbrains/ring-ui/dist/link/link";
import Tray from "@jetbrains/ring-ui/dist/header/tray";
import TrayIcon from "@jetbrains/ring-ui/dist/header/tray-icon";
import DropdownMenu from "@jetbrains/ring-ui/dist/dropdown-menu/dropdown-menu";
import addIcon from "@jetbrains/icons/add-20px";
import giftIcon from "@jetbrains/icons/gift-20px";
import helpIcon from "@jetbrains/icons/help-20px";
import searchIcon from "@jetbrains/icons/search-20px";
import settingsIcon from "@jetbrains/icons/settings-20px";
import userIcon from "@jetbrains/icons/user-20px";
function MyHeader() {
	return (
		<Header theme={"dark"} className={"compactHeader"}>
			<a title="Hub" href="/">
				<Logo size={Logo.Size.Size48} />
			</a>
			<Link active href="#">
				Users
			</Link>
			<Link href="#">Groups</Link>
			<Link href="#">Spaces</Link>
			<Link href="#">Services</Link>
			<Tray>
				<TrayIcon primary title="Create issue" icon={userIcon} />
				<TrayIcon title="Help" icon={helpIcon} />
				<TrayIcon title="What's new" icon={giftIcon} />
				<TrayIcon title="Search" icon={searchIcon} />
				<DropdownMenu
					data={[{label: "Test"}, {label: "Test2"}]}
					anchor={<TrayIcon title="Settings" active={true} icon={settingsIcon} />}
					menuProps={{top: -12}}
				/>
			</Tray>
		</Header>
	);
}

export default MyHeader;

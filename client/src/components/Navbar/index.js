import styles from "./styles.module.css";
import { NavLink } from "react-router-dom";
import { Button } from "@chakra-ui/react";

function Navbar() {
	return (
		<nav>
			<div className={styles.left}>
				<div className='logo'>
					<NavLink to='/'>eCommerce</NavLink>
				</div>

				<ul className={styles.menu}>
					<li>
						<NavLink to='/'>Products</NavLink>
					</li>
				</ul>
			</div>

			<div className={styles.right}>
				<NavLink to='/signin'>
					<Button colorScheme='blue'>Login</Button>
				</NavLink>
				<NavLink to='/signup'>
					<Button colorScheme='blue'>Register</Button>
				</NavLink>
			</div>
		</nav>
	);
}

export default Navbar;

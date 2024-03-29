import { useContext, useState } from "react";
import moon from "../assets/icons/moon.svg";
import sun from "../assets/icons/sun.svg";
import logo from "../assets/logo.svg";
import ring from "../assets/ring.svg";
import shoppingCart from "../assets/shopping-cart.svg";
import CartDetails from "../cine/CartDetails";
import MovieContext, { ThemeContext } from "../context";

const Header = () => {
	const [showCart, setShowCart] = useState(false);
	const { cartData } = useContext(MovieContext);
	const { theme, setTheme } = useContext(ThemeContext);

	const handleShowCart = () => {
		setShowCart(true);
	};

	const handleCloseCart = () => {
		setShowCart(false);
	};

	return (
		<header>
			{showCart && <CartDetails onClose={handleCloseCart} />}
			<nav className="container flex items-center justify-between space-x-10 py-6">
				<a href="index.html">
					<img src={logo} width="139" height="26" alt="" />
				</a>

				<ul className="flex items-center space-x-5">
					<li>
						<button className="bg-primary/20 dark:bg-primary/[7%] rounded-lg backdrop-blur-[2px] p-1 inline-block">
							<img src={ring} width="24" height="24" alt="" />
						</button>
					</li>
					<li>
						<button
							onClick={() => setTheme(theme === "light" ? "dark" : "light")}
							className="bg-primary/20 dark:bg-primary/[7%] rounded-lg backdrop-blur-[2px] p-1 inline-block"
						>
							{theme === "light" ? (
								<img src={sun} width="24" height="24" alt="" />
							) : (
								<img src={moon} width="24" height="24" alt="" />
							)}
						</button>
					</li>
					<li>
						<button
							onClick={handleShowCart}
							className="bg-primary/20 dark:bg-primary/[7%] rounded-lg backdrop-blur-[2px] p-1 inline-block"
						>
							<img
								src={shoppingCart}
								height="24"
								width="24"
								alt="shopping cart"
							/>
							{cartData.length > 0 && (
								<span className=" rounded-full absolute top-[-55%] -left-[-90%] bg-primary text-white p-1 w-[30px] h-[30px] flex justify-center items-center">
									{cartData.length}
								</span>
							)}
						</button>
					</li>
				</ul>
			</nav>
		</header>
	);
};

export default Header;

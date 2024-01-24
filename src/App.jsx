import { useState } from "react";
import MovieContext, { ThemeContext } from "./context";
import Home from "./pages/Home";

function App() {
	const [cartData, setCartData] = useState([]);
	const [theme, setTheme] = useState("light");

	const cartInfo = {
		cartData,
		setCartData,
	};

	const themeInfo = {
		theme,
		setTheme,
	};

	return (
		<>
			<ThemeContext.Provider value={themeInfo}>
				<MovieContext.Provider value={cartInfo}>
					<Home />
				</MovieContext.Provider>
			</ThemeContext.Provider>
		</>
	);
}

export default App;

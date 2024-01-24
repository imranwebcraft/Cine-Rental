import { useReducer, useState } from "react";
import MovieContext, { ThemeContext } from "./context";
import Home from "./pages/Home";
import cartReducer, { initialData } from "./reducers/CartReducer";
function App() {
	const [theme, setTheme] = useState("dark");
	const [cartData, dispatch] = useReducer(cartReducer, initialData);
	console.log(cartData);

	const cartInfo = {
		cartData,
		dispatch,
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

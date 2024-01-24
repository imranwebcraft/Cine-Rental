import { useContext } from "react";
import MovieList from "../cine/MovieList";
import Footer from "../components/Footer";
import Header from "../components/Header";
import Sidebar from "../components/Sidebar";
import { ThemeContext } from "../context";

const Home = () => {
	const { theme } = useContext(ThemeContext);
	console.log(theme);

	return (
		<div className={` w-full h-full ${theme === "light" ? "" : "dark"}`}>
			<Header />
			<main>
				<div className="container grid lg:grid-cols-[218px_1fr] gap-[3.5rem]">
					<Sidebar />
					<MovieList />
				</div>
			</main>
			<Footer />
		</div>
	);
};

export default Home;

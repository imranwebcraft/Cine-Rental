import { useContext, useState } from "react";
import MovieContext from "../context";
import getImageUrl from "../utils/cine-utility";
import MovieDetailsModal from "./MovieDetailsModal";
import Rating from "./Rating";

const MovieCard = ({ movie }) => {
	const [showModal, setShowModal] = useState(false);
	const [selectedMovie, setSelectedMovie] = useState(null);

	const { cartData, setCartData } = useContext(MovieContext);
	// Handlers

	// Modal open event handler
	const handleModalOpenClick = (movie) => {
		setSelectedMovie(movie);
		setShowModal(true);
	};

	// Modal close event handler
	const handleModalCloseClick = () => {
		setSelectedMovie(null);
		setShowModal(false);
	};

	const handleAddToCart = (movie, e) => {
		e.stopPropagation();
		const found = cartData.find((item) => item.id === movie.id);
		if (found) {
			return console.error("Already added to cart");
		} else {
			setCartData([...cartData, movie]);
		}
	};

	return (
		<>
			{/* Show details modal conditionally */}
			{showModal && (
				<MovieDetailsModal
					movie={selectedMovie}
					onClose={handleModalCloseClick}
				/>
			)}
			<a href="#" onClick={() => handleModalOpenClick(movie)}>
				<figure className="p-4 border border-black/10 shadow-sm dark:border-white/10 rounded-xl">
					<img
						className="w-full object-cover"
						src={getImageUrl(movie.cover)}
						alt="movie cover image"
					/>
					<figcaption className="pt-4 flex flex-col h-full">
						<h3 className="text-xl mb-1">{movie.title}</h3>
						<p className="text-[#575A6E] text-sm mb-2">{movie.genre}</p>
						{/* Rating */}
						<Rating value={movie.rating} />

						<button
							onClick={(e) => handleAddToCart(movie, e)}
							className="bg-primary hover:bg-green-600 duration-300 rounded-lg py-2 px-5 flex items-center justify-center gap-2 text-[#000] font-semibold text-sm"
							href="#"
						>
							<img src="./assets/tag.svg" alt="" />
							<span>${movie.price} | Add to Cart</span>
						</button>
					</figcaption>
				</figure>
			</a>
		</>
	);
};

export default MovieCard;

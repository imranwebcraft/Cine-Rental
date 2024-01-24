import { useContext } from "react";
import Delete from "../assets/delete.svg";
import Checkout from "../assets/icons/checkout.svg";
import MovieContext from "../context";
import getImageUrl from "../utils/cine-utility";

const CartDetails = ({ onClose }) => {
	const { cartData, setCartData } = useContext(MovieContext);

	const handleMovieRemove = (movie) => {
		const filteredMovie = cartData.filter((item) => item.id !== movie.id);
		setCartData(filteredMovie);
	};

	return (
		<div className="fixed top-0 left-0 w-screen h-screen z-50 bg-black/60 backdrop-blur-sm">
			<div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-[420px] sm:max-w-[600px] lg:max-w-[790px] p-4 max-h-[90vh] overflow-auto">
				<div className="bg-white shadow-md dark:bg-white rounded-2xl overflow-hidden p-5 md:p-9">
					<h2 className="text-2xl lg:text-[30px] mb-10 font-bold">
						Your Carts
					</h2>
					{/* Cart Movie list */}
					<div className="space-y-8 lg:space-y-12 max-h-[450px] overflow-auto mb-10 lg:mb-14">
						{cartData.length === 0 ? (
							<div className=" text-lg font-bold text-center">
								No Item In The Cart
							</div>
						) : (
							<>
								{" "}
								{cartData.map((item) => (
									<div
										key={item.id}
										className="grid grid-cols-[1fr_auto] gap-4"
									>
										<div className="flex items-center gap-4">
											<img
												className="rounded overflow-hidden w-[50px] h-[50px]"
												src={getImageUrl(item.cover)}
												alt="movie cover image"
											/>
											<div>
												<h3 className="text-base md:text-xl font-bold">
													{item.title}
												</h3>
												<p className="max-md:text-xs text-[#575A6E]">
													{item.genre}
												</p>
												<span className="max-md:text-xs">${item.price}</span>
											</div>
										</div>
										<div className="flex justify-between gap-4 items-center">
											<button
												onClick={() => handleMovieRemove(item)}
												className="bg-[#D42967] rounded-md p-2 md:px-4 inline-flex items-center space-x-2 text-white"
											>
												<img
													className="w-5 h-5"
													src={Delete}
													alt="delete icon"
												/>
												<span className="max-md:hidden">Remove</span>
											</button>
										</div>
									</div>
								))}
							</>
						)}
					</div>

					{/* Action Button */}
					<div className="flex items-center justify-end gap-2">
						<button className="rounded-md p-2 md:px-4 inline-flex items-center space-x-2 bg-primary text-[#171923] text-sm">
							<img src={Checkout} width="24" height="24" alt="checkout icon" />
							<span>Checkout</span>
						</button>
						<button
							onClick={onClose}
							className="border border-[#74766F] rounded-lg py-2 px-5 flex items-center justify-center gap-2 text-red-500 hover:bg-red-500 hover:text-white font-semibold hover:border-transparent duration-300 text-sm"
						>
							Cancel
						</button>
					</div>
				</div>
			</div>
		</div>
	);
};

export default CartDetails;
